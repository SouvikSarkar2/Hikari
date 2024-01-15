import IndTask from "@/components/Task";
import { getTask } from "@/lib/data";
import { Task } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { getServerSession } from "next-auth";
import Link from "next/link";

import React from "react";

const Tasks = async () => {
  const session = await getServerSession();
  //console.log(session.user.email);
  const tasks = await getTask({ email: session.user.email });
  console.log(tasks);

  return (
    <>
      <div className="bg-sky-400 h-screen ">
        <div className="flex justify-center text-3xl p-5">TASKS</div>
        <div className="flex justify-center items-center gap-10 flex-wrap">
          {tasks.map((task) => (
            <IndTask task={task} key={task._id} />
          ))}
          <Link
            className="h-[200px] w-[200px] bg-sky-800 flex justify-center items-center text-3xl text-white"
            href="/new"
          >
            Add Task
          </Link>
        </div>
      </div>
    </>
  );
};

export default Tasks;
