import { NextRequest, NextResponse } from "next/server";
import * as jwt from "jsonwebtoken";
const tokenSecret = "password";

export async function middleware(req: NextRequest) {
  const token = req.headers.get("jwt");
  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
  jwt.verify(token, tokenSecret, (err, decoded) => {
    if (err) {
      return new NextResponse(JSON.stringify({ message: "invalid JWT" }));
    } else {
      console.log("Decoded payload:", decoded);
    }
  });
  return NextResponse.redirect(new URL("/login", req.url));
}

export const config = {
  matcher: ["/"],
};
