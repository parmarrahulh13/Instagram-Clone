import "./Reels.css";
import Reel from "./assets/Reel.js";
import reeldata from "./assets/reeldata.js";
import { useRef } from "react";

function Reels() {
  const videoRef = useRef(null);
  const handleVideoClick = (event) => {
  const video = event.target;

  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
};

  return (
    <div className="reels-page">
      <div className="account-details">
        {Reel.map((item, index) => (
          <div className="reel-items" key={index}>
            <i className={item.icon}></i>
            <p>{item.text}</p>
          </div>
        ))}
      </div>

      <div className="reel-video">
        {reeldata.map((item, index) => (
          <div className="reel" key={index}>
            <video
  className="video"
  src={item.video}
  autoPlay
  loop
  // muted
  playsInline
  onClick={handleVideoClick}
/>
          </div>
        ))}
      </div>

      <div className="reel-actions"></div>
    </div>
  );
}

export default Reels;
