import mongoose, { Schema } from "mongoose";

const taskSchema = new Schema(
  {
    title: String,
    description: String,
    email: String,
  },
  {
    timestamps: true,
  }
);

export const Task = mongoose.models.Task || mongoose.model("Task", taskSchema);
