import { selectTask } from "@/redux/feature/tasks/taskSlice";
import { useAppSelector } from "@/redux/hooks";
import TaskCard from "../modules/TaskCard.tsx";

const Tasks = () => {
  const tasks = useAppSelector(selectTask);
  console.log(tasks);
  return (
    <>
      <div>
        {tasks.map((task, index) => (
          <TaskCard task={task} key={index} />
        ))}
      </div>
    </>
  );
};

export default Tasks;
