import { NextRequest, NextResponse } from 'next/server';
import { submitOutcome } from '@/lib/leaderboard';

export const runtime = 'edge';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export async function OPTIONS() {
  return new NextResponse(null, { headers: corsHeaders });
}

/**
 * POST /api/v1/prompts/:id/outcome
 *
 * Submit an outcome for a prompt (meeting booked, deal won, etc.)
 *
 * Body:
 * - outcome_type: string (required) - meeting_booked, reply_received, demo_completed, proposal_sent, deal_won
 * - outcome_value: number (optional) - dollar value if applicable
 * - testimonial: string (optional) - short testimonial
 * - user_email: string (optional) - for verification
 * - is_public: boolean (optional) - whether to show publicly
 */
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();

    // Validate outcome type
    const validOutcomes = ['meeting_booked', 'reply_received', 'demo_completed', 'proposal_sent', 'deal_won'];
    if (!body.outcome_type || !validOutcomes.includes(body.outcome_type)) {
      return NextResponse.json(
        {
          error: 'Invalid outcome_type',
          valid_types: validOutcomes,
        },
        { status: 400, headers: corsHeaders }
      );
    }

    const result = await submitOutcome({
      prompt_id: id,
      outcome_type: body.outcome_type,
      outcome_value: body.outcome_value,
      testimonial: body.testimonial,
      user_email: body.user_email,
      is_public: body.is_public,
    });

    if (!result.success) {
      return NextResponse.json(
        { error: result.error || 'Failed to submit outcome' },
        { status: 500, headers: corsHeaders }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Outcome recorded successfully. Thank you for sharing!',
      },
      { status: 201, headers: corsHeaders }
    );
  } catch (error) {
    console.error('Outcome API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500, headers: corsHeaders }
    );
  }
}
