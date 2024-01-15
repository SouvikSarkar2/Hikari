import { Task } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    connectToDb();
    const tasks = await Task.find();
    return NextResponse.json(tasks);
  } catch (error) {
    console.log("Task get error:", error);
  }
};

export const DELETE = async (req, { tasks }) => {
  const { _id } = tasks;
  try {
    connectToDb();
    await Task.deleteOne({ _id });
    return NextResponse.json("Task deleted");
  } catch (error) {
    console.log("task delete error :", error);
  }
};
