import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

const PageLayout = () => {
  return (
    <>
      <div className="dc">
        <Header />
        <Sidebar />
        <main className="dc-main">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default PageLayout;
