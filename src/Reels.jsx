import "./Reels.css";
import Reel from "./assets/Reel.js";
import reeldata from "./assets/reeldata.js";
import { useEffect, useRef } from "react";

function Reels() {
  const videoRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;

          if (entry.isIntersecting) {
            video.play();
          } else {
            video.pause();
          }
        });
      },
      {
        threshold: 0.7,
      }
    );

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => observer.disconnect();
  }, []);

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
              ref={(video) => (videoRefs.current[index] = video)}
              className="video"
              src={item.video}
              loop
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