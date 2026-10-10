import { Dashboard } from "../pages/dashboard/Dashboard";

//create private router for the application
const privateRouter = [
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/user",
    element: <Dashboard />,
  },
];

export default privateRouter;
