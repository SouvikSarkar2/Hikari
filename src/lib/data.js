import { Task, User } from "./models";
import { connectToDb } from "./util";

export const getTask = async ({ email }) => {
  try {
    connectToDb();
    const tasks = await Task.find({ email });
    return tasks;
  } catch (error) {
    console.log("error getting task :", error);
  }
};

export const getUser = async ({ username, password }) => {
  try {
    connectToDb();
    const user = await User.find({ username, password });

    return user;
  } catch (err) {
    console.log("error getting user :", err);
  }
};
