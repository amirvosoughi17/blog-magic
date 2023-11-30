import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

/**
 * @param {String} message 
 * @param {Number} statusCode 
 * @param {Object} user 
 * @returns 
 */
export function generateToken(message, statusCode, user) {
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE
    });
    const cookie_options = {
        name: "access_token",
        value: token,
        maxAge: 604800,
        httpOnly: true
    }
    return NextResponse.json({ message: message }, { status: statusCode }, cookies().set(cookie_options));
}

// Get user info from cookie and jwt token
export async function get_user_from_token(request) {
    try {
        const token = request.cookies.get("access_token");
        const decode_value = jwt.verify(token.value, process.env.JWT_SECRET)
        return decode_value.id
    } catch (error) {
        return Response.json({ message: error.message }, { status: 500 })
    }
}