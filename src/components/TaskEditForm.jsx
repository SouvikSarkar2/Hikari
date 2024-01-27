"use client";
import toast from "react-hot-toast";
import { useFormState } from "react-dom";
import { editTask } from "@/lib/actions";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { DrawerClose } from "./ui/drawer";

const notify = () =>
  toast.success("Task Edited Succesfully", {
    style: {
      border: "1px solid black",
      padding: "16px",
      color: "black",
    },
    iconTheme: {
      primary: "white",
      secondary: "black",
    },
  });

const TaskEditForm = ({ task }) => {
  const [state, formAction] = useFormState(editTask, undefined);
  return (
    <div>
      <form
        className="flex flex-col gap-3 md:w-[500px] md:mt-[10px]"
        action={formAction}
      >
        <Input type="hidden" name="id" value={task._id}></Input>
        <Input
          type="text"
          name="title"
          placeholder="title"
          className=" bg-white dark:bg-[#f0c3a8] dark:text-black"
          defaultValue={task.title}
        />
        <Textarea
          type="text"
          name="description"
          placeholder="description"
          className=" h-[150px] bg-white dark:bg-[#f0c3a8] dark:text-black"
          defaultValue={task.description}
        />
        <DrawerClose>
          <Button
            className="w-full bg-black text-white dark:bg-[#da9c78] dark:text-black"
            onClick={() => {
              notify();
            }}
          >
            Submit
          </Button>
        </DrawerClose>
        {state && state.error}
      </form>
    </div>
  );
};

export default TaskEditForm;
