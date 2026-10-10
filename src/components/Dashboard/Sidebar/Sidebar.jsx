import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <aside className="dc-side">
        <Link to="/" className="item on">
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M3 11l9-8 9 8v10h-6v-6H9v6H3z" />
          </svg>
          <span>Dashboard</span>
        </Link>
      </aside>
    </>
  );
};

export default Sidebar;
