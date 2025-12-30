import { createClientFromRequest } from 'npm:@base44/sdk@0.8.6';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    
    // Authenticate user
    const user = await base44.auth.me();
    if (!user) {
      return Response.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { event, signup } = await req.json();

    // Get all admin users
    const admins = await base44.asServiceRole.entities.User.filter({ role: 'admin' });
    
    // Send email to each admin
    for (const admin of admins) {
      await base44.integrations.Core.SendEmail({
        from_name: "Vineyard Community Church",
        to: admin.email,
        subject: `New Newcomers' Lunch Signup - ${signup.full_name}`,
        body: `
          <!DOCTYPE html>
          <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: #1e3a5f; color: white; padding: 30px 20px; text-align: center; border-radius: 10px 10px 0 0; }
              .content { background: #f9f9f9; padding: 30px 20px; border-radius: 0 0 10px 10px; }
              .event-details { background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #d4a853; }
              .signup-details { background: white; padding: 20px; border-radius: 8px; }
              .detail-row { padding: 10px 0; border-bottom: 1px solid #eee; }
              .detail-row:last-child { border-bottom: none; }
              .label { font-weight: bold; color: #1e3a5f; display: inline-block; width: 150px; }
              .value { color: #555; }
              .footer { text-align: center; padding: 20px; color: #888; font-size: 12px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1 style="margin: 0; font-weight: 300;">New Lunch Signup</h1>
              </div>
              <div class="content">
                <div class="event-details">
                  <h2 style="color: #1e3a5f; margin-top: 0;">Event Details</h2>
                  <div class="detail-row">
                    <span class="label">Event:</span>
                    <span class="value">${event.title}</span>
                  </div>
                  <div class="detail-row">
                    <span class="label">Date:</span>
                    <span class="value">${new Date(event.date).toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}</span>
                  </div>
                  <div class="detail-row">
                    <span class="label">Time:</span>
                    <span class="value">${event.time}</span>
                  </div>
                  <div class="detail-row">
                    <span class="label">Location:</span>
                    <span class="value">${event.location}</span>
                  </div>
                </div>

                <div class="signup-details">
                  <h2 style="color: #1e3a5f; margin-top: 0;">Attendee Information</h2>
                  <div class="detail-row">
                    <span class="label">Name:</span>
                    <span class="value">${signup.full_name}</span>
                  </div>
                  <div class="detail-row">
                    <span class="label">Email:</span>
                    <span class="value"><a href="mailto:${signup.email}" style="color: #d4a853;">${signup.email}</a></span>
                  </div>
                  ${signup.allergies ? `
                  <div class="detail-row">
                    <span class="label">Allergies/Dietary:</span>
                    <span class="value">${signup.allergies}</span>
                  </div>
                  ` : ''}
                  ${signup.comments ? `
                  <div class="detail-row">
                    <span class="label">Comments:</span>
                    <span class="value">${signup.comments}</span>
                  </div>
                  ` : ''}
                </div>
              </div>
              <div class="footer">
                <p>This is an automated notification from Vineyard Community Church</p>
              </div>
            </div>
          </body>
          </html>
        `
      });
    }

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});