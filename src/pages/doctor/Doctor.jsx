const Doctor = () => {
  return (
    <>
      <div className="page-heading">
        <div>
          <div className="crumb">OVERVIEW / DOCTOR</div>
          <h1>
            Welcome back, Doctors <span aria-hidden="true">👋</span>
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

export default Doctor;
