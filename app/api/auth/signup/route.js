import { NextResponse } from 'next/server'
import { connectToDB } from '../../../configs/database.js';
import User from '../../../models/user.model.js';
import bcrypt from 'bcryptjs'
connectToDB();

export async function POST(request) {
    const body = await request.json();
    //  Recive values from inputs
    const { name, email, password } = body;
    // Check if sended request in not empty
    if (!name || !email || !password) {
        return NextResponse.json({ message: "Please fill in all fields" }, { status: 400 });
    }
    // Check if user is not register in website (user does not exits)
    const user = await User.findOne({ email });
    if (user) {
        return NextResponse.json({ message: "Email already registered in website" }, { status: 400 });
    }
    // Encrypt the password
    const hashed_password = bcrypt.hashSync(password, 10);
    try {
        const new_user = await User.create({
            name,
            email,
            password: hashed_password
        });

        return NextResponse.json({ message: "User created Successfully" }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}
