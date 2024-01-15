import TaskAddForm from "@/components/TaskAddForm";

const page = () => {
  return (
    <div className="bg-sky-400 h-screen flex justify-center gap-[500px] p-10">
      <div className="text-3xl flex justify-center">Create task</div>

      <TaskAddForm />
    </div>
  );
};

export default page;
