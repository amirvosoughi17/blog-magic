import { NextRequest, NextResponse } from "next/server";

/**
 * @param {Request} request 
 */
export async function middleware(request) {
    const token = request.cookies.get("access_token");
    const base_path = request.nextUrl.pathname;
    const public_page = base_path === "/login" || base_path === "/signup"
    if (token && public_page) {
        return NextResponse.redirect(new URL('/profile', request.nextUrl))
    }
    if (!token && !public_page) {
        return NextResponse.redirect(new URL('/login', request.nextUrl))
    }
}

export const config = {
    matcher: [
        '/',
        '/profile', 
        '/login',
    ],
}