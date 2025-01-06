// import { cn } from "@/lib/utils";
import { ITask } from "@/types";
import { Checkbox } from "../ui/checkbox";
import { useAppDispatch } from "@/redux/hooks";
import { toggleCompleted } from "@/redux/feature/tasks/taskSlice";

interface Itask {
  task: ITask;
}
// const handledDispatch = () => {};
const TaskCard = ({ task }: Itask) => {
  const dispatch = useAppDispatch();
  return (
    <div className=" mx-auto border border-zinc-500 rounded-lg shadow-md overflow-hidden">
      <div className="p-4 flex justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">{task.title}</h2>
          <p className="text-gray-600 mt-2">{task.description}</p>
        </div>
        <div>
          <Checkbox onClick={() => dispatch(toggleCompleted(task.id))} />
        </div>
        {/* <div className="mt-4">
          <button
            className={cn("px-4 py-2  text-white rounded hover:bg-blue-600", {
              "bg-green-500": task.priority === "High",
              "bg-blue-500": task.priority === "Low",
              "bg-red-500": task.priority === "Medium",
            })}
          >
            Action
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default TaskCard;
