import { deleteTask } from "@/lib/actions";

const IndTask = ({ task }) => {
  return (
    <div className="h-[200px] w-[200px] bg-sky-800 relative">
      <div className="text-2xl flex justify-center h-[40px] text-white">
        {task.title}
      </div>
      <div className="text-xl flex justify-center h-[160px] bg-sky-200">
        {task.description}
      </div>
      <form action={deleteTask}>
        <input type="hidden" name="id" value={task.id} />
        <button className="absolute bottom-1 right-1 bg-red-400">delete</button>
      </form>
    </div>
  );
};

export default IndTask;
