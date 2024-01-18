"use server";

import { getServerSession } from "next-auth";
import { Task, User } from "./models";
import { connectToDb } from "./util";
import bcrypt from "bcrypt";
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

export const addUser = async ({ username, password }) => {
  try {
    connectToDb();
    const user = await User.find({ username });
    console.log(user);
    if (user.length === 1) {
      return { error: "Username Already exists" };
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      username,
      password: hashedPassword,
    });
    await newUser.save();
  } catch (error) {
    console.log("error creating User :", error);
  }
};
