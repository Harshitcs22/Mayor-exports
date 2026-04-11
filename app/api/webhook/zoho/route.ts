import { NextResponse } from 'next/server';

// ----------------------------------------------------------------------
// CONFIGURATION
// ----------------------------------------------------------------------
const CLIENT_ID = process.env.ZOHO_CLIENT_ID || "";
const CLIENT_SECRET = process.env.ZOHO_CLIENT_SECRET || "";
const GROQ_API_KEY = process.env.GROQ_API_KEY || "";

// ⚠️ IMPORTANT: These should be configured in Vercel Environment Variables
const REFRESH_TOKEN = process.env.ZOHO_REFRESH_TOKEN || "";

// URLs based on your Data Center (.in)
const REFRESH_URL = "https://accounts.zoho.in/oauth/v2/token";
const ZOHO_CRM_API_URL = "https://www.zohoapis.in/crm/v3/Leads";

/**
 * Gets a fresh Access Token using the permanent Refresh Token
 */
async function getAccessToken() {
  const params = new URLSearchParams();
  params.append('grant_type', 'refresh_token');
  params.append('client_id', CLIENT_ID);
  params.append('client_secret', CLIENT_SECRET);
  params.append('refresh_token', REFRESH_TOKEN);

  const response = await fetch(REFRESH_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: params.toString(),
  });

  const data = await response.json();
  if (!response.ok || data.error) {
    throw new Error(`Failed to get access token: ${data.error_description || data.error || 'Unknown error'}`);
  }
  return data.access_token;
}

/**
 * Background AI Trade Intelligence Processor
 * Separated to ensure the main UI response stays snappy.
 */
async function processAIEnrichment(leadId: string, message: string, accessToken: string) {
  if (!GROQ_API_KEY) return;

  try {
    console.log("Background: Initiating HindTrade AI Compliance Brief...");
    
    const llmResponse = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${GROQ_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: [
          {
            role: "system",
            content: "You are a Senior Trade Compliance Officer at Mayor Group. Based on the inquiry, provide: 1. Predicted HSN Code. 2. Necessary Global Certifications (ISO, REACH, etc.). 3. Shipping Risks/Suggestions. Keep your response highly professional, structured, and strictly use bullet points."
          },
          {
            role: "user",
            content: `Inquiry: ${message}`
          }
        ]
      })
    });

    if (!llmResponse.ok) throw new Error("Groq API failed");

    const llmData = await llmResponse.json();
    const intelligenceText = llmData.choices?.[0]?.message?.content;

    if (intelligenceText) {
      const formattedHTMLNote = intelligenceText.replace(/\n/g, '<br>');
      const notePayload = {
        data: [{
          Note_Title: "HindTrade AI: Compliance & Trade Analysis",
          Note_Content: formattedHTMLNote
        }]
      };

      await fetch(`https://www.zohoapis.in/crm/v3/Leads/${leadId}/Notes`, {
        method: 'POST',
        headers: {
          'Authorization': `Zoho-oauthtoken ${accessToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(notePayload)
      });
      console.log("✅ Background: AI Compliance Brief attached to Lead:", leadId);
    }
  } catch (error) {
    console.error("❌ Background enrichment failed:", error);
  }
}

/**
 * POST handler for incoming lead webhooks
 */
export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    const leadName = body.name || 'Website Lead';
    const leadEmail = body.email || '';
    const leadPhone = body.phone || '';
    const leadCompany = body.company || '';
    const descriptionContext = body.message 
      ? `Message: ${body.message}` 
      : 'Auto-generated lead via website quote form.';

    // 1. Get Zoho Access Token
    const accessToken = await getAccessToken();

    // 2. Create the Lead in Zoho CRM
    const zohoPayload = {
      data: [{
        Last_Name: leadName,
        Email: leadEmail,
        Phone: leadPhone,
        Company: leadCompany || "Not Specified",
        Description: descriptionContext,
        Lead_Source: "HindTrade AI Portal" // Tracking label for production
      }]
    };

    const crmResponse = await fetch(ZOHO_CRM_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Zoho-oauthtoken ${accessToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(zohoPayload)
    });

    const crmData = await crmResponse.json();

    if (!crmResponse.ok || (crmData.data && crmData.data[0].status === "error")) {
      return NextResponse.json({ error: 'Failed to create lead', details: crmData }, { status: 400 });
    }

    const leadId = crmData.data?.[0]?.details?.id;

    // 3. SECURE MIC-DROP: Fire and forget AI enrichment in the background
    // We do NOT await this, allowing the function to return success to the UI immediately.
    if (leadId && body.message) {
      processAIEnrichment(leadId, body.message, accessToken).catch(e => console.error("Async AI Error", e));
    }

    // 4. Return instant success
    return NextResponse.json({ 
      success: true, 
      message: 'Inquiry routed to global desk.',
      tracking_id: leadId 
    }, { status: 200 });

  } catch (error: any) {
    console.error("Critical Webhook Error:", error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
