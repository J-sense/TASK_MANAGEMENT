import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./feature/tasks/taskSlice";
const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
