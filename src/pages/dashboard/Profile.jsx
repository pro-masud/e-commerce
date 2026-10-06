import { Link } from "react-router-dom";
import "./dashboard.css";

export const Profile = () => (
  <div className="dc">
    <header className="dc-top">
      <div className="dc-logo">
        <span>DOC</span>
        <span className="c">CURE</span>
      </div>
      <Link className="profile-back-link" to="/">
        Back to Dashboard
      </Link>
    </header>

    <main className="dc-main profile-main">
      <h1>My Profile</h1>
      <div className="crumb">Account information</div>
      <section className="card profile-card">
        <div className="profile-heading">
          <span className="av profile-avatar">A</span>
          <div>
            <h2>Admin</h2>
            <p>Administrator</p>
          </div>
        </div>
        <dl className="profile-details">
          <div>
            <dt>Name</dt>
            <dd>Admin</dd>
          </div>
          <div>
            <dt>Role</dt>
            <dd>Administrator</dd>
          </div>
        </dl>
      </section>
    </main>
  </div>
);
