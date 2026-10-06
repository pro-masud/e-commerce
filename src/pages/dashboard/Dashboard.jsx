import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./dashboard.css";

const revenueData = [
  { year: "2013", revenue: 60 },
  { year: "2014", revenue: 110 },
  { year: "2015", revenue: 180 },
  { year: "2016", revenue: 60 },
  { year: "2017", revenue: 300 },
];

const statusData = [
  { year: "2015", completed: 100, pending: 30 },
  { year: "2016", completed: 20, pending: 55 },
  { year: "2017", completed: 90, pending: 120 },
  { year: "2018", completed: 50, pending: 80 },
  { year: "2019", completed: 120, pending: 150 },
];

const dashboardSearchItems = [
  { title: "Doctors", detail: "168 doctors", target: "stats" },
  { title: "Patients", detail: "487 patients", target: "stats" },
  { title: "Appointments", detail: "485 appointments", target: "stats" },
  { title: "Revenue", detail: "$62,523 total revenue", target: "stats" },
  { title: "Revenue chart", detail: "Revenue by year", target: "charts" },
  { title: "Status chart", detail: "Completed and pending status", target: "charts" },
  { title: "Doctors list", detail: "View doctor records", target: "doctors-list" },
  { title: "Patients list", detail: "View patient records", target: "patients-list" },
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

const RevenueChart = () => (
  <div className="chart-container">
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        data={revenueData}
        margin={{ top: 12, right: 12, bottom: 4, left: 0 }}
      >
        <defs>
          <linearGradient id="revenueFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4a76a8" stopOpacity={0.72} />
            <stop offset="100%" stopColor="#4a76a8" stopOpacity={0.12} />
          </linearGradient>
        </defs>
        <CartesianGrid stroke="#e2e5ea" vertical={false} />
        <XAxis
          dataKey="year"
          axisLine={false}
          tickLine={false}
          tick={{ fill: "#555", fontSize: 11 }}
        />
        <YAxis
          domain={[0, 300]}
          ticks={[0, 75, 150, 225, 300]}
          axisLine={false}
          tickLine={false}
          tick={{ fill: "#555", fontSize: 11 }}
          width={36}
        />
        <Tooltip
          formatter={(value) => [`$${value}`, "Revenue"]}
          contentStyle={{ border: "1px solid #e2e5ea", borderRadius: 6 }}
        />
        <Area
          type="monotone"
          dataKey="revenue"
          name="Revenue"
          stroke="#12306b"
          strokeWidth={2.5}
          fill="url(#revenueFill)"
          activeDot={{ r: 5 }}
        />
      </AreaChart>
    </ResponsiveContainer>
  </div>
);

const StatusChart = () => (
  <div className="chart-container">
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={statusData}
        margin={{ top: 12, right: 12, bottom: 4, left: 0 }}
      >
        <CartesianGrid stroke="#e2e5ea" vertical={false} />
        <XAxis
          dataKey="year"
          axisLine={false}
          tickLine={false}
          tick={{ fill: "#555", fontSize: 11 }}
        />
        <YAxis
          domain={[0, 200]}
          ticks={[0, 50, 100, 150, 200]}
          axisLine={false}
          tickLine={false}
          tick={{ fill: "#555", fontSize: 11 }}
          width={36}
        />
        <Tooltip
          contentStyle={{ border: "1px solid #e2e5ea", borderRadius: 6 }}
        />
        <Legend wrapperStyle={{ fontSize: 11 }} />
        <Line
          type="monotone"
          dataKey="completed"
          name="Completed"
          stroke="#2f5d8f"
          strokeWidth={2.5}
          dot={false}
          activeDot={{ r: 5 }}
        />
        <Line
          type="monotone"
          dataKey="pending"
          name="Pending"
          stroke="#f59e0b"
          strokeWidth={2.5}
          dot={false}
          activeDot={{ r: 5 }}
        />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

const NavItem = ({ icon, children, href = "#", active = false }) => (
  <a href={href} className={`item${active ? " on" : ""}`}>
    <Icon name={icon} size={15} />
    <span>{children}</span>
  </a>
);

const StatProgress = ({ label, value, color }) => (
  <div
    className="stat-progress"
    role="progressbar"
    aria-label={`${label} progress`}
    aria-valuemin={0}
    aria-valuemax={100}
    aria-valuenow={value}
  >
    <span
      className="stat-progress-fill"
      style={{ width: `${value}%`, backgroundColor: color }}
    />
  </div>
);

export const Dashboard = () => {
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
    <div className="dc">
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
        <div className="header-menu search-results" id="dashboard-search-results">
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

    {sidebarOpen && (
      <button
        className="sidebar-backdrop"
        type="button"
        aria-label="Close navigation"
        onClick={() => setSidebarOpen(false)}
      />
    )}
    <aside className={`dc-side${sidebarOpen ? " mobile-open" : ""}`}>
      <div className="sec">Main</div>
      <NavItem icon="home" href="/" active>Dashboard</NavItem>
      <NavItem icon="layout" href="/appointments">Appointments</NavItem>
      <NavItem icon="users" href="/specialities">Specialities</NavItem>
      <NavItem icon="user" href="/doctors">Doctors</NavItem>
      <NavItem icon="user" href="/patients">Patients</NavItem>
      <NavItem icon="star" href="/reviews">Reviews</NavItem>
      <NavItem icon="bars" href="/transactions">Transactions</NavItem>
      <NavItem icon="frame" href="/settings">Settings</NavItem>
      <div className="sec">Pages</div>
      <NavItem icon="file" href="/reports/appointment-reports">Reports</NavItem>
      <div className="sub show">
        <NavItem icon="file" href="/reports/appointment-reports">Appointment Reports</NavItem>
        <NavItem icon="file" href="/reports/patient-reports">Patient Reports</NavItem>
        <NavItem icon="file" href="/reports/revenue-reports">Revenue Reports</NavItem>
        <NavItem icon="file" href="/reports/doctor-reports">Doctor Reports</NavItem>
      </div>
      <NavItem icon="user" href="/profile">Profile</NavItem>
      <NavItem icon="user" href="/authentication/login">Login</NavItem>
      <NavItem icon="user" href="/authentication/register">Register</NavItem>
      <NavItem icon="user" href="/authentication/forgot-password">Forgot Password</NavItem>
      <NavItem icon="user" href="/authentication/lock-screen">Lock Screen</NavItem>
      <NavItem icon="alert" href="/error-pages/404-error">Error Pages</NavItem>
      <NavItem icon="alert" href="/error-pages/500-error">500 Error</NavItem>
      <NavItem icon="blank" href="/blank-page">Blank Page</NavItem>
      <div className="sec">UI Interface</div>
      <NavItem icon="frame" href="/components">Components</NavItem>
      <NavItem icon="layout" href="/forms/basic-inputs">Forms</NavItem>
      <NavItem icon="layout" href="/forms/input-groups">Input Groups</NavItem>
      <NavItem icon="layout" href="/forms/horizontal-form">Horizontal Form</NavItem>
      <NavItem icon="layout" href="/forms/vertical-form">Vertical Form</NavItem>
      <NavItem icon="table" href="/tables/basic-tables">Tables</NavItem>
      <NavItem icon="table" href="/tables/data-tables">Data Tables</NavItem>
      <NavItem icon="code" href="/multi-level/level-1">Multi Level</NavItem>
      <NavItem icon="code" href="/multi-level/level-2/level-3a">Level 3A</NavItem>
      <NavItem icon="code" href="/multi-level/level-2/level-3b">Level 3B</NavItem>
    </aside>

    <main className="dc-main">
      <div className="page-heading">
        <div>
          <div className="crumb">OVERVIEW / DASHBOARD</div>
          <h1>Welcome back, Admin <span aria-hidden="true">👋</span></h1>
          <p>Here&apos;s what&apos;s happening at your clinic today.</p>
        </div>
        <div className="date-chip">
          <span className="date-dot" />
          Clinic overview
        </div>
      </div>

      <section className="stats" id="stats">
        <div className="card stat">
          <div className="row">
            <span className="ring" style={{ color: "#1ab7ea", borderColor: "#1ab7ea" }}>
              <Icon name="users" size={20} />
            </span>
            <strong>168</strong>
          </div>
          <div className="lbl">Doctors</div>
          <div className="stat-note"><span>+8.2%</span> from last month</div>
          <StatProgress label="Doctors" value={53} color="#1ab7ea" />
        </div>
        <div className="card stat">
          <div className="row">
            <span className="ring" style={{ color: "#3f7d1d", borderColor: "#3f7d1d" }}>
              <Icon name="card" size={20} />
            </span>
            <strong>487</strong>
          </div>
          <div className="lbl">Patients</div>
          <div className="stat-note"><span>+12.5%</span> from last month</div>
          <StatProgress label="Patients" value={68} color="#3f7d1d" />
        </div>
        <div className="card stat">
          <div className="row">
            <span className="ring" style={{ color: "#d9261c", borderColor: "#d9261c" }}>
              <Icon name="user" size={20} />
            </span>
            <strong>485</strong>
          </div>
          <div className="lbl">Appointment</div>
          <div className="stat-note"><span>+4.3%</span> from last month</div>
          <StatProgress label="Appointments" value={46} color="#d9261c" />
        </div>
        <div className="card stat">
          <div className="row">
            <span className="ring" style={{ color: "#f5a30f", borderColor: "#f5a30f" }}>
              <Icon name="folder" size={20} />
            </span>
            <strong>$62523</strong>
          </div>
          <div className="lbl">Revenue</div>
          <div className="stat-note"><span>+9.8%</span> from last month</div>
          <StatProgress label="Revenue" value={72} color="#f5a30f" />
        </div>
      </section>

      <section className="two" id="charts">
        <div className="card">
          <div className="card-heading">
            <div><h2>Revenue overview</h2><p>Annual revenue performance</p></div>
            <span className="card-period">2013–2017</span>
          </div>
          <div className="pad"><RevenueChart /></div>
        </div>
        <div className="card">
          <div className="card-heading">
            <div><h2>Appointment status</h2><p>Completed vs pending</p></div>
            <span className="card-period">2015–2019</span>
          </div>
          <div className="pad"><StatusChart /></div>
        </div>
      </section>

      <section className="two">
        <div className="card" id="doctors-list">
          <div className="card-heading">
            <div><h2>Top doctors</h2><p>Performance and patient reviews</p></div>
            <a className="table-action" href="/doctors">View doctors</a>
          </div>
          <table>
            <thead>
              <tr><th>Doctor Name</th><th>Speciality</th><th>Earned</th><th>Reviews</th></tr>
            </thead>
            <tbody>
              <tr><td><span className="mini">R</span>Dr. Ruby Perrin</td><td>Dental</td><td>$3200.00</td><td className="stars">★★★★<em>★</em></td></tr>
              <tr><td><span className="mini">D</span>Dr. Darren Elder</td><td>Dental</td><td>$3100.00</td><td className="stars">★★★★★</td></tr>
              <tr><td><span className="mini">D</span>Dr. Deborah Angel</td><td>Cardiology</td><td>$4000.00</td><td className="stars">★★★<em>★★</em></td></tr>
              <tr><td><span className="mini">S</span>Dr. Sofia Brient</td><td>Urology</td><td>$3700.00</td><td className="stars">★★★★★</td></tr>
              <tr><td><span className="mini">M</span>Dr. Marvin Campbell</td><td>Orthopaedics</td><td>$2900.00</td><td className="stars">★★★★<em>★</em></td></tr>
            </tbody>
          </table>
        </div>
        <div className="card" id="patients-list">
          <div className="card-heading">
            <div><h2>Recent patients</h2><p>Latest patient activity</p></div>
            <a className="table-action" href="/patients">View patients</a>
          </div>
          <table>
            <thead>
              <tr><th>Patient Name</th><th>Phone</th><th>Last Visit</th><th>Paid</th></tr>
            </thead>
            <tbody>
              <tr><td><span className="mini g">C</span>Charlene Reed</td><td>8286329170</td><td>20 Oct 2019</td><td>$100.00</td></tr>
              <tr><td><span className="mini g">T</span>Travis Trimble</td><td>2077299974</td><td>22 Oct 2019</td><td>$200.00</td></tr>
              <tr><td><span className="mini g">C</span>Carl Kelly</td><td>2607247769</td><td>21 Oct 2019</td><td>$250.00</td></tr>
              <tr><td><span className="mini g">M</span>Michelle Fairfax</td><td>5043686874</td><td>21 Sep 2019</td><td>$150.00</td></tr>
              <tr><td><span className="mini g">G</span>Gina Moore</td><td>9548207887</td><td>18 Sep 2019</td><td>$350.00</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  </div>
  );
};
