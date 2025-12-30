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
        const groupsResponse = await fetch(
            `https://app.base44.com/api/apps/${parentProjectId}/entities/LifeGroup`,
            {
                headers: {
                    'Authorization': `Bearer ${parentApiKey}`,
                    'Content-Type': 'application/json'
                }
            }
        );

        if (!groupsResponse.ok) {
            throw new Error(`Failed to fetch life groups: ${groupsResponse.statusText}`);
        }

        const groups = await groupsResponse.json();

        // Fetch signups to count members per group
        const signupsResponse = await fetch(
            `https://app.base44.com/api/apps/${parentProjectId}/entities/LifeGroupSignup`,
            {
                headers: {
                    'Authorization': `Bearer ${parentApiKey}`,
                    'Content-Type': 'application/json'
                }
            }
        );

        if (signupsResponse.ok) {
            const signups = await signupsResponse.json();
            
            // Count signups per group
            const signupCounts = {};
            signups.forEach(signup => {
                signupCounts[signup.group_id] = (signupCounts[signup.group_id] || 0) + 1;
            });

            // Add current_members count to each group
            groups.forEach(group => {
                group.current_members = signupCounts[group.id] || 0;
            });
        }
        
        return Response.json({ 
            success: true, 
            groups: groups 
        });

    } catch (error) {
        return Response.json({ 
            success: false, 
            error: error.message 
        }, { status: 500 });
    }
});