import { Dashboard } from "../pages/dashboard/Dashboard";
import { Profile } from "../pages/dashboard/Profile";

//create private router for the application
const privateRouter = [
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
];

export default privateRouter;
