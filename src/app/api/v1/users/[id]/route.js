import { connect } from "@/configs/database";
import User from "@/models/user.model";

//  CONNECT TO DATABASE 
connect();
export async function GET(request, { params }) {
    try {
        const { id } = params;
        const user = await User.findOne({ _id: id });
        return Response.json({ data: user }, { status: 200 });
    } catch (error) {
        return Response.json({ message: error.message }, { status: 500 })
    }
}
