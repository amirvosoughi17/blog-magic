import { NextResponse } from 'next/server'
import { connect } from '@/configs/database.js';
import User from '@/(models)/user.model.js';
import { generateToken } from '@/utils/JWTToken.js';
import bcrypt from 'bcryptjs'
import { cookies } from 'next/headers'
connect();

export async function POST(request) {
    const body = await request.json();
    //  Recive values from inputs
    const { name, email, password } = body;

    //  ****SIGNUP VALIDATIONS****

    // Check if sended request in not empty
    if (!name || !email || !password) {
        return NextResponse.json({ message: "Please fill in all fields" }, { status: 400 });
    }
    // Check if user is not register in website (user does not exits)
    const user = await User.findOne({ email });
    if (user) {
        return NextResponse.json({ message: "Email already registered in website" }, { status: 400 });
    }

    //  Check for password length
    if (password.length < 4) {
        return NextResponse.json({ message: "Password must be more than 4 characters" })
    }

    // Encrypt the password
    const hashed_password = bcrypt.hashSync(password, 10);
    try {
        const new_user = await User.create({
            name,
            email,
            password: hashed_password
        });
        return generateToken("User created Successfully", 201, new_user);
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}