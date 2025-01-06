import { RootState } from "@/redux/store";
import { ITask } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
interface TinitialState {
  tasks: ITask[];
  filter: "High" | "Medium" | "Low";
}
type DraftTask = Pick<ITask, "title" | "description" | "priority" | "dueDate">;
const createTask = (newTask: DraftTask): ITask => {
  const id = uuidv4();
  return { id: id, isCompleted: false, ...newTask };
};
const initialState: TinitialState = {
  tasks: [
    {
      id: "task-123",
      title: "Complete Redux Tutorial",
      description:
        "Finish the tutorial on Redux Toolkit to better understand state management.",
      dueDate: "2025-01-10T23:59:59Z",
      isCompleted: false,
      priority: "High",
    },
  ],
  filter: "High",
};
const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<ITask>) => {
      const newTask = createTask(action.payload);
      state.tasks.push(newTask);
    },
    toggleCompleted: (state, action: PayloadAction<string>) => {
      const findTask = state.tasks.find((task) => task.id === action.payload);
      if (findTask) {
        findTask.isCompleted = !findTask.isCompleted;
      }
    },
  },
});
export const selectTask = (state: RootState) => {
  return state.todo.tasks;
};
export const { addTask, toggleCompleted } = taskSlice.actions;
export default taskSlice.reducer;
