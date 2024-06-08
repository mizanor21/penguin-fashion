import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Layouts from "../layouts/Layouts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts></Layouts>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
]);

export default router;
