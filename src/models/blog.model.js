import mongoose, { Schema } from 'mongoose';

mongoose.Promise = global.Promise;

const BlogSchema = new Schema({
         title : {
            type : String ,
            required  : true
         },
         description : {
            type : String ,
            required  : true
         },
         category : {
            type : String ,
            required  : true
         },
         
},{
    timestamps : true
})


const Blog  = mongoose.models.Blog || mongoose.model("Blog" , BlogSchema);
export default Blog;