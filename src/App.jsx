import { useState } from "react";

import Sidebar from "./Sidebar";
import Reels from "./Reels";
import Profile from "./Profile";

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

        {activePage === "Reels" && <Reels />}

        {activePage === "Profile" && <Profile />}

        {activePage === "Home" && (
          <div className="placeholder-page">
            <h1>Home</h1>
            <p>Your Instagram feed will appear here.</p>
          </div>
        )}

        {activePage === "Search" && (
          <div className="placeholder-page">
            <h1>Search</h1>
            <p>Search will appear here.</p>
          </div>
        )}

        {activePage === "Messages" && (
          <div className="placeholder-page">
            <h1>Messages</h1>
            <p>Your messages will appear here.</p>
          </div>
        )}

        {activePage === "Notifications" && (
          <div className="placeholder-page">
            <h1>Notifications</h1>
            <p>Your notifications will appear here.</p>
          </div>
        )}

        {activePage === "Create" && (
          <div className="placeholder-page">
            <h1>Create</h1>
            <p>Create a new post or reel.</p>
          </div>
        )}

      </main>

    </div>
  );
}

export default App;