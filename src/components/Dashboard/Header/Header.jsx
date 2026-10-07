import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Icon = ({ name, size = 16 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d={paths[name]} />
  </svg>
);

const dashboardSearchItems = [
  { title: "Doctors", detail: "168 doctors", target: "stats" },
  { title: "Patients", detail: "487 patients", target: "stats" },
  { title: "Appointments", detail: "485 appointments", target: "stats" },
  { title: "Revenue", detail: "$62,523 total revenue", target: "stats" },
  { title: "Revenue chart", detail: "Revenue by year", target: "charts" },
  {
    title: "Status chart",
    detail: "Completed and pending status",
    target: "charts",
  },
  {
    title: "Doctors list",
    detail: "View doctor records",
    target: "doctors-list",
  },
  {
    title: "Patients list",
    detail: "View patient records",
    target: "patients-list",
  },
];

const notifications = [
  {
    initials: "C",
    message: "Charlene Reed booked a new appointment.",
    time: "4 mins ago",
  },
  {
    initials: "C",
    message: "Carl Kelly paid $250.00 for consultation.",
    time: "1 hr ago",
  },
  {
    initials: "T",
    message: "Travis Trimble left a 5-star review.",
    time: "3 hrs ago",
  },
];

const paths = {
  home: "M3 11l9-8 9 8v10h-6v-6H9v6H3z",
  layout: "M3 4h18v16H3zM9 4v16M3 10h6",
  users:
    "M8 11a3 3 0 100-6 3 3 0 000 6zM2 20c0-3 3-5 6-5s6 2 6 5M16 11a3 3 0 100-6M18 15c2 .5 4 2 4 5",
  user: "M12 11a4 4 0 100-8 4 4 0 000 8zM4 21c0-4 4-6 8-6s8 2 8 6",
  star: "M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z",
  bars: "M5 20V10M10 20V4M15 20v-8M20 20V8",
  frame: "M7 3v4H3M17 3v4h4M7 21v-4H3M17 21v-4h4M7 7h10v10H7z",
  file: "M6 2h9l5 5v15H6zM9 12h8M9 16h8M9 8h3",
  alert: "M12 22a10 10 0 100-20 10 10 0 000 20zM12 7v6M12 16.5v.5",
  blank: "M6 2h9l4 4v16H6z",
  bell: "M6 16V11a6 6 0 1112 0v5l2 2H4zM10 21h4",
  search: "M11 18a7 7 0 100-14 7 7 0 000 14zM20 20l-4-4",
  menu: "M4 6h16M4 12h16M4 18h16",
  code: "M8 7l-5 5 5 5M16 7l5 5-5 5",
  table: "M3 4h18v16H3zM3 10h18M3 15h18M9 4v16",
  card: "M3 6h18v12H3zM6 10h12M6 14h6",
  folder: "M3 6h7l2 2h9v11H3z",
  logout: "M9 21H4V3h5M16 17l5-5-5-5M21 12H9",
};

const Header = () => {
  const [search, setSearch] = useState("");
  const [openMenu, setOpenMenu] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const searchResults = dashboardSearchItems.filter(({ title, detail }) =>
    `${title} ${detail}`.toLowerCase().includes(search.trim().toLowerCase()),
  );

  const toggleMenu = (menu) => {
    setOpenMenu((currentMenu) => (currentMenu === menu ? null : menu));
  };
  return (
    <>
      <header className="dc-top">
        <button
          className="mobile-nav-toggle"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={sidebarOpen}
          onClick={() => setSidebarOpen((isOpen) => !isOpen)}
        >
          <Icon name="menu" size={20} />
        </button>
        <div className="dc-logo">
          <span>DOC</span>
          <span className="c">CURE</span>
        </div>
        <div className="dc-search-wrap">
          <label className="dc-search">
            <input
              type="search"
              placeholder="Search dashboard"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              onFocus={() => setOpenMenu(null)}
              aria-label="Search dashboard information"
              aria-expanded={Boolean(search.trim())}
              aria-controls="dashboard-search-results"
            />
            <Icon name="search" size={15} />
          </label>
          {search.trim() && (
            <div
              className="header-menu search-results"
              id="dashboard-search-results"
            >
              <strong className="header-menu-title">Search results</strong>
              {searchResults.length ? (
                searchResults.map(({ title, detail, target }) => (
                  <a
                    className="search-result"
                    href={`#${target}`}
                    key={title}
                    onClick={() => setSearch("")}
                  >
                    <span>{title}</span>
                    <small>{detail}</small>
                  </a>
                ))
              ) : (
                <p className="menu-empty">No dashboard information found.</p>
              )}
            </div>
          )}
        </div>
        <div className="dc-right">
          <div className="header-control">
            <button
              className="dc-ico dc-bell"
              type="button"
              aria-label="Notifications"
              aria-expanded={openMenu === "notifications"}
              onClick={() => toggleMenu("notifications")}
            >
              <Icon name="bell" size={18} />
              <b>{notifications.length}</b>
            </button>
            {openMenu === "notifications" && (
              <div className="header-menu notification-menu">
                <div className="header-menu-title">Notifications</div>
                {notifications.map(({ initials, message, time }) => (
                  <div className="notification-item" key={message}>
                    <span className="mini">{initials}</span>
                    <span className="notification-copy">
                      {message}
                      <small>{time}</small>
                    </span>
                  </div>
                ))}
                <div className="menu-footer">Your latest notifications</div>
              </div>
            )}
          </div>
          <div className="header-control">
            <button
              className="account-trigger"
              type="button"
              aria-label="Open account menu"
              aria-expanded={openMenu === "account"}
              onClick={() => toggleMenu("account")}
            >
              <span className="av">A</span>
              <span>Admin</span>
            </button>
            {openMenu === "account" && (
              <div className="header-menu account-menu">
                <div className="account-summary">
                  <span className="av account-avatar">A</span>
                  <span>
                    <strong>Admin</strong>
                    <small>Administrator</small>
                  </span>
                </div>
                <Link
                  className="account-menu-item"
                  to="/profile"
                  onClick={() => setOpenMenu(null)}
                >
                  <Icon name="user" size={15} />
                  My Profile
                </Link>
                <button
                  className="account-menu-item logout-item"
                  type="button"
                  onClick={() => navigate("/login")}
                >
                  <Icon name="logout" size={15} />
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
