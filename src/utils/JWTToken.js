import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
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
