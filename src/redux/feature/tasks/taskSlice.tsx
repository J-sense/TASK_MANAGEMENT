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
  tasks: [],
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
  },
});
export const selectTask = (state: RootState) => {
  return state.todo.tasks;
};
export const { addTask } = taskSlice.actions;
export default taskSlice.reducer;
