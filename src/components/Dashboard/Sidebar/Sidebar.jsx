import { MdDashboard, MdPersonOutline } from "react-icons/md";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <aside className="dc-side">
        <Link to="/" className="item">
          <MdDashboard size={15} aria-hidden="true" />
          <span>Dashboard</span>
        </Link>
        <Link to="/user" className="item">
          <MdPersonOutline size={15} aria-hidden="true" />
          <span>Users</span>
        </Link>
        <Link to="/doctor" className="item">
          <MdPersonOutline size={15} aria-hidden="true" />
          <span>Doctors</span>
        </Link>
      </aside>
    </>
  );
};

export default Sidebar;
