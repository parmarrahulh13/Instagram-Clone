
import "./Sidebar.css";

function Sidebar({
  activePage,
  setActivePage,
  setMoreOpen,
}) {
  const menuItems = [
    {
      name: "Home",
      icon: "fa-house",
    },
    {
      name: "Reels",
      icon: "fa-clapperboard",
    },
    {
      name: "Messages",
      icon: "fa-facebook-messenger",
    },
    {
      name: "Search",
      icon: "fa-magnifying-glass",
    },
    {
      name: "Notifications",
      icon: "fa-heart",
    },
    {
      name: "Create",
      icon: "fa-square-plus",
    },
    {
      name: "Profile",
      icon: "fa-circle-user",
    },
  ];

  return (
    <aside className="sidebar">
      {/* INSTAGRAM LOGO */}
      <div className="website-icon">
        <i className="fa-brands fa-instagram"></i>
        <span>Instagram</span>
      </div>

      {/* MAIN MENU */}
      <div className="sidebar-menu">
        {menuItems.map((item) => (
          <div
            key={item.name}
            className={`menu-item ${
              activePage === item.name ? "active" : ""
            }`}
            onClick={() => setActivePage(item.name)}
          >
            <i className={`fa-solid ${item.icon}`}></i>
            <p>{item.name}</p>
          </div>
        ))}
      </div>

      {/* MORE MENU */}
      <div className="more">
        <div
          className="menu-item"
          onClick={() => setMoreOpen((previous) => !previous)}
        >
          <i className="fa-solid fa-bars"></i>
          <p>More</p>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;

