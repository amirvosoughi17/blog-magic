import { connect } from "@/configs/database";
import User from "@/models/user.model";
import { get_user_from_token } from "@/utils/JWTToken";   
connect();

// recive user id from setted cookie and find with user id and show in (user profile) 
export async function GET(request) {
    try {
        const id = await get_user_from_token(request);
        const user = await User.findOne({ _id: id });
        return Response.json({ user }, { status: 200 });
    } catch (error) {
        return Response.json({ message: error.message }, { status: 500 })
    }
}
