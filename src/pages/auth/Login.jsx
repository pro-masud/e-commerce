import { Link } from "react-router-dom";
import "./login.css";

export const Login = () => {
  return (
    <div className="login-page">
      <div className="login-card">
        {/* Left brand panel */}
        <div className="login-brand">
          <div className="login-logo">
            <span className="login-logo-text">DOCCURE</span>
            <svg
              className="login-logo-steth"
              viewBox="0 0 120 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M30 0 V8 C30 16 38 20 48 20 H96" />
              <circle cx="104" cy="20" r="5" />
            </svg>
          </div>
        </div>

        {/* Right form panel */}
        <div className="login-form-wrap">
          <form className="login-form" noValidate>
            <h1 className="login-title">Login</h1>
            <p className="login-subtitle">Access to our dashboard</p>

            <input
              type="email"
              className="login-input"
              placeholder="Email"
              autoComplete="email"
              aria-label="Email"
            />

            <input
              type="password"
              className="login-input"
              placeholder="Password"
              autoComplete="current-password"
              aria-label="Password"
            />

            <button type="submit" className="login-button">
              Login
            </button>

            <a href="/forgot-password" className="login-forgot">
              Forgot Password?
            </a>

            <div className="login-divider">
              <span>OR</span>
            </div>

            <p className="login-register">
              Don&apos;t have an account? <Link to="/register">Register</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
