const PageLayout = () => {
  return (
    <>
      <aside className={`dc-side${sidebarOpen ? " mobile-open" : ""}`}>
        <NavItem icon="home" href="/">
          Dashboard
        </NavItem>
      </aside>
    </>
  );
};

export default PageLayout;
