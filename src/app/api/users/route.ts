import { NextRequest, NextResponse } from "next/server";
import { dummy as dummyUsers } from "./data";

interface postRequestBody {
  name: string;
  username: string;
  email: string;
}

export async function GET() {
  try {
    return NextResponse.json(dummyUsers, {
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

export async function POST(req: NextRequest) {
  try {
    const body: postRequestBody = await req.json();
    const { name, username, email } = body;
    const id = dummyUsers.length + 1;
    if (!name || !username || !email) {
      return NextResponse.json(
        { message: "please fill 'name', 'username' and 'email' fields" },
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    if (
      typeof name != "string" ||
      typeof username != "string" ||
      typeof email != "string"
    ) {
      return NextResponse.json(
        {
          message:
            "'name', 'username' and 'email' fields only accept string data",
        },
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    const currentTimestamp = new Date().toISOString();
    return NextResponse.json(
      {
        message: "user added n.b. it's temporary",
        user: {
          id,
          name,
          username,
          email,
          createdAt: currentTimestamp,
          updatedAt: currentTimestamp,
        },
      },
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (_) {
    return NextResponse.json(
      {
        message:
          "Server error. make sure you fill 'name', 'username' and 'email' in JSON format",
      },
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

export async function PUT(req: NextRequest) {
  try {
    const body: postRequestBody & { id: number } = await req.json();
    const { id, name, username, email } = body;
    if (!id || !name || !username || !email) {
      return NextResponse.json(
        { message: "please fill 'id', 'name', 'username' and 'email' fields" },
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    if (
      typeof name != "string" ||
      typeof username != "string" ||
      typeof email != "string"
    ) {
      return NextResponse.json(
        {
          message:
            "'name', 'username' and 'email' fields only accept string data",
        },
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

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

    const prevUser = dummyUsers.find((user) => user.id === reqId);
    if (!prevUser) {
      return NextResponse.json(
        {
          message: `there is no user with id: ${reqId}`,
        },
        {
          status: 404,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const currentTimestamp = new Date().toISOString();
    return NextResponse.json(
      {
        message: "user updated n.b. it's temporary",
        user: {
          id: reqId,
          name,
          username,
          email,
          createdAt: prevUser.createdAt,
          updatedAt: currentTimestamp,
        },
      },
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (_) {
    return NextResponse.json(
      {
        message:
          "Server error. make sure you fill 'id', 'name', 'username' and 'email' in JSON format",
      },
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const body: { id: number } = await req.json();
    const { id } = body;
    const reqId = +id;
    if (!Number.isFinite(reqId)) {
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

    const isExist = dummyUsers.some((user) => user.id === reqId);
    if (!isExist) {
      return NextResponse.json(
        {
          message: `there is no user with id: ${reqId}`,
        },
        {
          status: 404,
          headers: { "Content-Type": "application/json" },
        }
      );
    }
    return NextResponse.json(
      {
        message: "user deleted successfully n.b. it's temporary",
      },
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (_) {
    return NextResponse.json(
      {
        message: "Server error. make sure you fill 'id' in JSON format",
      },
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
