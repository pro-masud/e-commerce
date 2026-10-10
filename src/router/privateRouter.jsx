import PageLayout from "../components/Dashboard/PageLayout/PageLayout";
import { Dashboard } from "../pages/dashboard/Dashboard";
import Doctor from "../pages/doctor/Doctor";
import User from "../pages/user/User";

//create private router for the application
const privateRouter = [
  {
    element: <PageLayout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/user",
        element: <User />,
      },
      {
        path: "/doctor",
        element: <Doctor />,
      },
    ],
  },
];

export default privateRouter;
