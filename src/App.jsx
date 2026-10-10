
import { useState } from "react";

import Sidebar from "./Sidebar";
import Home from "./Home";
import Reels from "./Reels";
import Messages from "./Messages";
import Profile from "./Profile";
import Notifications from "./Notifications";
import Search from "./Search";
import Create from "./Create";
import More from "./More";

import "./App.css";

function App() {
  // Current active page
  const [activePage, setActivePage] = useState("Home");

  // Popup states
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  // Handle sidebar navigation
  const handlePageChange = (page) => {
    if (page === "Notifications") {
      setNotificationsOpen((prev) => !prev);
      setMoreOpen(false);
      return;
    }

    if (page === "More") {
      setMoreOpen((prev) => !prev);
      setNotificationsOpen(false);
      return;
    }

    // Navigate to the selected page
    setActivePage(page);

    // Close popups when navigating
    setNotificationsOpen(false);
    setMoreOpen(false);
  };

  return (
    <div className="app">
      {/* SIDEBAR — Render only once */}
      <Sidebar
        activePage={activePage}
        setActivePage={handlePageChange}
        setMoreOpen={setMoreOpen}
      />

      {/* HOME */}
      {activePage === "Home" && <Home />}

      {/* REELS */}
      {activePage === "Reels" && <Reels />}

      {/* MESSAGES */}
      {activePage === "Messages" && <Messages />}

      {/* PROFILE */}
      {activePage === "Profile" && <Profile />}

      {/* SEARCH */}
      {activePage === "Search" && <Search />}

      {/* CREATE */}
      {activePage === "Create" && <Create />}

      {/* NOTIFICATIONS POPUP */}
      {notificationsOpen && (
        <Notifications
          onClose={() => setNotificationsOpen(false)}
        />
      )}

      {/* MORE POPUP */}
      {moreOpen && (
        <More
          onClose={() => setMoreOpen(false)}
          setActivePage={handlePageChange}
        />
      )}
    </div>
  );
}

export default App;

