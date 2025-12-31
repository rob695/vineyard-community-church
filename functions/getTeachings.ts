import { createClientFromRequest } from 'npm:@base44/sdk@0.8.6';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);

    // Optionally authenticate the user
    const isAuthenticated = await base44.auth.isAuthenticated();
    if (!isAuthenticated) {
      // Allow public access - no authentication required
    }

    const PARENT_PROJECT_API_KEY = Deno.env.get("PARENT_PROJECT_API_KEY");
    if (!PARENT_PROJECT_API_KEY) {
      return Response.json({ 
        error: "Parent project API key not configured" 
      }, { status: 500 });
    }

    // Fetch teachings from parent project using the SDK
    const parentProjectId = PARENT_PROJECT_API_KEY.split('_')[0]; // Extract project ID from API key
    
    const teachingsResponse = await fetch(
      `https://api.base44.com/api/apps/${parentProjectId}/entities/Teaching/records?sort=-date`,
      {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${PARENT_PROJECT_API_KEY}`,
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

    const responseData = await teachingsResponse.json();
    console.log("Full response:", JSON.stringify(responseData, null, 2));

    // Extract the teachings array from the response
    const teachingsList = responseData.data || responseData || [];

    return Response.json({ 
      success: true,
      teachings: teachingsList
    });

  } catch (error) {
    console.error("Error in getTeachings:", error);
    return Response.json({ 
      error: error.message 
    }, { status: 500 });
  }
});