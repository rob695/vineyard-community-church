import { createClientFromRequest } from 'npm:@base44/sdk@0.8.6';

Deno.serve(async (req) => {
    try {
        const base44 = createClientFromRequest(req);
        
        // Authenticate the user
        const user = await base44.auth.me();
        if (!user) {
            return Response.json({ error: 'Unauthorized' }, { status: 401 });
        }

        // Get signup data from request body
        const body = await req.json();
        const { group_id, full_name, email, phone, message } = body;

        // Validate required fields
        if (!group_id || !full_name || !email) {
            return Response.json({ 
                error: 'Missing required fields: group_id, full_name, and email are required' 
            }, { status: 400 });
        }

        // Connect to parent project
        const parentProjectId = '69000e8259035103bafa3063';
        const parentApiKey = Deno.env.get("PARENT_PROJECT_API_KEY");

        // Submit signup to parent project
        const response = await fetch(
            `https://app.base44.com/api/apps/${parentProjectId}/entities/LifeGroupSignup`,
            {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${parentApiKey}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    group_id,
                    full_name,
                    email,
                    phone: phone || null,
                    message: message || null,
                    status: 'pending'
                })
            }
        );

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || `Failed to submit signup: ${response.statusText}`);
        }

        const data = await response.json();
        
        return Response.json({ 
            success: true, 
            signup: data 
        });

    } catch (error) {
        return Response.json({ 
            success: false, 
            error: error.message 
        }, { status: 500 });
    }
});