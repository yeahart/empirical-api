import { NextRequest, NextResponse } from "next/server";
import { dummy as dummyComments } from "../../../comments/data";

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
          message: `enter valid post id`,
        },
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }
    const comments = dummyComments.filter(
      (commnet) => commnet.postId === reqId
    );
    if (comments.length === 0) {
      return NextResponse.json(
        {
          message: `no comments for post with id: ${reqId}`,
        },
        {
          status: 404,
          headers: { "Content-Type": "application/json" },
        }
      );
    }
    return NextResponse.json(comments, {
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
