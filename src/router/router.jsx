import { createBrowserRouter } from "react-router-dom";
import privateRouter from "./privateRouter";
import publicRouter from "./publicRouter";

const router = createBrowserRouter([...publicRouter, ...privateRouter]);

export default router;
