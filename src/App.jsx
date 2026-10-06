
import { useState } from "react";

import Sidebar from "./Sidebar";
import Reels from "./Reels";
import Profile from "./Profile";
import Messages from "./Messages";
import Notifications from "./Notifications";

import "./App.css";

function App() {
  const [activePage, setActivePage] = useState("Reels");

  // Controls Notifications popup
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  // Handle sidebar navigation
  const handlePageChange = (page) => {
    if (page === "Notifications") {
      setNotificationsOpen(true);
      return;
    }

    setNotificationsOpen(false);
    setActivePage(page);
  };

  return (
    <div className="app">

      {/* SIDEBAR */}
      <Sidebar
        activePage={activePage}
        setActivePage={handlePageChange}
      />

      {/* MAIN CONTENT */}
      <main className="main-content">

        {activePage === "Home" && (
          <div className="placeholder-page">
            <h1>Home</h1>
          </div>
        )}

        {activePage === "Reels" && (
          <Reels setActivePage={setActivePage} />
        )}

        {activePage === "Search" && (
          <div className="placeholder-page">
            <h1>Search</h1>
          </div>
        )}

        {activePage === "Messages" && (
          <Messages />
        )}

        {activePage === "Create" && (
          <div className="placeholder-page">
            <h1>Create</h1>
          </div>
        )}

        {activePage === "Profile" && (
          <Profile />
        )}

        {activePage === "UserProfile" && (
          <Profile />
        )}

      </main>

      {/* NOTIFICATIONS POPUP */}
      {notificationsOpen && (
        <Notifications
          onClose={() => setNotificationsOpen(false)}
        />
      )}

    </div>
  );
}

export default App;

