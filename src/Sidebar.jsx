import "./Sidebar.css";

function Sidebar({ activePage, setActivePage }) {
  const menu = [
    {
      icon: "fa-solid fa-house",
      text: "Home",
    },
    {
      icon: "fa-solid fa-clapperboard",
      text: "Reels",
    },
    {
      icon: "fa-regular fa-paper-plane",
      text: "Messages",
    },
    {
      icon: "fa-solid fa-magnifying-glass",
      text: "Search",
    },

    {
      icon: "fa-regular fa-heart",
      text: "Notifications",
    },
    {
      icon: "fa-solid fa-plus",
      text: "Create",
    },
    {
      icon: "fa-solid fa-circle-user",
      text: "Profile",
    },
  ];

  return (
    <aside className="sidebar">
      <div className="website-icon">
        <i className="fa-brands fa-instagram"></i>
        <span>Instagram</span>
      </div>

      <nav className="sidebar-menu">
        {menu.map((item) => (
          <div
            key={item.text}
            className={`menu-item ${activePage === item.text ? "active" : ""}`}
            onClick={() => setActivePage(item.text)}
          >
            <i className={item.icon}></i>

            <p>{item.text}</p>
          </div>
        ))}
      </nav>

      <div className="more">
        <div className="menu-item">
          <i className="fa-solid fa-bars"></i>
          <p>More</p>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
