import { NextRequest, NextResponse } from 'next/server';
import { voteOnPrompt, generateFingerprint } from '@/lib/leaderboard';

export const runtime = 'edge';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, X-Fingerprint',
};

export async function OPTIONS() {
  return new NextResponse(null, { headers: corsHeaders });
}

/**
 * POST /api/v1/prompts/:id/vote
 *
 * Vote on a prompt
 *
 * Body:
 * - vote_type: 'up' | 'down' (required)
 *
 * Headers:
 * - X-Fingerprint: browser fingerprint for anonymous voting
 */
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();

    // Validate vote type
    if (!body.vote_type || !['up', 'down'].includes(body.vote_type)) {
      return NextResponse.json(
        { error: 'Invalid vote_type. Must be "up" or "down"' },
        { status: 400, headers: corsHeaders }
      );
    }

    // Get fingerprint from header or generate one
    const fingerprint = request.headers.get('X-Fingerprint') || generateFingerprint();

    const result = await voteOnPrompt(id, body.vote_type, fingerprint);

    if (!result.success) {
      return NextResponse.json(
        { error: result.error || 'Failed to vote' },
        { status: 500, headers: corsHeaders }
      );
    }

    return NextResponse.json(
      {
        success: true,
        upvotes: result.newUpvotes,
        downvotes: result.newDownvotes,
        score: (result.newUpvotes || 0) - (result.newDownvotes || 0),
        user_vote: result.userVote,
      },
      { headers: corsHeaders }
    );
  } catch (error) {
    console.error('Vote API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500, headers: corsHeaders }
    );
  }
}
