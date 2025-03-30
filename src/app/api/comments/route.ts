import { NextRequest, NextResponse } from "next/server";
import { dummy as dummyComments } from "./data";

export async function GET(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const postId = searchParams.get("postId");
    const rpostId = postId && +postId;
    const userId = searchParams.get("userId");
    const ruserId = userId && +userId;

    if (postId && !userId) {
      // only postId
      if (postId && !Number.isFinite(rpostId)) {
        return NextResponse.json(
          {
            message: "enter valid id of a post",
          },
          {
            status: 400,
            headers: { "Content-Type": "application/json" },
          }
        );
      }

      const postComments = dummyComments.filter(
        (commnet) => commnet.postId === rpostId
      );
      if (postComments.length === 0) {
        return NextResponse.json(
          {
            message: `post with id: ${rpostId} has no comments`,
          },
          {
            status: 404,
            headers: { "Content-Type": "application/json" },
          }
        );
      }
      return NextResponse.json(postComments, {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } else if (userId && !postId) {
      // only userId
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

      const userComments = dummyComments.filter(
        (commnet) => commnet.userId === ruserId
      );
      if (userComments.length === 0) {
        return NextResponse.json(
          {
            message: `user with id: ${ruserId} has no comments`,
          },
          {
            status: 404,
            headers: { "Content-Type": "application/json" },
          }
        );
      }
      return NextResponse.json(userComments, {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } else if (postId && userId) {
      // both
      if (!Number.isFinite(rpostId) || !Number.isFinite(ruserId)) {
        return NextResponse.json(
          {
            message: "enter valid id of a post and a user",
          },
          {
            status: 400,
            headers: { "Content-Type": "application/json" },
          }
        );
      }
      const postUserComments = dummyComments.filter(
        (commnet) => commnet.postId === rpostId && commnet.userId === ruserId
      );
      if (postUserComments.length === 0) {
        return NextResponse.json(
          {
            message: `user with id: ${ruserId} has no comments in post with id: ${rpostId}`,
          },
          {
            status: 404,
            headers: { "Content-Type": "application/json" },
          }
        );
      }
      return NextResponse.json(postUserComments, {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } else {
      // nothing
      return NextResponse.json(dummyComments, {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }
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
