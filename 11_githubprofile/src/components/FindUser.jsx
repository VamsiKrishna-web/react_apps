import { useState } from "react";
import GithubUser from "./githubUser";
function FindUser() {
  const [username, setUsername] = useState("");
  return (
    <div>
      <h2>Find User</h2>
      <form action="">
        <label htmlFor="searchBox">Search</label>
        <input
          type="text"
          name="search_box"
          id="searchBox"
          onChange={(e) => setUsername(e.target.value)}
        />
      </form>
      <p>{username}</p>
      <GithubUser username={username} />
    </div>
  );
}

export default FindUser;
