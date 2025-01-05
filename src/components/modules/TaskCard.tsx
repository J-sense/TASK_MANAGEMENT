import { cn } from "@/lib/utils";
import { ITask } from "@/types";

interface Itask {
  task: ITask;
}
const TaskCard = ({ task }: Itask) => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{task.title}</h2>
        <p className="text-gray-600 mt-2">{task.description}</p>
        <div className="mt-4">
          <button
            className={cn("px-4 py-2  text-white rounded hover:bg-blue-600", {
              "bg-green-500": task.priority === "High",
              "bg-blue-500": task.priority === "Low",
              "bg-red-500": task.priority === "Medium",
            })}
          >
            Action
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
