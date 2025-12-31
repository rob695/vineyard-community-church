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

    // Fetch teachings from parent project
    const teachingsResponse = await fetch(
      "https://api.base44.com/api/entity/Teaching?sort=-date",
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
      return Response.json({ 
        error: `Failed to fetch teachings: ${errorText}` 
      }, { status: teachingsResponse.status });
    }

    const teachings = await teachingsResponse.json();

    console.log("Teachings response:", JSON.stringify(teachings, null, 2));

    // The Base44 API returns data in a 'data' property
    const teachingsList = Array.isArray(teachings) ? teachings : (teachings.data || []);

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