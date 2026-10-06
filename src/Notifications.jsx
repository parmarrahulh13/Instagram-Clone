
import "./Notifications.css";

function Notifications({ onClose }) {
  const notifications = [
    {
      id: 1,
      username: "taha._niat",
      text: "liked your story.",
      time: "4d",
      image: "https://i.pravatar.cc/150?img=12",
      type: "story",
      post: "https://picsum.photos/80/80?random=10",
    },
    {
      id: 2,
      username: "harsh_dhadhal_1",
      text: "started following you.",
      time: "6d",
      image: "https://i.pravatar.cc/150?img=15",
      type: "follow",
    },
    {
      id: 3,
      username: "khus_hi0615",
      text: "started following you.",
      time: "Sep 29",
      image: "https://i.pravatar.cc/150?img=32",
      type: "following",
    },
    {
      id: 4,
      username: "mahendra_parmar_305",
      text: "started following you.",
      time: "Sep 29",
      image: "https://i.pravatar.cc/150?img=5",
      type: "following",
    },
    {
      id: 5,
      username: "cyborggirlcyborggirl",
      text: "replied to your comment on cyborggirl's post: Sent you a message! Check it out!",
      time: "Sep 21",
      image: "https://i.pravatar.cc/150?img=44",
      type: "comment",
      post: "https://picsum.photos/80/80?random=15",
    },
    {
      id: 6,
      username: "avani.codesavani.codes",
      text: "replied to your comment on avani.codes's post: Got it, check your inbox!",
      time: "Sep 20",
      image: "https://i.pravatar.cc/150?img=47",
      type: "comment",
      post: "https://picsum.photos/80/80?random=16",
    },
  ];

  return (
    <>
      {/* DARK BACKDROP */}
      <div
        className="notification-overlay"
        onClick={onClose}
      ></div>

      {/* NOTIFICATION PANEL */}
      <aside
        className="notification-panel"
        onClick={(e) => e.stopPropagation()}
      >
        {/* HEADER */}
        <div className="notification-top">
          <h1>Notifications</h1>

          <button
            type="button"
            className="notification-close"
            onClick={onClose}
            aria-label="Close notifications"
          >
            ×
          </button>
        </div>

        {/* FILTERS */}
        <div className="notification-filters">
          <button className="filter active">All</button>
          <button className="filter">People you follow</button>
          <button className="filter">Comments</button>
          <button className="filter">Follows</button>
        </div>

        {/* THIS WEEK */}
        <div className="notification-section">
          <h2>This week</h2>

          {notifications.slice(0, 2).map((item) => (
            <NotificationItem
              key={item.id}
              item={item}
            />
          ))}
        </div>

        {/* THIS MONTH */}
        <div className="notification-section">
          <h2>This month</h2>

          {notifications.slice(2).map((item) => (
            <NotificationItem
              key={item.id}
              item={item}
            />
          ))}
        </div>
      </aside>
    </>
  );
}

function NotificationItem({ item }) {
  return (
    <div className="notification-item">

      <img
        className="notification-avatar"
        src={item.image}
        alt=""
      />

      <div className="notification-message">
        <div className="notification-text">
          <strong>{item.username}</strong>{" "}
          <span>{item.text}</span>
          <small>{item.time}</small>
        </div>
      </div>

      {item.type === "follow" && (
        <button className="follow-back">
          Follow Back
        </button>
      )}

      {item.type === "following" && (
        <button className="following">
          Following
        </button>
      )}

      {(item.type === "story" || item.type === "comment") && (
        <img
          className="notification-post"
          src={item.post}
          alt=""
        />
      )}
    </div>
  );
}

export default Notifications;

