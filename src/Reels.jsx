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
            video.play().catch(() => {});
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

      <div className="reel-video">

        {reeldata.map((item, index) => (
          <div className="reel" key={index}>

            {/* LEFT SIDE - USER / CAPTION / MUSIC */}
            <div className="reel-info">

              <div className="user-info">
                <div className="profile-picture"></div>

                <strong>kxanime_45</strong>

                <span>•</span>

                <button>Follow</button>
              </div>

              <p>
                Winter Hit different ❄️✨ Edited by
                @kxanime_45
              </p>

              <div className="music">
                <i className="fa-solid fa-music"></i>
                <span>Sia • Snowman</span>
              </div>

            </div>


            {/* CENTER - VIDEO */}
            <div className="video-container">

              <video
                ref={(video) => {
                  videoRefs.current[index] = video;
                }}
                className="video"
                src={item.video}
                loop
                playsInline
                onClick={handleVideoClick}
              />

              {/* SOUND BUTTON */}
              <button className="sound-button">
                <i className="fa-solid fa-volume-high"></i>
              </button>

            </div>


            {/* RIGHT SIDE - ACTIONS */}
            <div className="reel-actions">

              <div className="action">
                <i className="fa-regular fa-heart"></i>
                <span>2,508</span>
              </div>

              <div className="action">
                <i className="fa-regular fa-comment"></i>
                <span>24</span>
              </div>

              {/* <div className="action">
                <i className="fa-solid fa-retweet"></i>
                <span>92</span>
              </div> */}

              <div className="action">
                <i className="fa-regular fa-paper-plane"></i>
                <span>2</span>
              </div>

              <div className="action">
                <i className="fa-regular fa-bookmark"></i>
                <span>1</span>
              </div>

              <div className="action">
                <i className="fa-solid fa-ellipsis"></i>
                <span></span>
              </div>

              <div className="action-profile">
                <div className="small-profile"></div>
                <span></span>
              </div>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Reels;