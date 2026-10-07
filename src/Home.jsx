import { useState } from "react";
import "./Home.css";

function Home() {
  const [likedPosts, setLikedPosts] = useState({});
  const [savedPosts, setSavedPosts] = useState({});
  const [comments, setComments] = useState({});

  const stories = [
    {
      id: 1,
      username: "your_story",
      image: "https://i.pravatar.cc/150?img=12",
      own: true,
    },
    {
      id: 2,
      username: "alexmorgan",
      image: "https://i.pravatar.cc/150?img=12",
    },
    {
      id: 3,
      username: "sarah",
      image: "https://i.pravatar.cc/150?img=32",
    },
    {
      id: 4,
      username: "john_dev",
      image: "https://i.pravatar.cc/150?img=14",
    },
    {
      id: 5,
      username: "emma",
      image: "https://i.pravatar.cc/150?img=47",
    },
    {
      id: 6,
      username: "mike",
      image: "https://i.pravatar.cc/150?img=11",
    },
    {
      id: 7,
      username: "olivia",
      image: "https://i.pravatar.cc/150?img=45",
    },
  ];

  const posts = [
    {
      id: 1,
      username: "alexmorgan",
      name: "Alex Morgan",
      profile:
        "https://i.pravatar.cc/150?img=12",
      location: "New York, USA",
      image:
        "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=900&q=80",
      likes: 128,
      caption:
        "Somewhere between dreams and reality. ✨",
      time: "2 HOURS AGO",
    },
    {
      id: 2,
      username: "sarah",
      name: "Sarah Wilson",
      profile:
        "https://i.pravatar.cc/150?img=32",
      location: "California",
      image:
        "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=80",
      likes: 243,
      caption:
        "Weekend mood 🌿",
      time: "5 HOURS AGO",
    },
    {
      id: 3,
      username: "john_dev",
      name: "John Developer",
      profile:
        "https://i.pravatar.cc/150?img=14",
      location: "Ahmedabad, India",
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80",
      likes: 89,
      caption:
        "Building something new. 💻",
      time: "1 DAY AGO",
    },
  ];

  const suggestions = [
    {
      username: "rahul_codes",
      name: "Rahul Codes",
      image: "https://i.pravatar.cc/150?img=5",
    },
    {
      username: "design_daily",
      name: "Design Daily",
      image: "https://i.pravatar.cc/150?img=20",
    },
    {
      username: "react_world",
      name: "React World",
      image: "https://i.pravatar.cc/150?img=33",
    },
    {
      username: "developerhub",
      name: "Developer Hub",
      image: "https://i.pravatar.cc/150?img=51",
    },
  ];

  const toggleLike = (id) => {
    setLikedPosts((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const toggleSave = (id) => {
    setSavedPosts((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleComment = (id) => {
    if (!comments[id]?.trim()) return;

    alert(`Comment added: ${comments[id]}`);

    setComments((prev) => ({
      ...prev,
      [id]: "",
    }));
  };

  return (
    <div className="home-page">

      {/* =========================
          MAIN FEED
      ========================== */}

      <main className="home-feed">

        {/* STORIES */}
        <div className="stories-container">
          {stories.map((story) => (
            <div className="story" key={story.id}>

              <div
                className={`story-ring ${
                  story.own ? "own-story" : ""
                }`}
              >
                <img
                  src={story.image}
                  alt={story.username}
                />

                {story.own && (
                  <span className="story-plus">+</span>
                )}
              </div>

              <span>{story.username}</span>
            </div>
          ))}
        </div>


        {/* POSTS */}
        <div className="posts-container">

          {posts.map((post) => (
            <article className="post" key={post.id}>

              {/* POST HEADER */}
              <div className="post-header">

                <div className="post-user">

                  <img
                    src={post.profile}
                    alt={post.username}
                  />

                  <div>
                    <strong>{post.username}</strong>

                    <span>
                      {post.location}
                    </span>
                  </div>

                </div>

                <button className="more-btn">
                  •••
                </button>

              </div>


              {/* POST IMAGE */}
              <div className="post-image-container">

                <img
                  className="post-image"
                  src={post.image}
                  alt="Post"
                />

              </div>


              {/* ACTIONS */}
              <div className="post-actions">

                <div className="left-actions">

                  <button
                    className={`action-btn ${
                      likedPosts[post.id]
                        ? "liked"
                        : ""
                    }`}
                    onClick={() =>
                      toggleLike(post.id)
                    }
                  >
                    {likedPosts[post.id]
                      ? "♥"
                      : "♡"}
                  </button>

                  <button className="action-btn">
                    ♡
                  </button>

                  <button className="action-btn">
                    ➤
                  </button>

                </div>

                <button
                  className={`save-btn ${
                    savedPosts[post.id]
                      ? "saved"
                      : ""
                  }`}
                  onClick={() =>
                    toggleSave(post.id)
                  }
                >
                  {savedPosts[post.id]
                    ? "🔖"
                    : "▱"}
                </button>

              </div>


              {/* LIKES */}
              <div className="post-likes">

                {post.likes +
                  (likedPosts[post.id] ? 1 : 0)}{" "}
                likes

              </div>


              {/* CAPTION */}
              <div className="post-caption">

                <strong>
                  {post.username}
                </strong>{" "}

                {post.caption}

              </div>


              {/* COMMENTS */}
              <button className="view-comments">
                View all 12 comments
              </button>


              {/* COMMENT INPUT */}
              <div className="comment-box">

                <span>☺</span>

                <input
                  type="text"
                  placeholder="Add a comment..."
                  value={comments[post.id] || ""}
                  onChange={(e) =>
                    setComments((prev) => ({
                      ...prev,
                      [post.id]: e.target.value,
                    }))
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleComment(post.id);
                    }
                  }}
                />

                {comments[post.id] && (
                  <button
                    onClick={() =>
                      handleComment(post.id)
                    }
                  >
                    Post
                  </button>
                )}

              </div>


              <div className="post-time">
                {post.time}
              </div>

            </article>
          ))}

        </div>

      </main>


      {/* =========================
          RIGHT SIDEBAR
      ========================== */}

      <aside className="home-right">

        {/* CURRENT USER */}
        <div className="current-user">

          <img
            src="https://i.pravatar.cc/150?img=12"
            alt="Rahul"
          />

          <div className="current-user-info">
            <strong>rahulparmar.cs</strong>
            <span>Rahul Parmar</span>
          </div>

          <button>Switch</button>

        </div>


        {/* SUGGESTIONS HEADER */}
        <div className="suggestions-header">

          <span>Suggested for you</span>

          <button>See All</button>

        </div>


        {/* SUGGESTIONS */}
        <div className="suggestions-list">

          {suggestions.map((user) => (
            <div
              className="suggestion"
              key={user.username}
            >

              <img
                src={user.image}
                alt={user.username}
              />

              <div className="suggestion-info">

                <strong>
                  {user.username}
                </strong>

                <span>
                  Suggested for you
                </span>

              </div>

              <button>
                Follow
              </button>

            </div>
          ))}

        </div>


        {/* FOOTER */}
        <div className="home-footer">

          <p>
            About · Help · Press · API · Jobs ·
            Privacy · Terms
          </p>

          <p>
            Locations · Language · Meta Verified
          </p>

          <span>
            © 2026 INSTAGRAM CLONE
          </span>

        </div>

      </aside>

    </div>
  );
}

export default Home;