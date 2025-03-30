import { NextRequest, NextResponse } from "next/server";
import { dummy as dummyPosts } from "./data";

export async function GET(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const userId = searchParams.get("userId");
    const ruserId = userId && +userId;
    if (userId && !Number.isFinite(ruserId)) {
      return NextResponse.json(
        {
          message: "enter valid id of a user",
        },
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    if (!ruserId) {
      return NextResponse.json(dummyPosts, {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }
    const userPosts = dummyPosts.filter((post) => post.userId === ruserId);
    if (userPosts.length == 0) {
      return NextResponse.json(
        {
          message: `user with id: ${ruserId} has no post`,
        },
        {
          status: 404,
          headers: { "Content-Type": "application/json" },
        }
      );
    }
    return NextResponse.json(userPosts, {
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
