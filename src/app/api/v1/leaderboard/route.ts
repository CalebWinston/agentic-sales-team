import { NextRequest, NextResponse } from 'next/server';
import { getLeaderboardPrompts, getLeaderboardStats, type SortOption, type TimeFrame } from '@/lib/leaderboard';

export const runtime = 'edge';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export async function OPTIONS() {
  return new NextResponse(null, { headers: corsHeaders });
}

/**
 * GET /api/v1/leaderboard
 *
 * Get leaderboard prompts with filtering and sorting
 *
 * Query parameters:
 * - sort: hot, top, new, copies (default: hot)
 * - timeframe: all, year, month, week, day (default: all)
 * - category: filter by category
 * - limit: number of results (default 20, max 100)
 * - offset: pagination offset
 * - stats: include stats in response (true/false)
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    const sort = (searchParams.get('sort') || 'hot') as SortOption;
    const timeframe = (searchParams.get('timeframe') || 'all') as TimeFrame;
    const category = searchParams.get('category') || undefined;
    const limit = Math.min(parseInt(searchParams.get('limit') || '20', 10), 100);
    const offset = parseInt(searchParams.get('offset') || '0', 10);
    const includeStats = searchParams.get('stats') === 'true';

    const { prompts, total } = await getLeaderboardPrompts({
      sort,
      timeframe,
      category,
      limit,
      offset,
    });

    const response: Record<string, unknown> = {
      data: prompts.map((p, index) => ({
        rank: offset + index + 1,
        id: p.id,
        title: p.title,
        content: p.content,
        category: p.category,
        subcategory: p.subcategory,
        author_name: p.author_name,
        upvotes: p.upvotes,
        downvotes: p.downvotes,
        score: p.upvotes - p.downvotes,
        copy_count: p.copy_count,
        hot_score: p.hot_score,
        tags: p.tags,
        variables: p.variables,
        created_at: p.created_at,
      })),
      pagination: {
        total,
        limit,
        offset,
        hasMore: offset + prompts.length < total,
      },
      filters: {
        sort,
        timeframe,
        category,
      },
    };

    if (includeStats) {
      response.stats = await getLeaderboardStats();
    }

    return NextResponse.json(response, {
      headers: {
        ...corsHeaders,
        'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=120',
      },
    });
  } catch (error) {
    console.error('Leaderboard API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500, headers: corsHeaders }
    );
  }
}
