import "./Reels.css";
import reeldata from "./assets/reeldata.js";
import messageData from "./messageData";
import { useState, useEffect, useRef } from "react";

function Reels({ setActivePage }) {
  const videoRefs = useRef([]);

  const [showShare, setShowShare] = useState(false);
  const [sentTo, setSentTo] = useState(null);
  const [shareReel, setShareReel] = useState(null);

  // =====================================
  // PLAY ONLY VISIBLE REEL
  // =====================================

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;

          if (entry.isIntersecting) {
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
      if (video) {
        observer.observe(video);
      }
    });

    return () => observer.disconnect();
  }, []);

  // =====================================
  // VIDEO CLICK
  // =====================================

  const handleVideoClick = (event) => {
    const video = event.currentTarget;

    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  // =====================================
  // PROFILE
  // =====================================

  const openProfile = () => {
    setActivePage("UserProfile");
  };

  // =====================================
  // OPEN SHARE
  // =====================================

  const openShare = (reel) => {
    setShareReel(reel);
    setShowShare(true);
    setSentTo(null);
  };

  // =====================================
  // CLOSE SHARE
  // =====================================

  const closeShare = () => {
    setShowShare(false);
    setSentTo(null);
    setShareReel(null);
  };

  // =====================================
  // SEND REEL TO USER
  // =====================================

  const sendReel = (user) => {
  if (!shareReel) return;

  const newReelMessage = {
    id: Date.now(),

    type: "reel",

    sender: "me",

    time: new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    }),

    reel: {
      video: shareReel.video,
      username: "kxanime_45",
      caption: "Winter Hit different ❄️✨",
    },
  };

  // Get existing shared reels
  const existingReels = JSON.parse(
    localStorage.getItem("sharedReels") || "{}"
  );

  // Add reel to this user's messages
  if (!existingReels[user.id]) {
    existingReels[user.id] = [];
  }

  existingReels[user.id].push(newReelMessage);

  // Save
  localStorage.setItem(
    "sharedReels",
    JSON.stringify(existingReels)
  );

  // Show Sent
  setSentTo(user.id);
};

  return (
    <div className="reels-page">

      <div className="reel-video">

        {reeldata.map((item, index) => (
          <div className="reel" key={index}>

            {/* =====================================
                LEFT SIDE
            ===================================== */}

            <div className="reel-info">

              <div className="user-info">

                <div
                  className="profile-picture"
                  onClick={openProfile}
                >
                  <i className="fa-solid fa-user"></i>
                </div>

                <strong
                  className="reel-username"
                  onClick={openProfile}
                >
                  kxanime_45
                </strong>

                <span>•</span>

                <button>
                  Follow
                </button>

              </div>

              <p>
                Winter Hit different ❄️✨ Edited by
                @kxanime_45
              </p>

              <div className="music">
                <i className="fa-solid fa-music"></i>
                <span>
                  Sia • Snowman
                </span>
              </div>

            </div>


            {/* =====================================
                VIDEO
            ===================================== */}

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


            {/* =====================================
                RIGHT ACTIONS
            ===================================== */}

            <div className="reel-actions">

              {/* LIKE */}
              <div className="action">
                <i className="fa-regular fa-heart"></i>
                <span>2,508</span>
              </div>


              {/* COMMENT */}
              <div className="action">
                <i className="fa-regular fa-comment"></i>
                <span>24</span>
              </div>


              {/* SHARE */}
              <button
                className="action share-action"
                onClick={() => openShare(item)}
              >
                <i className="fa-regular fa-paper-plane"></i>
                <span>2</span>
              </button>


              {/* SAVE */}
              <div className="action">
                <i className="fa-regular fa-bookmark"></i>
                <span>1</span>
              </div>


              {/* MORE */}
              <div className="action">
                <i className="fa-solid fa-ellipsis"></i>
              </div>


              {/* PROFILE */}
              <div
                className="action-profile"
                onClick={openProfile}
              >
                <div className="small-profile">
                  <i className="fa-solid fa-user"></i>
                </div>
              </div>

            </div>


            {/* =====================================
                SHARE POPUP
            ===================================== */}

            {showShare && (
              <div
                className="share-overlay"
                onClick={closeShare}
              >

                <div
                  className="share-box"
                  onClick={(e) => e.stopPropagation()}
                >

                  {/* HEADER */}

                  <div className="share-header">

                    <h2>
                      Share
                    </h2>

                    <button onClick={closeShare}>
                      <i className="fa-solid fa-xmark"></i>
                    </button>

                  </div>


                  {/* SEARCH */}

                  <div className="share-search">

                    <i className="fa-solid fa-magnifying-glass"></i>

                    <input
                      type="text"
                      placeholder="Search"
                    />

                  </div>


                  {/* PEOPLE */}

                  <div className="share-users">

                    {messageData.map((user) => (

                      <div
                        className="share-user"
                        key={user.id}
                      >

                        <img
                          src={user.image}
                          alt={user.name}
                        />


                        <div className="share-user-info">

                          <strong>
                            {user.username}
                          </strong>

                          <span>
                            {user.name}
                          </span>

                        </div>


                        {/* SEND BUTTON */}

                        <button
                          className={
                            sentTo === user.id
                              ? "send-button sent"
                              : "send-button"
                          }
                          onClick={() => sendReel(user)}
                        >
                          {sentTo === user.id
                            ? "Sent"
                            : "Send"}
                        </button>

                      </div>

                    ))}

                  </div>

                </div>

              </div>
            )}

          </div>
        ))}

      </div>

    </div>
  );
}

export default Reels;