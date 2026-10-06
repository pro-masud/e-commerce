import "./login.css"; // same styles as the Login component

export const Register = () => {
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
          <form className="login-form">
            <h1 className="login-title">Register</h1>
            <p className="login-subtitle">Create your account</p>

            <input
              type="text"
              name="name"
              className="login-input"
              placeholder="Full name"
              autoComplete="name"
              aria-label="Full name"
            />

            <input
              type="email"
              name="email"
              className="login-input"
              placeholder="Email"
              autoComplete="email"
              aria-label="Email"
            />

            <input
              type="tel"
              name="phone"
              className="login-input"
              placeholder="Phone (optional)"
              autoComplete="tel"
              aria-label="Phone"
            />

            <input
              type="password"
              name="password"
              className="login-input"
              placeholder="Password"
              autoComplete="new-password"
              aria-label="Password"
            />

            <input
              type="password"
              name="confirmPassword"
              className="login-input"
              placeholder="Confirm password"
              autoComplete="new-password"
              aria-label="Confirm password"
            />

            <button type="submit" className="login-button">
              Register
            </button>

            <div className="login-divider">
              <span>OR</span>
            </div>

            <p className="login-register">
              Already have an account? <a href="/login">Login</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
