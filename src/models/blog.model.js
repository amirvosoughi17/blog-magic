import mongoose, { Schema } from 'mongoose';
import GithubSlugger from 'github-slugger'
const slugger = new GithubSlugger()

const BlogSchema = new Schema({
   title: {
      type: String,
      required: true
   },
   slug: {
      type: String,
      unique: true
   },
   description: {
      type: String,
      required: true
   },
   category: {
      type: String,
      required: true,
      enum: [
         "software",
         "hardware",
         "AI"
      ],
      default: "software"
   },
   author: {
      required: true,
      type: mongoose.Schema.Types.String,
      ref: "User"
   }
}, {
   timestamps: true
});
// generate slug for blog
BlogSchema.pre("save", async function () {
   this.slug = slugger.slug(this.title);
})


const Blog = mongoose.models.Blog || mongoose.model("Blog", BlogSchema);
export default Blog;