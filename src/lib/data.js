import { Task } from "./models";
import { connectToDb } from "./utils";

export const getTask = async ({ email }) => {
  try {
    connectToDb();
    const tasks = await Task.find({ email });
    return tasks;
  } catch (error) {
    console.log("error getting task :", error);
  }
};
