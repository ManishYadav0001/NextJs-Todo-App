import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(request) {
    const token = request.cookies.get("authToken")?.value;

    if (!token) {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    try {
        await jwtVerify(token, new TextEncoder().encode("dsaghqogwnhp2420822ignsv"));
        return NextResponse.next();
    } catch (err) {
        console.log("Invalid or expired token:", err?.message || err);
        return NextResponse.redirect(new URL("/login", request.url));
    }
}


export const config = {
    matcher: ["/todos/:path*"],
};