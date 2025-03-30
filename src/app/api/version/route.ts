import { NextResponse } from "next/server";
import pkg from "../../../../package.json";

export async function GET() {
  try {
    return NextResponse.json(
      { version: pkg.version },
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    return NextResponse.json(
      { version: "_._._", message: "Internal Server Error" },
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
