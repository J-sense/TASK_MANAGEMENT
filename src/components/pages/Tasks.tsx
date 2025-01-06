import { selectTask } from "@/redux/feature/tasks/taskSlice";
import { useAppSelector } from "@/redux/hooks";
import TaskCard from "../modules/TaskCard.tsx";
import { Addmodel } from "../modules/Addmodel.tsx";

const Tasks = () => {
  const tasks = useAppSelector(selectTask);
  console.log(tasks);
  return (
    <>
      <div className="flex flex-col items-center w-[600px] mx-auto gap-4">
        <div className="ml-auto ">
          <Addmodel />
        </div>

        <div>
          {tasks.map((task, index) => (
            <TaskCard task={task} key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Tasks;
