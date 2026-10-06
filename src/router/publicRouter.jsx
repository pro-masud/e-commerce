import { Forgot } from "../pages/auth/Forgot";
import { Login } from "../pages/auth/Login";
import { Register } from "../pages/auth/Register";

//create public router for the application
const publicRouter = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/forgot-password",
    element: <Forgot />,
  },
];

export default publicRouter;
