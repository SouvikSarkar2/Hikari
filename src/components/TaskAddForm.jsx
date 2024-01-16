"use client";

import { useFormState } from "react-dom";
import { addTask } from "@/lib/actions";
import { redirect, useRouter } from "next/navigation";
import { revalidatePath } from "next/cache";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";

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
            setTimeout(() => {
              router.push("/tasks");
            }, [800]);
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
