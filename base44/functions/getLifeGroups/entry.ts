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
            
            // Group signups by group_id with member details
            const signupsByGroup = {};
            signups.forEach(signup => {
                if (!signupsByGroup[signup.group_id]) {
                    signupsByGroup[signup.group_id] = [];
                }
                signupsByGroup[signup.group_id].push({
                    name: signup.member_name,
                    email: signup.member_email
                });
            });

            // Add current_members count and member list to each group
            groups.forEach(group => {
                const members = signupsByGroup[group.id] || [];
                group.current_members = members.length;
                group.members = members;
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