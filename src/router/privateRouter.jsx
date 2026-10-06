import { Dashboard } from "../pages/dashboard/Dashboard";

//create private router for the application
const privateRouter = [
  {
    path: "/",
    element: <Dashboard />,
  },
];

export default privateRouter;
