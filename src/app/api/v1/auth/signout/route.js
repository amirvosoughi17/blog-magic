import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const response = NextResponse.json({ message: "You logged out" }, { status: 200 });
        response.cookies.set({
            name: "access_token",
            value: '',
            httpOnly: true,
            expires: new Date(Date.now()),
        });
        return response;
    } catch (error) {
        return NextResponse.json({ message: error.message, status: 500 });
    }
}