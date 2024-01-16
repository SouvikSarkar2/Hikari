import TaskAddForm from "@/components/TaskAddForm";

const page = () => {
  return (
    <div className="h-screen flex justify-center flex-col md:flex-row gap-[500px] p-10">
      <div className="text-5xl flex justify-center font-[Oswald] mb-[-300px] p-0 md:mt-[150px]">
        Create task
      </div>
      <div className="pt-0">
        <TaskAddForm />
      </div>
    </div>
  );
};

export default page;
