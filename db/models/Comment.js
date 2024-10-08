import mongoose from "mongoose";
const { Schema } = mongoose;
const commentSchema = new Schema(
  {
    name: { type: String, required: true },
    comment: { type: String, required: true },
  },
  { collection: "comments" }
);

const Comment =
  mongoose.models.Comment || mongoose.model("Comment", commentSchema);
export default Comment;
