import { useState } from "react";

const Header = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showAdmin, setShowAdmin] = useState(false);

  const [notifications, setNotifications] = useState([
    {
      id: 1,
      initials: "C",
      message: "Charlene Reed booked a new appointment.",
      time: "4 mins ago",
    },
    {
      id: 2,
      initials: "C",
      message: "Carl Kelly paid $250.00 for consultation.",
      time: "1 hr ago",
    },
    {
      id: 3,
      initials: "T",
      message: "Travis Trimble left a 5-star review.",
      time: "3 hrs ago",
    },
  ]);

  return (
    <>
      <header className="dc-top">
        <div className="dc-logo">
          <span>DOC</span>
          <span className="c">CURE</span>
        </div>
        <div className="dc-search-wrap">
          <label className="dc-search">
            <input
              type="search"
              placeholder="Search dashboard"
              aria-label="Search dashboard information"
            />
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
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-4-4" />
            </svg>
          </label>
        </div>
        <div className="dc-right">
          <div className="header-control">
            <button
              className="dc-ico dc-bell"
              type="button"
              aria-label="Notifications"
              onClick={() => setShowNotifications((isOpen) => !isOpen)}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M6 16v-5a6 6 0 0 1 12 0v5l2 2H4l2-2ZM10 21h4" />
              </svg>
              <b>{notifications ? notifications.length : 0}</b>
            </button>
            {showNotifications && (
              <div className="header-menu notification-menu">
                <div className="header-menu-title">
                  Notifications{" "}
                  <button
                    className="notification-clear"
                    type="button"
                    onClick={() => setNotifications([])}
                  >
                    clear
                  </button>
                </div>

                {notifications.length > 0 ? (
                  notifications.map((notification) => (
                    <div className="notification-item" key={notification.id}>
                      <span className="mini">{notification.initials}</span>
                      <span className="notification-copy">
                        {notification.message}
                        <small>{notification.time}</small>
                      </span>
                    </div>
                  ))
                ) : (
                  <p className="menu-empty">No notifications.</p>
                )}

                <div className="menu-footer">Your latest notifications</div>
              </div>
            )}
          </div>
          <button
            className="account-trigger"
            type="button"
            onClick={() => setShowAdmin((openAdmin) => !openAdmin)}
          >
            <span className="av">A</span>
            <span>Admin</span>
          </button>
          {showAdmin && (
            <div className="header-menu account-menu">
              <div className="account-summary">
                <span className="av account-avatar">A</span>
                <span>
                  <strong>Admin</strong>
                  <small>Administrator</small>
                </span>
              </div>

              <div className="admin-profile-details">
                <span>Account type</span>
                <strong>Administrator</strong>
              </div>

              <button className="account-menu-item" type="button">
                Close
              </button>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
