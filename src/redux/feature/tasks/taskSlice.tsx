import { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
interface TinitialState {
  task: ITask[];
}
const initialState: TinitialState = {
  task: [
    {
      id: "fjdsafj",
      title: "fdjsafhjkasd",
      description: "hfdaskjh",
      dueDate: "2030-2-3",
      isCompleted: false,
      priority: "High",
    },
  ],
};
const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});
export default taskSlice.reducer;
