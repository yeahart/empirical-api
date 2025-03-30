import { NextRequest, NextResponse } from "next/server";
import { dummy as dummyPosts } from "../data";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const reqId = +id;
    if (!Number.isFinite(reqId)) {
      return NextResponse.json(
        {
          message: "enter a valid post id",
        },
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const post = dummyPosts.find((post) => post.id === reqId);
    if (!post) {
      return NextResponse.json(
        {
          message: `no post found with id: ${reqId}`,
        },
        {
          status: 404,
          headers: { "Content-Type": "application/json" },
        }
      );
    }
    return NextResponse.json(post, {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (_) {
    return NextResponse.json(
      {
        message: "Internal server error",
      },
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
