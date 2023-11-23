import { NextResponse } from 'next/server'
import { connectToDB } from '../../../../configs/database.js';
import User from '../../../../(models)/user.model.js';
import { generateToken } from '../../../../utils/JWTToken.js';
import bcrypt from 'bcryptjs'
import { cookies } from 'next/headers'
connectToDB();

export async function POST(request) {
    //  Recive value from inputs
    const body = await request.json();
    const { email, password } = body;

    // ****SIGNIN VALIDATIONS****

    //  Check if requested data is not empty
    if (!email || !password) {
        return NextResponse.json({ message: "Please fill in all inputs" }, { status: 400 });
    }

    //  Check if user exists in website (user logged in)
    const user = await User.findOne({ email });
    if (!user) {
        return NextResponse.json({ message: "Email is not exists in website, Please first signup" }, { status: 400 });
    }
    //  Check password is match
    const valid_password = bcrypt.compareSync(password, user.password);
    if (!valid_password) {
        return NextResponse.json({ message: "Password does not match" }, { status: 400 });
    }
    return generateToken("User Logged in  successfully", 200, user);
}