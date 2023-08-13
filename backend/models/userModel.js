import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  fullName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  education: {
    type: String,
    required: false
  },
  interests: {
    type: [String], 
    required: false
  },
  password: {
    type: String,
    required: true
  },
  likedBlogs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Blog',
      required: false
    }
    ],
},
{
    timestamps:true
  });
  
export default mongoose.model("User", userSchema)
