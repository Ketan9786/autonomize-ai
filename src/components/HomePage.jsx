import React, { useState } from "react";
import "./style.css";
import RepositoryListPage from "./RepositoryListPage";

const HomePage = () => {
  const [userId, setUserId] = useState("");
  const [loading, setLoading] = useState(false);
  const [userDetails, setUserDetails] = useState(null);

  const handleSearch = () => {
    setLoading(true);
    fetch(`https://api.github.com/users/${userId}/repos`)
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);

        if (data.message === "Not Found") {
          console.log(data.message);
          setUserDetails(null);
        } else {
          setUserDetails(data);
          console.log(data)
        }
      })
      .catch((error) => {
        setLoading(false);

        console.error("Error fetching user details:", error);
      });
  };

  return (
    <div className="home">
      <h1>Enter your user Id to get reopistories details</h1>
      <div>
        <input
          type="text"
          placeholder="Enter GitHub User ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <button type="button" onClick={handleSearch}>
          Search
        </button>
      </div>
      {loading && <p>Loading...</p>}
      {userDetails && (
        <RepositoryListPage userData={userDetails} userId={userId} />
      )}
    </div>
  );
};

export default HomePage;
