
import { useState } from "react";
import "./Search.css";

function Search() {
  const [search, setSearch] = useState("");

  const users = [
    {
      id: 1,
      username: "alexmorgan",
      name: "Alex Morgan",
      image: "https://i.pravatar.cc/150?img=12",
      followers: "12.4K followers",
    },
    {
      id: 2,
      username: "rahul.dev",
      name: "Rahul Parmar",
      image: "https://i.pravatar.cc/150?img=11",
      followers: "1.2K followers",
    },
    {
      id: 3,
      username: "john_wick",
      name: "John Wick",
      image: "https://i.pravatar.cc/150?img=13",
      followers: "8.7K followers",
    },
    {
      id: 4,
      username: "emma.stone",
      name: "Emma Stone",
      image: "https://i.pravatar.cc/150?img=32",
      followers: "24.5K followers",
    },
    {
      id: 5,
      username: "harsh_dhadhal",
      name: "Harsh Dhadhhal",
      image: "https://i.pravatar.cc/150?img=14",
      followers: "3.8K followers",
    },
  ];

  const filteredUsers = users.filter(
    (user) =>
      user.username.toLowerCase().includes(search.toLowerCase()) ||
      user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="search-page">

      {/* SEARCH HEADER */}
      <div className="search-container">

        <div className="search-heading">
          <h1>Search</h1>
          <p>Find people and discover new accounts</p>
        </div>

        <div className="search-input-wrapper">

          <span className="search-icon">
            ⌕
          </span>

          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            autoFocus
          />

          {search && (
            <button
              className="clear-search"
              onClick={() => setSearch("")}
            >
              ×
            </button>
          )}

        </div>

      </div>


      {/* CONTENT */}
      <div className="search-content">

        {search === "" ? (

          <div className="search-welcome">

            <div className="search-circle">
              <span>⌕</span>
            </div>

            <h2>Search for people</h2>

            <p>
              Enter a name or username to find accounts
              you may know.
            </p>

            <div className="popular-title">
              Suggested for you
            </div>

            <div className="suggested-users">

              {users.slice(0, 3).map((user) => (

                <div
                  className="suggested-card"
                  key={user.id}
                >

                  <img
                    src={user.image}
                    alt={user.username}
                  />

                  <strong>{user.username}</strong>

                  <span>{user.name}</span>

                  <button
                    onClick={() => setSearch(user.username)}
                  >
                    Search
                  </button>

                </div>

              ))}

            </div>

          </div>

        ) : filteredUsers.length > 0 ? (

          <div className="results">

            <div className="results-header">
              <span>Accounts</span>
              <small>{filteredUsers.length} results</small>
            </div>

            {filteredUsers.map((user) => (

              <div
                className="user-result"
                key={user.id}
              >

                <img
                  src={user.image}
                  alt={user.username}
                />

                <div className="user-info">

                  <strong>{user.username}</strong>

                  <span>{user.name}</span>

                  <small>{user.followers}</small>

                </div>

                <button className="view-btn">
                  View profile
                </button>

              </div>

            ))}

          </div>

        ) : (

          <div className="no-results">

            <div className="no-results-circle">
              ⌕
            </div>

            <h2>No results found</h2>

            <p>
              We couldn't find an account matching
            </p>

            <strong>"{search}"</strong>

          </div>

        )}

      </div>

    </div>
  );
}

export default Search;

