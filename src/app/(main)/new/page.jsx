import TaskAddForm from "@/components/TaskAddForm";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const page = () => {
  return (
    <div className="h-screen flex justify-center flex-col md:flex-row gap-[400px] p-10">
      <div className="text-5xl flex justify-center font-[Oswald] mb-[-300px] p-0 md:mt-[150px] select-none">
        Create task
      </div>
      <div className="pt-0">
        <TaskAddForm />
        <Link href="/tasks">
          <Button className="absolute bottom-10 right-10 bg-black text-white dark:bg-[#DA9C78] dark:text-black">
            Go back
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default page;
