import { createClientFromRequest } from 'npm:@base44/sdk@0.8.6';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);

    // Optionally authenticate the user
    const isAuthenticated = await base44.auth.isAuthenticated();
    if (!isAuthenticated) {
      // Allow public access - no authentication required
    }

    const parentProjectId = '69000e8259035103bafa3063';
    const parentApiKey = Deno.env.get("PARENT_PROJECT_API_KEY");
    
    if (!parentApiKey) {
      return Response.json({ 
        error: "Parent project API key not configured" 
      }, { status: 500 });
    }

    // Fetch teachings from parent project
    const teachingsResponse = await fetch(
      `https://app.base44.com/api/apps/${parentProjectId}/entities/Teaching`,
      {
        headers: {
          "Authorization": `Bearer ${parentApiKey}`,
          "Content-Type": "application/json"
        }
      }
    );

    if (!teachingsResponse.ok) {
      const errorText = await teachingsResponse.text();
      console.error("Failed to fetch teachings:", teachingsResponse.status, errorText);
      return Response.json({ 
        error: `Failed to fetch teachings: ${errorText}` 
      }, { status: teachingsResponse.status });
    }

    const teachings = await teachingsResponse.json();

    return Response.json({ 
      success: true,
      teachings: teachings
    });

  } catch (error) {
    console.error("Error in getTeachings:", error);
    return Response.json({ 
      error: error.message 
    }, { status: 500 });
  }
});