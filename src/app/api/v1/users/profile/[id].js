import { NextRequest, NextResponse } from "next/server";

/**
 * 
 * @param {NextRequest} request 
 * @param {NextResponse} response 
 */
export default async function handler(request, response) {
    const { id } = request.query;
    return response.json({ id: id })
}
    
