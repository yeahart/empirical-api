import { NextRequest, NextResponse } from "next/server";
import { dummy as dummyUsers } from "../data";

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
          message: "enter valid 'id' of a user",
        },
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const user = dummyUsers.find((u) => u.id === reqId);
    if (!user) {
      return NextResponse.json(
        {
          message: `no user found with id: ${reqId}`,
        },
        {
          status: 404,
          headers: { "Content-Type": "application/json" },
        }
      );
    }
    return NextResponse.json(user, {
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
