const User = () => {
  return (
    <>
      <div className="page-heading">
        <div>
          <div className="crumb">OVERVIEW / DASHBOARD</div>
          <h1>
            Welcome back, Users <span aria-hidden="true">👋</span>
          </h1>
          <p>Here&apos;s what&apos;s happening at your clinic today.</p>
        </div>
        <div className="date-chip">
          <span className="date-dot" />
          Clinic overview
        </div>
      </div>
    </>
  );
};

export default User;
