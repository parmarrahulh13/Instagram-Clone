import "./Sidebar.css";

function Sidebar() {
  const menu = [
    {
      icon: "fa-solid fa-house",
      text: "Home",
    },
    {
      icon: "fa-solid fa-magnifying-glass",
      text: "Search",
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
    <div className="sidebar">
      <div className="website-icon">
        <i className="fa-brands fa-instagram"></i>
        
      </div>

      {menu.map((item, index) => (
        <div className="menu-item" key={index}>
          <i className={item.icon}></i>
          <p>{item.text}</p>
        </div>
      ))}

      <div className="menu-item">
        <i className="fa-solid fa-bars"></i>
        <p>More</p>
      </div>
    </div>
  );
}

export default Sidebar;