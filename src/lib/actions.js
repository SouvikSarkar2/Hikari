"use server";

import { getServerSession } from "next-auth";
import { Task } from "./models";
import { connectToDb } from "./utils";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export const addTask = async (previousstate, formData) => {
  const session = await getServerSession();
  const email = session.user.email;

  const { title, description } = Object.fromEntries(formData);

  try {
    connectToDb();
    const newTask = new Task({
      title,
      description,
      email,
    });
    newTask.email = email;

    await newTask.save();
    revalidatePath("/tasks");
  } catch (error) {
    console.log("error adding task :", error);
  }
};

export const deleteTask = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();
    await Task.findByIdAndDelete(id);
    revalidatePath("/tasks");
  } catch (error) {
    console.log("error deleting task :", error);
  }
};
