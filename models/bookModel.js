import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    year: {
      type: Number,
      required: true,
      min: 0,
    },
    author: {
      type: String,
      required: true,
      default: "Other",
    },
  },
  {
    versionKey: false,
  }
);


const Book = mongoose.model("Book", bookSchema);

export { Book };