"use client";
import { useOptimistic, useState, useRef } from "react";

import IndTask from "@/components/Task";

const Task = ({ tasks }) => {
  return (
    <div className="flex justify-center items-center gap-10 flex-wrap">
      {tasks.length === 0 && (
        <p className="font-[Oswald] text-2xl">Start by adding some Tasks</p>
      )}
      {tasks?.map((task) => {
        const plainObject = JSON.parse(JSON.stringify(task));
        return <IndTask task={plainObject} key={task._id} />;
      })}
    </div>
  );
};

export default Task;
