export const Dashboard = () => {
  return <>
  import { useState } from "react";

/* ---------- Icons (inline, no dependency) ---------- */
const P = {
  home: "M3 11l9-8 9 8v10h-6v-6H9v6H3z",
  layout: "M3 4h18v16H3zM9 4v16M3 10h6",
  users: "M8 11a3 3 0 100-6 3 3 0 000 6zM2 20c0-3 3-5 6-5s6 2 6 5M16 11a3 3 0 100-6M18 15c2 .5 4 2 4 5",
  user: "M12 11a4 4 0 100-8 4 4 0 000 8zM4 21c0-4 4-6 8-6s8 2 8 6",
  userPlus: "M10 11a4 4 0 100-8 4 4 0 000 8zM2 21c0-4 4-6 8-6s5 1 6 3M19 8v6M16 11h6",
  star: "M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z",
  bars: "M5 20V10M10 20V4M15 20v-8M20 20V8",
  frame: "M7 3v4H3M17 3v4h4M7 21v-4H3M17 21v-4h4M7 7h10v10H7z",
  file: "M6 2h9l5 5v15H6zM9 12h8M9 16h8M9 8h3",
  alert: "M12 22a10 10 0 100-20 10 10 0 000 20zM12 7v6M12 16.5v.5",
  blank: "M6 2h9l4 4v16H6z",
  code: "M8 7l-5 5 5 5M16 7l5 5-5 5",
  table: "M3 4h18v16H3zM3 10h18M3 15h18M9 4v16",
  search: "M11 18a7 7 0 100-14 7 7 0 000 14zM20 20l-4-4",
  bell: "M6 16V11a6 6 0 1112 0v5l2 2H4zM10 21h4",
  logout: "M9 21H4V3h5M16 17l5-5-5-5M21 12H9",
  check: "M5 12l5 5 9-10",
  menu: "M3 6h18M3 11h12M3 16h18M3 21h12",
  chev: "M9 6l6 6-6 6",
  card: "M3 6h18v12H3zM6 10h12M6 14h6",
  folder: "M3 6h7l2 2h9v11H3z",
  money: "M3 6h18v12H3zM12 15a3 3 0 100-6 3 3 0 000 6z",
};
const Icon = ({ n, size = 16, sw = 1.8 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d={P[n]} />
  </svg>
);


export default function DoccureDashboard() {
  const [collapsed, setCollapsed] = useState(false);
  const [panel, setPanel] = useState(null); // "notif" | "user" | null
  const [open, setOpen] = useState({});     // sidebar sub menus
  const t = (k) => setOpen((o) => ({ ...o, [k]: !o[k] }));

  return (
    <div className="dc">
      {panel && <div className="ov" onClick={() => setPanel(null)} />}

      <header className="dc-top">
        <div className="dc-logo"><span>DOC</span><span className="c">CURE</span></div>
        <button className="dc-ico" onClick={() => setCollapsed(!collapsed)} aria-label="Toggle sidebar">
          <Icon n="menu" size={20} />
        </button>
        <label className="dc-search">
          <input placeholder="Search here" />
          <Icon n="search" size={14} sw={2.4} />
        </label>
        <div className="dc-right">
          <div className="dd">
            <button className="dc-ico dc-bell" aria-label="Notifications" onClick={() => setPanel(panel === "notif" ? null : "notif")}>
              <Icon n="bell" size={18} /><b>3</b>
            </button>
            {panel === "notif" && (
              <div className="menu notif">
                <div className="mh"><strong>Notifications</strong><a href="#" className="lnk">Mark all as read</a></div>
                <div className="nlist">
<a href="#" className="note unread"><span className="mini">C</span><span className="nt"><b>Charlene Reed</b> booked a new appointment with Dr. Ruby Perrin<small>4 mins ago</small></span><i className="pip" /></a>
<a href="#" className="note unread"><span className="mini">C</span><span className="nt"><b>Carl Kelly</b> paid $250.00 for consultation<small>1 hr ago</small></span><i className="pip" /></a>
<a href="#" className="note unread"><span className="mini">T</span><span className="nt"><b>Travis Trimble</b> left a 5-star review for Dr. Darren Elder<small>3 hrs ago</small></span><i className="pip" /></a>
<a href="#" className="note"><span className="mini">S</span><span className="nt"><b>Dr. Sofia Brient</b> updated her weekly schedule<small>Yesterday</small></span></a>
                </div>
                <div className="mf"><a href="#" className="lnk">Clear all</a><a href="/notifications" className="lnk">View all notifications</a></div>
              </div>
            )}
          </div>
          <div className="dd">
            <button className="dc-user" aria-label="Account menu" onClick={() => setPanel(panel === "user" ? null : "user")}>
              <span className="av">A</span><Icon n="chev" size={12} />
            </button>
            {panel === "user" && (
              <div className="menu usr">
                <div className="uh"><span className="av big">A</span><div><strong>Admin</strong><small>Administrator</small></div></div>
                <a href="/profile" className="mi"><Icon n="user" size={15} />My Profile</a>
                <a href="/settings" className="mi"><Icon n="frame" size={15} />Settings</a>
                <a href="/logout" className="mi out"><Icon n="logout" size={15} />Logout</a>
              </div>
            )}
          </div>
        </div>
      </header>

      <aside className={"dc-side" + (collapsed ? " off" : "")}>
<div className="sec">Main</div>
<a href="/dashboard" className="item on"><Icon n="home" size={15} /><span>Dashboard</span></a>
<a href="/appointments" className="item"><Icon n="layout" size={15} /><span>Appointments</span></a>
<a href="/specialities" className="item"><Icon n="users" size={15} /><span>Specialities</span></a>
<a href="/doctors" className="item"><Icon n="user" size={15} /><span>Doctors</span></a>
<a href="/patients" className="item"><Icon n="user" size={15} /><span>Patients</span></a>
<a href="/reviews" className="item"><Icon n="star" size={15} /><span>Reviews</span></a>
<a href="/transactions" className="item"><Icon n="bars" size={15} /><span>Transactions</span></a>
<a href="/settings" className="item"><Icon n="frame" size={15} /><span>Settings</span></a>
<div>
<button className={"item" + (open["Reports"] ? " open" : "")} onClick={() => t("Reports")}><Icon n="file" size={15} /><span>Reports</span><span className="arr"><Icon n="chev" size={11} /></span></button>
<div className={"sub" + (open["Reports"] ? " show" : "")}><div>
<a href="/reports/appointment-reports" className="item d1 s"><span className="dot" /><span>Appointment Reports</span></a>
<a href="/reports/patient-reports" className="item d1 s"><span className="dot" /><span>Patient Reports</span></a>
<a href="/reports/revenue-reports" className="item d1 s"><span className="dot" /><span>Revenue Reports</span></a>
<a href="/reports/doctor-reports" className="item d1 s"><span className="dot" /><span>Doctor Reports</span></a>
</div></div>
</div>
<div className="sec">Pages</div>
<a href="/profile" className="item"><Icon n="userPlus" size={15} /><span>Profile</span></a>
<div>
<button className={"item" + (open["Authentication"] ? " open" : "")} onClick={() => t("Authentication")}><Icon n="file" size={15} /><span>Authentication</span><span className="arr"><Icon n="chev" size={11} /></span></button>
<div className={"sub" + (open["Authentication"] ? " show" : "")}><div>
<a href="/authentication/login" className="item d1 s"><span className="dot" /><span>Login</span></a>
<a href="/authentication/register" className="item d1 s"><span className="dot" /><span>Register</span></a>
<a href="/authentication/forgot-password" className="item d1 s"><span className="dot" /><span>Forgot Password</span></a>
<a href="/authentication/lock-screen" className="item d1 s"><span className="dot" /><span>Lock Screen</span></a>
</div></div>
</div>
<div>
<button className={"item" + (open["Error Pages"] ? " open" : "")} onClick={() => t("Error Pages")}><Icon n="alert" size={15} /><span>Error Pages</span><span className="arr"><Icon n="chev" size={11} /></span></button>
<div className={"sub" + (open["Error Pages"] ? " show" : "")}><div>
<a href="/error-pages/404-error" className="item d1 s"><span className="dot" /><span>404 Error</span></a>
<a href="/error-pages/500-error" className="item d1 s"><span className="dot" /><span>500 Error</span></a>
</div></div>
</div>
<a href="/blank-page" className="item"><Icon n="blank" size={15} /><span>Blank Page</span></a>
<div className="sec">UI Interface</div>
<a href="/components" className="item"><Icon n="frame" size={15} /><span>Components</span></a>
<div>
<button className={"item" + (open["Forms"] ? " open" : "")} onClick={() => t("Forms")}><Icon n="layout" size={15} /><span>Forms</span><span className="arr"><Icon n="chev" size={11} /></span></button>
<div className={"sub" + (open["Forms"] ? " show" : "")}><div>
<a href="/forms/basic-inputs" className="item d1 s"><span className="dot" /><span>Basic Inputs</span></a>
<a href="/forms/input-groups" className="item d1 s"><span className="dot" /><span>Input Groups</span></a>
<a href="/forms/horizontal-form" className="item d1 s"><span className="dot" /><span>Horizontal Form</span></a>
<a href="/forms/vertical-form" className="item d1 s"><span className="dot" /><span>Vertical Form</span></a>
</div></div>
</div>
<div>
<button className={"item" + (open["Tables"] ? " open" : "")} onClick={() => t("Tables")}><Icon n="table" size={15} /><span>Tables</span><span className="arr"><Icon n="chev" size={11} /></span></button>
<div className={"sub" + (open["Tables"] ? " show" : "")}><div>
<a href="/tables/basic-tables" className="item d1 s"><span className="dot" /><span>Basic Tables</span></a>
<a href="/tables/data-tables" className="item d1 s"><span className="dot" /><span>Data Tables</span></a>
</div></div>
</div>
<div>
<button className={"item" + (open["Multi Level"] ? " open" : "")} onClick={() => t("Multi Level")}><Icon n="code" size={15} /><span>Multi Level</span><span className="arr"><Icon n="chev" size={11} /></span></button>
<div className={"sub" + (open["Multi Level"] ? " show" : "")}><div>
<a href="/multi-level/level-1" className="item d1 s"><span className="dot" /><span>Level 1</span></a>
<div>
<button className={"item d1 s" + (open["Multi Level/Level 2"] ? " open" : "")} onClick={() => t("Multi Level/Level 2")}><span className="dot" /><span>Level 2</span><span className="arr"><Icon n="chev" size={11} /></span></button>
<div className={"sub" + (open["Multi Level/Level 2"] ? " show" : "")}><div>
<a href="/multi-level/level-2/level-3a" className="item d2 s"><span className="dot" /><span>Level 3A</span></a>
<a href="/multi-level/level-2/level-3b" className="item d2 s"><span className="dot" /><span>Level 3B</span></a>
</div></div>
</div>
</div></div>
</div>
      </aside>

      <main className={"dc-main" + (collapsed ? " wide" : "")}>
        <h1>Welcome Admin!</h1>
        <div className="crumb">Dashboard</div>

        <section className="stats">
<div className="card stat">
<div className="row"><span className="ring" style={{ color: "#1ab7ea", borderColor: "#1ab7ea" }}><Icon n="users" size={20} /></span><strong>168</strong></div>
<div className="lbl">Doctors</div>
<div className="bar"><i style={{ width: "50%", background: "#1ab7ea" }} /></div>
</div>
<div className="card stat">
<div className="row"><span className="ring" style={{ color: "#3f7d1d", borderColor: "#3f7d1d" }}><Icon n="card" size={20} /></span><strong>487</strong></div>
<div className="lbl">Patients</div>
<div className="bar"><i style={{ width: "50%", background: "#3f7d1d" }} /></div>
</div>
<div className="card stat">
<div className="row"><span className="ring" style={{ color: "#d9261c", borderColor: "#d9261c" }}><Icon n="money" size={20} /></span><strong>485</strong></div>
<div className="lbl">Appointment</div>
<div className="bar"><i style={{ width: "50%", background: "#d9261c" }} /></div>
</div>
<div className="card stat">
<div className="row"><span className="ring" style={{ color: "#f5a30f", borderColor: "#f5a30f" }}><Icon n="folder" size={20} /></span><strong>$62523</strong></div>
<div className="lbl">Revenue</div>
<div className="bar"><i style={{ width: "50%", background: "#f5a30f" }} /></div>
</div>
        </section>

        <section className="two">
          <div className="card"><h2>Revenue</h2><div className="pad">
<svg viewBox="0 0 540 240" width="100%" role="img" style={{ display: "block" }}>
<line x1="36" x2="532" y1="214.0" y2="214.0" stroke="#e2e5ea" />
<text x="28" y="217.0" fontSize="8" textAnchor="end" fill="#555">0</text>
<line x1="36" x2="532" y1="164.0" y2="164.0" stroke="#e2e5ea" />
<text x="28" y="167.0" fontSize="8" textAnchor="end" fill="#555">75</text>
<line x1="36" x2="532" y1="114.0" y2="114.0" stroke="#e2e5ea" />
<text x="28" y="117.0" fontSize="8" textAnchor="end" fill="#555">150</text>
<line x1="36" x2="532" y1="64.0" y2="64.0" stroke="#e2e5ea" />
<text x="28" y="67.0" fontSize="8" textAnchor="end" fill="#555">225</text>
<line x1="36" x2="532" y1="14.0" y2="14.0" stroke="#e2e5ea" />
<text x="28" y="17.0" fontSize="8" textAnchor="end" fill="#555">300</text>
<text x="36.0" y="232" fontSize="8" textAnchor="middle" fill="#555">2013</text>
<text x="118.7" y="232" fontSize="8" textAnchor="middle" fill="#555">2014</text>
<text x="201.3" y="232" fontSize="8" textAnchor="middle" fill="#555">2015</text>
<text x="284.0" y="232" fontSize="8" textAnchor="middle" fill="#555">2016</text>
<text x="366.7" y="232" fontSize="8" textAnchor="middle" fill="#555">2017</text>
<text x="449.3" y="232" fontSize="8" textAnchor="middle" fill="#555">2018</text>
<text x="532.0" y="232" fontSize="8" textAnchor="middle" fill="#555">2019</text>
<path d="M36.0,174.0 C49.8,169.6 91.1,167.3 118.7,147.3 C146.2,127.3 173.8,56.2 201.3,54.0 C228.9,51.8 256.4,116.2 284.0,134.0 C311.6,151.8 339.1,158.4 366.7,160.7 C394.2,162.9 421.8,171.8 449.3,147.3 C476.9,122.9 518.2,36.2 532.0,14.0 L532.0,214.0 L36.0,214.0 Z" fill="#4a76a8" fillOpacity=".6" />
<path d="M36.0,174.0 C49.8,169.6 91.1,167.3 118.7,147.3 C146.2,127.3 173.8,56.2 201.3,54.0 C228.9,51.8 256.4,116.2 284.0,134.0 C311.6,151.8 339.1,158.4 366.7,160.7 C394.2,162.9 421.8,171.8 449.3,147.3 C476.9,122.9 518.2,36.2 532.0,14.0" fill="none" stroke="#12306b" strokeWidth="1.6" />
<circle cx="36.0" cy="174.0" r="2.6" fill="#12306b" />
<circle cx="118.7" cy="147.3" r="2.6" fill="#12306b" />
<circle cx="201.3" cy="54.0" r="2.6" fill="#12306b" />
<circle cx="284.0" cy="134.0" r="2.6" fill="#12306b" />
<circle cx="366.7" cy="160.7" r="2.6" fill="#12306b" />
<circle cx="449.3" cy="147.3" r="2.6" fill="#12306b" />
<circle cx="532.0" cy="14.0" r="2.6" fill="#12306b" />
</svg>
          </div></div>
          <div className="card"><h2>Status</h2><div className="pad">
<svg viewBox="0 0 540 240" width="100%" role="img" style={{ display: "block" }}>
<line x1="36" x2="532" y1="214.0" y2="214.0" stroke="#e2e5ea" />
<text x="28" y="217.0" fontSize="8" textAnchor="end" fill="#555">0</text>
<line x1="36" x2="532" y1="164.0" y2="164.0" stroke="#e2e5ea" />
<text x="28" y="167.0" fontSize="8" textAnchor="end" fill="#555">50</text>
<line x1="36" x2="532" y1="114.0" y2="114.0" stroke="#e2e5ea" />
<text x="28" y="117.0" fontSize="8" textAnchor="end" fill="#555">100</text>
<line x1="36" x2="532" y1="64.0" y2="64.0" stroke="#e2e5ea" />
<text x="28" y="67.0" fontSize="8" textAnchor="end" fill="#555">150</text>
<line x1="36" x2="532" y1="14.0" y2="14.0" stroke="#e2e5ea" />
<text x="28" y="17.0" fontSize="8" textAnchor="end" fill="#555">200</text>
<text x="36.0" y="232" fontSize="8" textAnchor="middle" fill="#555">2015</text>
<text x="160.0" y="232" fontSize="8" textAnchor="middle" fill="#555">2016</text>
<text x="284.0" y="232" fontSize="8" textAnchor="middle" fill="#555">2017</text>
<text x="408.0" y="232" fontSize="8" textAnchor="middle" fill="#555">2018</text>
<text x="532.0" y="232" fontSize="8" textAnchor="middle" fill="#555">2019</text>
<path d="M36.0,114.0 C56.7,127.3 118.7,192.3 160.0,194.0 C201.3,195.7 242.7,129.0 284.0,124.0 C325.3,119.0 366.7,169.0 408.0,164.0 C449.3,159.0 511.3,105.7 532.0,94.0" fill="none" stroke="#2f5d8f" strokeWidth="1.6" />
<circle cx="36.0" cy="114.0" r="2.6" fill="#12306b" />
<circle cx="160.0" cy="194.0" r="2.6" fill="#12306b" />
<circle cx="284.0" cy="124.0" r="2.6" fill="#12306b" />
<circle cx="408.0" cy="164.0" r="2.6" fill="#12306b" />
<circle cx="532.0" cy="94.0" r="2.6" fill="#12306b" />
<path d="M36.0,184.0 C56.7,179.0 118.7,169.0 160.0,154.0 C201.3,139.0 242.7,97.3 284.0,94.0 C325.3,90.7 366.7,139.0 408.0,134.0 C449.3,129.0 511.3,75.7 532.0,64.0" fill="none" stroke="#f59e0b" strokeWidth="1.6" />
<circle cx="36.0" cy="184.0" r="2.6" fill="#f59e0b" />
<circle cx="160.0" cy="154.0" r="2.6" fill="#f59e0b" />
<circle cx="284.0" cy="94.0" r="2.6" fill="#f59e0b" />
<circle cx="408.0" cy="134.0" r="2.6" fill="#f59e0b" />
<circle cx="532.0" cy="64.0" r="2.6" fill="#f59e0b" />
</svg>
          </div></div>
        </section>

        <section className="two">
          <div className="card">
            <h2>Doctors List</h2>
            <table>
              <thead><tr><th>Doctor Name</th><th>Speciality</th><th>Earned</th><th>Reviews</th></tr></thead>
              <tbody>
<tr><td><span className="mini">R</span>Dr. Ruby Perrin</td><td>Dental</td><td>$3200.00</td><td className="stars">★★★★<em>★</em></td></tr>
<tr><td><span className="mini">D</span>Dr. Darren Elder</td><td>Dental</td><td>$3100.00</td><td className="stars">★★★★★<em></em></td></tr>
<tr><td><span className="mini">D</span>Dr. Deborah Angel</td><td>Cardiology</td><td>$4000.00</td><td className="stars">★★★<em>★★</em></td></tr>
<tr><td><span className="mini">S</span>Dr. Sofia Brient</td><td>Urology</td><td>$3700.00</td><td className="stars">★★★★★<em></em></td></tr>
<tr><td><span className="mini">M</span>Dr. Marvin Campbell</td><td>Orthopaedics</td><td>$2900.00</td><td className="stars">★★★★<em>★</em></td></tr>
              </tbody>
            </table>
          </div>
          <div className="card">
            <h2>Patients List</h2>
            <table>
              <thead><tr><th>Patient Name</th><th>Phone</th><th>Last Visit</th><th>Paid</th></tr></thead>
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
}
  </>;
};
