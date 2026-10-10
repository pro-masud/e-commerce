const Header = () => {
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
            <span className="dc-ico dc-bell" aria-label="Notifications">
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
              <b>3</b>
            </span>
          </div>
          <div className="account-trigger">
            <span className="av">A</span>
            <span>Admin</span>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
