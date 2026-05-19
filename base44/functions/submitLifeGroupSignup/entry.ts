import { createClientFromRequest } from 'npm:@base44/sdk@0.8.6';

Deno.serve(async (req) => {
    try {
        const base44 = createClientFromRequest(req);

        // Get signup data from request body
        const body = await req.json();
        const { group_id, group_title, member_name, member_email, day_of_week, time, location, leader_name } = body;

        // Validate required fields
        if (!group_id || !group_title || !member_name || !member_email) {
            return Response.json({ 
                error: 'Missing required fields' 
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
                    group_title,
                    member_name,
                    member_email,
                    member_id: Math.floor(1000 + Math.random() * 9000).toString()
                })
            }
        );

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || `Failed to submit signup: ${response.statusText}`);
        }

        const data = await response.json();

        // Send welcome email to member
        const emailHtml = `
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #1e3a5f; color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
        .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
        .details { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; }
        .detail-row { display: flex; padding: 10px 0; border-bottom: 1px solid #eee; }
        .detail-label { font-weight: bold; min-width: 120px; color: #1e3a5f; }
        .detail-value { color: #666; }
        .footer { text-align: center; margin-top: 20px; color: #666; font-size: 14px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1 style="margin: 0; font-size: 28px;">Welcome to Your Life Group! 🎉</h1>
        </div>
        <div class="content">
            <p>Hi <strong>${member_name}</strong>,</p>
            <p>Welcome to the group! We're so glad you've decided to join. Life groups are a wonderful way to build deeper connections and grow together in community.</p>
            
            <div class="details">
                <h3 style="color: #1e3a5f; margin-top: 0;">👥 Your Life Group Details</h3>
                <div class="detail-row">
                    <span class="detail-label">Group:</span>
                    <span class="detail-value">${group_title}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Meets:</span>
                    <span class="detail-value">${day_of_week} at ${time}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Location:</span>
                    <span class="detail-value">${location}</span>
                </div>
                <div class="detail-row" style="border-bottom: none;">
                    <span class="detail-label">Leader:</span>
                    <span class="detail-value">${leader_name}</span>
                </div>
            </div>
            
            <p><strong>We look forward to seeing you there!</strong></p>
            <p style="margin-bottom: 0;">Blessings,<br>Vineyard Community Church</p>
        </div>
        <div class="footer">
            <p>Vineyard Community Church | 18A Benbow Close, Daventry, NN11 4JP</p>
        </div>
    </div>
</body>
</html>
        `;

        await base44.integrations.Core.SendEmail({
            to: member_email,
            subject: `Welcome to ${group_title} Life Group!`,
            body: emailHtml,
            from_name: 'Vineyard Community Church'
        });
        
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