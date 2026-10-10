
import { useEffect, useRef, useState } from "react";
import "./More.css";

function More({ onClose, setActivePage }) {
  const menuRef = useRef(null);
  const [darkMode, setDarkMode] = useState(true);
  const [showSettings, setShowSettings] = useState(false);
  const [message, setMessage] = useState("");

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        onClose();
      }
    }

    function handleEscape(event) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  // Toggle dark and light mode
  function toggleAppearance() {
    const newMode = !darkMode;
    setDarkMode(newMode);

    document.body.classList.toggle("light-mode", !newMode);

    setMessage(newMode ? "Dark mode enabled" : "Light mode enabled");
  }

  // Handle menu actions
  function handleAction(action) {
    switch (action) {
      case "Settings":
        setShowSettings(!showSettings);
        setMessage("");
        break;

      case "Your activity":
        setActivePage("Your activity");
        onClose();
        break;

      case "Saved":
        setActivePage("Saved");
        onClose();
        break;

      case "Switch accounts":
        setMessage("Account switching is coming soon.");
        break;

      case "Log out":
        if (window.confirm("Are you sure you want to log out?")) {
          setMessage("Logout requires authentication to be configured.");
        }
        break;

      case "Report a problem":
        setMessage("Please describe the problem you encountered.");
        break;

      default:
        break;
    }
  }

  return (
    <div className="more-menu" ref={menuRef}>
      <div className="more-header">
        <h2>More</h2>

        <button
          className="more-close"
          onClick={onClose}
          aria-label="Close menu"
        >
          ×
        </button>
      </div>

      <div className="more-menu-items">
        <button
          className="more-item"
          onClick={() => handleAction("Settings")}
        >
          <i className="fa-solid fa-gear"></i>
          <span>Settings</span>
          <i className="fa-solid fa-chevron-right more-arrow"></i>
        </button>

        {showSettings && (
          <div className="more-settings">
            <button onClick={toggleAppearance}>
              <i className="fa-solid fa-moon"></i>
              Appearance: {darkMode ? "Dark" : "Light"}
            </button>

            <button onClick={() => setMessage("Privacy settings selected.")}>
              <i className="fa-solid fa-lock"></i>
              Privacy
            </button>

            <button onClick={() => setMessage("Notification settings selected.")}>
              <i className="fa-solid fa-bell"></i>
              Notifications
            </button>
          </div>
        )}

        <button
          className="more-item"
          onClick={() => handleAction("Your activity")}
        >
          <i className="fa-solid fa-chart-line"></i>
          <span>Your activity</span>
        </button>

        <button
          className="more-item"
          onClick={() => handleAction("Saved")}
        >
          <i className="fa-regular fa-bookmark"></i>
          <span>Saved</span>
        </button>

        <button className="more-item" onClick={toggleAppearance}>
          <i className="fa-regular fa-moon"></i>
          <span>Switch appearance</span>
          <span className={`more-toggle ${darkMode ? "active" : ""}`}>
            <span></span>
          </span>
        </button>

        <button
          className="more-item"
          onClick={() => handleAction("Report a problem")}
        >
          <i className="fa-regular fa-circle-question"></i>
          <span>Report a problem</span>
        </button>

        <div className="more-divider"></div>

        <button
          className="more-item"
          onClick={() => handleAction("Switch accounts")}
        >
          <i className="fa-solid fa-users"></i>
          <span>Switch accounts</span>
        </button>

        <button
          className="more-item logout-item"
          onClick={() => handleAction("Log out")}
        >
          <i className="fa-solid fa-right-from-bracket"></i>
          <span>Log out</span>
        </button>
      </div>

      {message && (
        <div className="more-message">
          {message}
          <button onClick={() => setMessage("")}>×</button>
        </div>
      )}

      <div className="more-footer">
        <div className="more-footer-logo">
          <i className="fa-brands fa-instagram"></i>
        </div>
        <span>Instagram Clone</span>
        <small>More options</small>
      </div>
    </div>
  );
}

export default More;

