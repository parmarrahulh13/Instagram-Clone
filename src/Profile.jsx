import "./Profile.css";

function Profile() {
  return (

    <div className="profile-page">

      {/* =========================
          PROFILE HEADER
      ========================= */}

      <section className="profile-header">

        {/* DP */}

        <div className="profile-dp">

          <div className="dp-inner">
            <i className="fa-solid fa-user"></i>
          </div>

        </div>


        {/* DETAILS */}

        <div className="profile-info">

          <div className="username-row">

            <h2>rahulparmar.cs</h2>

            <span className="verified">
              ✓
            </span>

            <i className="fa-solid fa-gear settings"></i>

          </div>


          <p className="profile-name">
            Rahul Parmar
          </p>


          <div className="profile-stats">

            <div>
              <strong>12</strong>
              <span>posts</span>
            </div>

            <div>
              <strong>101</strong>
              <span>followers</span>
            </div>

            <div>
              <strong>285</strong>
              <span>following</span>
            </div>

          </div>


          <div className="profile-bio">

            <strong>Rahul Parmar</strong>

            <p>
              Full Stack Developer 💻
              <br />
              Building. Learning. Creating. 🚀
              <br />
              React • JavaScript • MERN
            </p>

          </div>

        </div>

      </section>


      {/* =========================
          BUTTONS
      ========================= */}

      <div className="profile-buttons">

        <button>
          Edit profile
        </button>

        <button>
          View archive
        </button>

      </div>


      {/* =========================
          HIGHLIGHTS
      ========================= */}

      <section className="highlights">

        <div className="highlight">

          <div className="highlight-circle project">
            <i className="fa-solid fa-code"></i>
          </div>

          <span>Projects</span>

        </div>


        <div className="highlight">

          <div className="highlight-circle coding">
            <i className="fa-solid fa-laptop-code"></i>
          </div>

          <span>Coding</span>

        </div>


        <div className="highlight">

          <div className="highlight-circle college">
            <i className="fa-solid fa-graduation-cap"></i>
          </div>

          <span>College</span>

        </div>


        <div className="highlight">

          <div className="highlight-circle new">
            +
          </div>

          <span>New</span>

        </div>

      </section>


      {/* =========================
          TABS
      ========================= */}

      <div className="profile-tabs">

        <div className="profile-tab active">
          <i className="fa-solid fa-table-cells"></i>
        </div>

        <div className="profile-tab">
          <i className="fa-regular fa-bookmark"></i>
        </div>

        <div className="profile-tab">
          <i className="fa-solid fa-repeat"></i>
        </div>

        <div className="profile-tab">
          <i className="fa-regular fa-id-badge"></i>
        </div>

      </div>


      {/* =========================
          EMPTY POSTS
      ========================= */}

      <div className="empty-posts">

        <div className="empty-post-icon">
          <i className="fa-solid fa-camera"></i>
        </div>

        <h2>No posts yet</h2>

        <p>
          When you share photos and videos,
          they'll appear here.
        </p>

      </div>

    </div>

  );
}

export default Profile;