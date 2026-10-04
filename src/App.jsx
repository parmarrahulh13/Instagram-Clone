import { useState } from "react";

import Sidebar from "./Sidebar";
import Reels from "./Reels";
import Profile from "./Profile";
import Messages from "./Messages";

import "./App.css";

function App() {

  const [activePage, setActivePage] = useState("Reels");

  return (
    <div className="app">

      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
      />

      <main className="main-content">

        {activePage === "Reels" && (
          <Reels setActivePage={setActivePage} />
        )}

        {activePage === "Profile" && (
          <Profile />
        )}

        {activePage === "UserProfile" && (
          <Profile />
        )}

        {activePage === "Home" && (
          <div className="placeholder-page">
            <h1>Home</h1>
          </div>
        )}

        {activePage === "Search" && (
          <div className="placeholder-page">
            <h1>Search</h1>
          </div>
        )}

        {activePage === "Messages" && (
          <Messages />
        )}

        {activePage === "Notifications" && (
          <div className="placeholder-page">
            <h1>Notifications</h1>
          </div>
        )}

        {activePage === "Create" && (
          <div className="placeholder-page">
            <h1>Create</h1>
          </div>
        )}

      </main>

    </div>
  );
}

export default App;