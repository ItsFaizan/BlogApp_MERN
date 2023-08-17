import mongoose from "mongoose";
const { Schema } = mongoose;

const blogSchema = new Schema({
  title: {
    type: String,
    required: false
  },
  content: {
    type: [Object],
    required: true
  },
  images: {
    type: [String],
    required: false
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: false
  },
  claps: {
    type: Number,
    required: false,
    default: 0
  },
  comments: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: false
      },
      text: {
        type: String,
        required: false
      },
      createdAt: {
        type: Date,
        default: Date.now
      }
    }
  ]
});

export default mongoose.model("Blog", blogSchema)