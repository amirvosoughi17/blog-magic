import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";

/**
 * @param {string} token 
 */
export const isAuthUser = async (token) => {
    const access_token = jwt.verify(token, process.env.JWT_SECRET);
    if (!access_token) {
        return NextResponse.json({ message: "You should login to access this resource" }, { status: 401 });
    }
    return access_token;
}