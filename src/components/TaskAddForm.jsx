"use client";

import { useFormState } from "react-dom";
import { addTask } from "@/lib/actions";
import { redirect, useRouter } from "next/navigation";
import { revalidatePath } from "next/cache";

const TaskAddForm = () => {
  const router = useRouter();
  const [state, formAction] = useFormState(addTask, undefined);
  return (
    <div>
      <form action={formAction}>
        <input type="text" name="title" placeholder="title" />
        <input type="text" name="description" placeholder="description" />
        <button
          onClick={() => {
            setTimeout(() => {
              router.push("/tasks");
            }, [200]);
          }}
        >
          add
        </button>
        {state && state.error}
      </form>
    </div>
  );
};

export default TaskAddForm;
