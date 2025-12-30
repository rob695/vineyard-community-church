import { createClientFromRequest } from 'npm:@base44/sdk@0.8.6';

Deno.serve(async (req) => {
    try {
        const base44 = createClientFromRequest(req);
        
        // Authenticate the user (optional for public data)
        const user = await base44.auth.me().catch(() => null);

        // Connect to parent project
        const parentProjectId = '69000e8259035103bafa3063';
        const parentApiKey = Deno.env.get("PARENT_PROJECT_API_KEY");

        // Fetch life groups from parent project
        const response = await fetch(
            `https://app.base44.com/api/apps/${parentProjectId}/entities/LifeGroup`,
            {
                headers: {
                    'Authorization': `Bearer ${parentApiKey}`,
                    'Content-Type': 'application/json'
                }
            }
        );

        if (!response.ok) {
            throw new Error(`Failed to fetch life groups: ${response.statusText}`);
        }

        const data = await response.json();
        
        return Response.json({ 
            success: true, 
            groups: data 
        });

    } catch (error) {
        return Response.json({ 
            success: false, 
            error: error.message 
        }, { status: 500 });
    }
});