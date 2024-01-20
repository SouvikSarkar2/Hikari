"use client";
import toast from "react-hot-toast";
import { useFormState } from "react-dom";
import { addTask } from "@/lib/actions";
import { useRouter } from "next/navigation";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";

const notify = () =>
  toast.success("Task Added Succesfully", {
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

const TaskAddForm = () => {
  const router = useRouter();
  const [state, formAction] = useFormState(addTask, undefined);
  return (
    <div>
      <form
        className="flex flex-col mb-[100px] gap-3 md:w-[500px] md:mt-[150px]"
        action={formAction}
      >
        <Input
          type="text"
          name="title"
          placeholder="title"
          className="bg-white"
        />
        <Textarea
          type="text"
          name="description"
          placeholder="description"
          className="bg-white h-[150px]"
        />
        <Button
          onClick={() => {
            notify();
            setTimeout(() => {
              router.push("/tasks");
            }, 0);
          }}
        >
          Create
        </Button>
        {state && state.error}
      </form>
    </div>
  );
};

export default TaskAddForm;
