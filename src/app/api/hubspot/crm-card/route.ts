import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

/**
 * HubSpot CRM Card Endpoint
 *
 * This endpoint is called by HubSpot to render a custom CRM card
 * in the deal/contact sidebar with GTM prompt recommendations.
 *
 * HubSpot sends context about the current record (deal stage, contact info, etc.)
 * and we return relevant prompts based on that context.
 */

interface HubSpotCardRequest {
  userId: number;
  userEmail: string;
  associatedObjectId: number;
  associatedObjectType: string;
  portalId: number;
  // Deal-specific fields
  dealStage?: string;
  dealAmount?: number;
  dealName?: string;
  // Contact-specific fields
  contactEmail?: string;
  contactFirstName?: string;
  contactLastName?: string;
  contactCompany?: string;
  contactJobTitle?: string;
}

interface CRMCardSection {
  id: string;
  title: string;
  topLevelActions?: {
    type: string;
    text: string;
    uri?: string;
    onClick?: { type: string };
  }[];
  rows: {
    type: string;
    text?: string;
    value?: string;
    label?: string;
    linkUrl?: string;
  }[];
}

// Map HubSpot deal stages to our categories
function stageToCategory(stage: string | undefined): string {
  if (!stage) return 'discovery';

  const stageLower = stage.toLowerCase();

  // Common HubSpot deal stages
  if (stageLower.includes('appointment') || stageLower.includes('scheduled') || stageLower.includes('qualified')) {
    return 'discovery';
  }
  if (stageLower.includes('presentation') || stageLower.includes('demo') || stageLower.includes('decision')) {
    return 'ae';
  }
  if (stageLower.includes('proposal') || stageLower.includes('contract') || stageLower.includes('negotiation')) {
    return 'objections';
  }
  if (stageLower.includes('closed') || stageLower.includes('won')) {
    return 'saas'; // Upsell/expansion
  }

  return 'discovery';
}

// Get role-based prompts for outreach
function getContextualPrompts(
  objectType: string,
  dealStage?: string,
  jobTitle?: string
): { title: string; description: string; category: string }[] {
  const category = stageToCategory(dealStage);
  const isContact = objectType === 'CONTACT';

  // Role-based personalization
  const isExecutive = jobTitle?.toLowerCase().match(/ceo|cto|cfo|coo|vp|director|head|chief/);
  const isTechnical = jobTitle?.toLowerCase().match(/engineer|developer|architect|tech/);

  const prompts: { title: string; description: string; category: string }[] = [];

  if (isContact) {
    // Contact-specific prompts for outreach
    prompts.push({
      title: 'Personalized Cold Email',
      description: 'Generate a personalized outreach email based on their role and company',
      category: 'outreach',
    });

    if (isExecutive) {
      prompts.push({
        title: 'Executive Briefing',
        description: 'Create an executive-level value proposition',
        category: 'ae',
      });
    }

    if (isTechnical) {
      prompts.push({
        title: 'Technical Value Prop',
        description: 'Craft a technical deep-dive message',
        category: 'saas',
      });
    }

    prompts.push({
      title: 'LinkedIn Connection Request',
      description: 'Write a compelling LinkedIn message',
      category: 'sdr',
    });
  } else {
    // Deal-specific prompts based on stage
    switch (category) {
      case 'discovery':
        prompts.push(
          { title: 'Discovery Questions', description: 'SPIN-based discovery framework', category: 'discovery' },
          { title: 'Pain Point Deep Dive', description: 'Uncover core business challenges', category: 'discovery' },
          { title: 'Qualification Checklist', description: 'MEDDPICC qualification questions', category: 'discovery' }
        );
        break;
      case 'ae':
        prompts.push(
          { title: 'Demo Script', description: 'Tailored demo talking points', category: 'ae' },
          { title: 'ROI Calculator', description: 'Build a business case', category: 'ae' },
          { title: 'Stakeholder Map', description: 'Identify decision makers', category: 'ae' }
        );
        break;
      case 'objections':
        prompts.push(
          { title: 'Objection Handlers', description: 'Common objection responses', category: 'objections' },
          { title: 'Negotiation Prep', description: 'Prepare for pricing discussions', category: 'objections' },
          { title: 'Proposal Template', description: 'Structure your proposal', category: 'ae' }
        );
        break;
      default:
        prompts.push(
          { title: 'Follow-up Email', description: 'Re-engage the prospect', category: 'outreach' },
          { title: 'Case Study Pitch', description: 'Share relevant success story', category: 'ae' }
        );
    }
  }

  return prompts.slice(0, 4); // Max 4 prompts
}

export async function GET(request: NextRequest) {
  try {
    // Parse query parameters from HubSpot
    const searchParams = request.nextUrl.searchParams;

    const context: HubSpotCardRequest = {
      userId: parseInt(searchParams.get('userId') || '0'),
      userEmail: searchParams.get('userEmail') || '',
      associatedObjectId: parseInt(searchParams.get('associatedObjectId') || '0'),
      associatedObjectType: searchParams.get('associatedObjectType') || 'DEAL',
      portalId: parseInt(searchParams.get('portalId') || '0'),
      dealStage: searchParams.get('dealStage') || undefined,
      dealAmount: searchParams.get('dealAmount') ? parseFloat(searchParams.get('dealAmount')!) : undefined,
      dealName: searchParams.get('dealName') || undefined,
      contactEmail: searchParams.get('email') || undefined,
      contactFirstName: searchParams.get('firstname') || undefined,
      contactLastName: searchParams.get('lastname') || undefined,
      contactCompany: searchParams.get('company') || undefined,
      contactJobTitle: searchParams.get('jobtitle') || undefined,
    };

    // Get contextual prompts
    const prompts = getContextualPrompts(
      context.associatedObjectType,
      context.dealStage,
      context.contactJobTitle
    );

    // Build card rows
    const promptRows = prompts.map((prompt) => ({
      type: 'LINK' as const,
      text: prompt.title,
      linkUrl: `https://gtm-skills.com/prompts/saas/${prompt.category}?utm_source=hubspot&utm_medium=crm-card`,
    }));

    // Build the CRM card response
    const cardResponse = {
      results: [
        {
          objectId: context.associatedObjectId,
          title: 'GTM Skills',
          link: 'https://gtm-skills.com?utm_source=hubspot',
          sections: [
            {
              id: 'recommendations',
              title: context.associatedObjectType === 'CONTACT'
                ? 'Outreach Prompts'
                : `${stageToCategory(context.dealStage).toUpperCase()} Stage Prompts`,
              rows: promptRows,
            },
            {
              id: 'actions',
              title: 'Quick Actions',
              rows: [
                {
                  type: 'LINK',
                  text: 'Browse All Prompts',
                  linkUrl: 'https://gtm-skills.com/prompts?utm_source=hubspot',
                },
                {
                  type: 'LINK',
                  text: 'View Leaderboard',
                  linkUrl: 'https://gtm-skills.com/leaderboard?utm_source=hubspot',
                },
              ],
            },
          ] as CRMCardSection[],
        },
      ],
      primaryAction: {
        type: 'IFRAME',
        width: 890,
        height: 748,
        uri: `https://gtm-skills.com/embed/hubspot?objectType=${context.associatedObjectType}&objectId=${context.associatedObjectId}&stage=${context.dealStage || ''}&portalId=${context.portalId}`,
        label: 'Open GTM Skills',
      },
    };

    return NextResponse.json(cardResponse, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'max-age=60', // Cache for 1 minute
      },
    });
  } catch (error) {
    console.error('HubSpot CRM Card Error:', error);
    return NextResponse.json(
      { error: 'Failed to generate card' },
      { status: 500 }
    );
  }
}

// Handle preflight requests
export async function OPTIONS() {
  return new NextResponse(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
