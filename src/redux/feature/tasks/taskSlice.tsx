import { RootState } from "@/redux/store";
import { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
interface TinitialState {
  tasks: ITask[];
  filter: "High" | "Medium" | "Low";
}
const initialState: TinitialState = {
  tasks: [
    {
      id: "fjdsafj",
      title: "fdjsafhjkasd",
      description: "hfdaskjh",
      dueDate: "2030-2-3",
      isCompleted: false,
      priority: "High",
    },
  ],
  filter: "High",
};
const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});
export const selectTask = (state: RootState) => {
  return state.todo.tasks;
};
export default taskSlice.reducer;
