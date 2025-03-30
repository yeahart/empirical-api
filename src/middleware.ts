import { NextResponse, NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();

  res.headers.set("Access-Control-Allow-Origin", "*");
  res.headers.set(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  res.headers.set(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization"
  );

  // Handle preflight requests (CORS for POST, PUT, DELETE)
  if (req.method === "OPTIONS") {
    return new NextResponse(null, { status: 204 });
  }

  return res;
}

export const config = {
  matcher: "/api/:path*",
};
