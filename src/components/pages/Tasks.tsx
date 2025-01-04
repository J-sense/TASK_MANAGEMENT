import { selectTask } from "@/redux/feature/tasks/taskSlice";
import { useAppSelector } from "@/redux/hooks";

const Tasks = () => {
  const tasks = useAppSelector(selectTask);
  console.log(tasks);
  return <div>this is tasks page</div>;
};

export default Tasks;
