import "./Messages.css";
import { useState } from "react";

function Messages() {
  // --------------------------------
  // ALL CONVERSATIONS
  // --------------------------------

  const [conversations, setConversations] = useState([
    {
      id: 1,
      name: "Alex Morgan",
      username: "alexmorgan",
      image: "https://i.pravatar.cc/150?img=12",
      lastMessage: "Hey, how are you?",
      time: "3h",
      online: true,
      unread: true,

      messages: [
        {
          id: 1,
          text: "Hey, how are you?",
          sender: "them",
          time: "10:40 AM",
        },
        {
          id: 2,
          text: "Hi Alex! 👋",
          sender: "me",
          time: "10:41 AM",
        },
        {
          id: 3,
          text: "I'm doing great. What about you?",
          sender: "me",
          time: "10:41 AM",
        },
        {
          id: 4,
          text: "I'm good! What are you working on?",
          sender: "them",
          time: "10:42 AM",
        },
        {
          id: 5,
          text: "Working on my Instagram clone 🔥",
          sender: "me",
          time: "10:43 AM",
        },
      ],
    },

    {
      id: 2,
      name: "Sarah Williams",
      username: "sarahw",
      image: "https://i.pravatar.cc/150?img=47",
      lastMessage: "That project looks amazing 🔥",
      time: "5h",
      online: false,
      unread: true,

      messages: [
        {
          id: 1,
          text: "Hey! I saw your project.",
          sender: "them",
          time: "9:20 AM",
        },
        {
          id: 2,
          text: "Really? 😄",
          sender: "me",
          time: "9:22 AM",
        },
        {
          id: 3,
          text: "That project looks amazing 🔥",
          sender: "them",
          time: "9:23 AM",
        },
      ],
    },

    {
      id: 3,
      name: "David Miller",
      username: "davidm",
      image: "https://i.pravatar.cc/150?img=11",
      lastMessage: "See you tomorrow!",
      time: "8h",
      online: true,
      unread: false,

      messages: [
        {
          id: 1,
          text: "Are you coming tomorrow?",
          sender: "them",
          time: "8:30 AM",
        },
        {
          id: 2,
          text: "Yeah, definitely.",
          sender: "me",
          time: "8:35 AM",
        },
        {
          id: 3,
          text: "See you tomorrow!",
          sender: "them",
          time: "8:36 AM",
        },
      ],
    },

    {
      id: 4,
      name: "Emma Johnson",
      username: "emma",
      image: "https://i.pravatar.cc/150?img=32",
      lastMessage: "Liked a message",
      time: "1d",
      online: false,
      unread: false,

      messages: [
        {
          id: 1,
          text: "Thank you so much ❤️",
          sender: "them",
          time: "Yesterday",
        },
        {
          id: 2,
          text: "You're welcome!",
          sender: "me",
          time: "Yesterday",
        },
      ],
    },

    {
      id: 5,
      name: "Michael Brown",
      username: "michael",
      image: "https://i.pravatar.cc/150?img=5",
      lastMessage: "Send me the details 👍",
      time: "2d",
      online: false,
      unread: false,

      messages: [
        {
          id: 1,
          text: "Can you send me the details?",
          sender: "them",
          time: "Monday",
        },
        {
          id: 2,
          text: "Sure 👍",
          sender: "me",
          time: "Monday",
        },
      ],
    },
  ]);

  // --------------------------------
  // SELECTED CHAT
  // --------------------------------

  const [selectedChat, setSelectedChat] = useState(null);

  // --------------------------------
  // MESSAGE INPUT
  // --------------------------------

  const [message, setMessage] = useState("");

  // --------------------------------
  // SEARCH
  // --------------------------------

  const [search, setSearch] = useState("");

  // --------------------------------
  // FILTER USERS
  // --------------------------------

  const filteredConversations = conversations.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase()) ||
    user.username.toLowerCase().includes(search.toLowerCase())
  );

  // --------------------------------
  // SEND MESSAGE
  // --------------------------------

  const sendMessage = () => {
    if (!message.trim() || !selectedChat) return;

    const newMessage = {
      id: Date.now(),
      text: message.trim(),
      sender: "me",
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    // Update conversations
    setConversations((prev) =>
      prev.map((chat) =>
        chat.id === selectedChat.id
          ? {
              ...chat,
              messages: [...chat.messages, newMessage],
              lastMessage: newMessage.text,
              time: "now",
            }
          : chat
      )
    );

    // Update currently opened chat
    setSelectedChat((prev) => ({
      ...prev,
      messages: [...prev.messages, newMessage],
      lastMessage: newMessage.text,
      time: "now",
    }));

    // Clear input
    setMessage("");
  };

  // =================================
  // CHAT SCREEN
  // =================================

  if (selectedChat) {
    return (
      <div className="message-page">

        <div className="chat-screen">

          {/* CHAT HEADER */}

          <div className="chat-header">

            <button
              className="back-btn"
              onClick={() => setSelectedChat(null)}
            >
              <i className="fa-solid fa-arrow-left"></i>
            </button>

            <div className="chat-user">

              <div className="chat-avatar">

                <img
                  src={selectedChat.image}
                  alt={selectedChat.name}
                />

                {selectedChat.online && (
                  <span className="online-dot"></span>
                )}

              </div>

              <div>
                <h3>{selectedChat.name}</h3>

                <p>
                  {selectedChat.online
                    ? "Active now"
                    : `@${selectedChat.username}`}
                </p>
              </div>

            </div>

            <div className="chat-actions">

              <button>
                <i className="fa-solid fa-phone"></i>
              </button>

              <button>
                <i className="fa-solid fa-video"></i>
              </button>

              <button>
                <i className="fa-solid fa-circle-info"></i>
              </button>

            </div>

          </div>


          {/* CHAT MESSAGES */}

          <div className="chat-messages">

            <div className="chat-profile-large">

              <img
                src={selectedChat.image}
                alt={selectedChat.name}
              />

              <h2>{selectedChat.name}</h2>

              <p>@{selectedChat.username}</p>

            </div>


            <div className="today">
              Today
            </div>


            {selectedChat.messages.map((msg) => (

              <div
                key={msg.id}
                className={`message-row ${
                  msg.sender === "me"
                    ? "my-message"
                    : "their-message"
                }`}
              >

                <div className="message-bubble">
                  {msg.text}
                </div>

                <span className="message-time">
                  {msg.time}
                </span>

              </div>

            ))}

          </div>


          {/* MESSAGE INPUT */}

          <div className="message-input">

            <button>
              <i className="fa-regular fa-face-smile"></i>
            </button>

            <input
              type="text"
              placeholder="Message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  sendMessage();
                }
              }}
            />

            <button>
              <i className="fa-regular fa-image"></i>
            </button>

            <button
              className="heart-btn"
              onClick={() => setMessage("❤️")}
            >
              <i className="fa-regular fa-heart"></i>
            </button>

          </div>

        </div>

      </div>
    );
  }


  // =================================
  // INBOX / ALL MESSAGES
  // =================================

  return (
    <div className="message-page">

      <div className="inbox">

        {/* HEADER */}

        <div className="inbox-header">

          <h2>yourusername</h2>

          <button>
            <i className="fa-regular fa-pen-to-square"></i>
          </button>

        </div>


        {/* SEARCH */}

        <div className="message-search">

          <i className="fa-solid fa-magnifying-glass"></i>

          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>


        {/* TABS */}

        <div className="message-tabs">

          <button className="active">
            Primary
          </button>

          <button>
            General
          </button>

          <button className="requests">
            Requests <span>1</span>
          </button>

        </div>


        {/* CONVERSATIONS */}

        <div className="conversation-list">

          {filteredConversations.length > 0 ? (

            filteredConversations.map((user) => (

              <div
                className="conversation"
                key={user.id}
                onClick={() => setSelectedChat(user)}
              >

                {/* PROFILE */}

                <div className="conversation-avatar">

                  <img
                    src={user.image}
                    alt={user.name}
                  />

                  {user.online && (
                    <span className="online-dot"></span>
                  )}

                </div>


                {/* TEXT */}

                <div className="conversation-text">

                  <div className="conversation-name">

                    <span>
                      {user.name}
                    </span>

                    {user.unread && (
                      <span className="blue-dot"></span>
                    )}

                  </div>

                  <div className="last-message">

                    {user.lastMessage}

                    <span>
                      · {user.time}
                    </span>

                  </div>

                </div>


                {/* CAMERA */}

                <button
                  className="camera-button"
                  onClick={(e) => e.stopPropagation()}
                >
                  <i className="fa-solid fa-camera"></i>
                </button>

              </div>

            ))

          ) : (

            <div className="no-results">
              <i className="fa-solid fa-user-slash"></i>
              <p>No users found</p>
            </div>

          )}

        </div>

      </div>

    </div>
  );
}

export default Messages;
