import { NextRequest, NextResponse } from 'next/server';
import { submitPrompt } from '@/lib/leaderboard';

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
 * POST /api/v1/prompts/submit
 *
 * Submit a new prompt to the leaderboard
 *
 * Body:
 * - title: string (required)
 * - content: string (required)
 * - category: string (required)
 * - subcategory: string (optional)
 * - author_name: string (optional)
 * - author_email: string (optional)
 * - tags: string[] (optional)
 * - use_cases: string[] (optional)
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    if (!body.title || !body.content || !body.category) {
      return NextResponse.json(
        {
          error: 'Missing required fields',
          required: ['title', 'content', 'category'],
        },
        { status: 400, headers: corsHeaders }
      );
    }

    // Validate title length
    if (body.title.length < 5 || body.title.length > 255) {
      return NextResponse.json(
        { error: 'Title must be between 5 and 255 characters' },
        { status: 400, headers: corsHeaders }
      );
    }

    // Validate content length
    if (body.content.length < 20 || body.content.length > 10000) {
      return NextResponse.json(
        { error: 'Content must be between 20 and 10,000 characters' },
        { status: 400, headers: corsHeaders }
      );
    }

    // Submit the prompt
    const result = await submitPrompt({
      title: body.title,
      content: body.content,
      category: body.category,
      subcategory: body.subcategory,
      author_name: body.author_name,
      author_email: body.author_email,
      tags: body.tags,
      use_cases: body.use_cases,
    });

    if (!result.success) {
      return NextResponse.json(
        { error: result.error || 'Failed to submit prompt' },
        { status: 500, headers: corsHeaders }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Prompt submitted successfully. It will appear on the leaderboard after moderation.',
        id: result.id,
      },
      { status: 201, headers: corsHeaders }
    );
  } catch (error) {
    console.error('Submit API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500, headers: corsHeaders }
    );
  }
}
