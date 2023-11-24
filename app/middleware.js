import { NextRequest, NextResponse } from "next/server";
import { verifyAuth } from "./lib/auth";

/**
 * @param {NextRequest} req 
 */
export async function middleware(req) {
    const token = req.cookies.get("access_token")?.value;

    const verified_token =
        token &&
        (await verifyAuth(token).catch((err) => {
            console.log(err)
        }));

    if (req.nextUrl.pathname.startsWith('/login') && !verified_token) {
        return
    }
    if (req.url.includes('/login') && verified_token) {
        return NextResponse.redirect(new URL('/profile  ', req.url))
    }
    if (!verified_token) {
        return NextResponse.redirect(new URL('/login', req.url))
    }
}

export const config = {
    matcher: ['/profil', '/login'],
}