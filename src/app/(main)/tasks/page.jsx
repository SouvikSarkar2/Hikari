import IndTask from "@/components/Task";
import { getTask } from "@/lib/data";

import { getServerSession } from "next-auth";
import Link from "next/link";

import React from "react";

const Tasks = async () => {
  const session = await getServerSession();
  //console.log(session.user.email);
  const tasks = await getTask({ email: session.user.email });
  //console.log(tasks);

  return (
    <>
      <div className="bg-[#FEDBC5] h-dvh overflow-x-scroll">
        <div
          className="flex justify-center text-4xl md:text-6xl p-5 md:pb-10"
          style={{ fontFamily: "Oswald", fontWeight: 700 }}
        >
          TASKS
        </div>
        <div className="flex justify-center items-center gap-10 flex-wrap">
          {tasks?.map((task) => (
            <IndTask task={task} key={task._id} />
          ))}
          <Link
            className="h-[60px] w-[60px] flex justify-center items-center text-5xl text-white absolute bottom-5 right-7 rounded-full pb-3 bg-[#540132]"
            href="/new"
          >
            +
          </Link>
        </div>
        <div className="h-[100px]"></div>
      </div>
    </>
  );
};

export default Tasks;
