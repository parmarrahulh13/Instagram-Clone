import "./Reels.css";
import reeldata from "./assets/reeldata.js";
import { useEffect, useRef } from "react";

function Reels({ setActivePage }) {
  const videoRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;

          if (entry.isIntersecting) {
            // Stop every other video
            videoRefs.current.forEach((otherVideo) => {
              if (otherVideo && otherVideo !== video) {
                otherVideo.pause();
              }
            });

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
    const video = event.currentTarget;

    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  // Open the reel creator's profile
  const openProfile = () => {
    setActivePage("UserProfile");
  };

  return (
    <div className="reels-page">

      <div className="reel-video">

        {reeldata.map((item, index) => (
          <div className="reel" key={index}>

            {/* LEFT SIDE */}
            <div className="reel-info">

              <div className="user-info">

                {/* PROFILE PICTURE */}
                <div
                  className="profile-picture"
                  onClick={openProfile}
                >
                  <i className="fa-solid fa-user"></i>
                </div>

                {/* USERNAME */}
                <strong
                  className="reel-username"
                  onClick={openProfile}
                >
                  kxanime_45
                </strong>

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

              <button className="sound-button">
                <i className="fa-solid fa-volume-high"></i>
              </button>

            </div>


            {/* RIGHT SIDE */}
            <div className="reel-actions">

              <div className="action">
                <i className="fa-regular fa-heart"></i>
                <span>2,508</span>
              </div>

              <div className="action">
                <i className="fa-regular fa-comment"></i>
                <span>24</span>
              </div>

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
              </div>

              {/* SMALL PROFILE */}
              <div
                className="action-profile"
                onClick={openProfile}
              >
                <div className="small-profile">
                  <i className="fa-solid fa-user"></i>
                </div>
              </div>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Reels;