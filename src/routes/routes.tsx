import App from "@/App";
import Login from "@/components/pages/Login";
import Tasks from "@/components/pages/Tasks";
import Users from "@/components/pages/Users";
import { createBrowserRouter } from "react-router";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        path: "/",
        element: <Tasks />,
      },
      {
        path: "/users",
        element: <Users />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
export default routes;
