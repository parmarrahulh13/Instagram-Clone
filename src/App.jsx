import { useState } from "react";

import Sidebar from "./Sidebar";
import Home from "./Home";
import Reels from "./Reels";
import Messages from "./Messages";
import Profile from "./Profile";
import Notifications from "./Notifications";

import "./App.css";

function App() {

  const [activePage, setActivePage] = useState("Home");

  return (
    <div className="app">

      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
      />

      {activePage === "Home" && <Home />}

      {activePage === "Reels" && <Reels />}

      {activePage === "Messages" && <Messages />}

      {activePage === "Profile" && <Profile />}

      {activePage === "Notifications" && (
        <Notifications />
      )}

    </div>
  );
}

export default App;