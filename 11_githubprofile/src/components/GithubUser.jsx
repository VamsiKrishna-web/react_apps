import useGitHub from "../hooks/useGitHub";

function GithubUser({ username }) {
  const [userdata, error, loading] = useGitHub(username);

  const spinnerStyle = {
    border: "4px solid #f3f3f3",
    borderTop: "4px solid #3498db",
    borderRadius: "50%",
    width: "30px",
    height: "30px",
    animation: "spin 1s linear infinite",
    margin: "10px auto",
  };
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      {/* Loading */}
      {loading && (
        <div className="spinner">
          <h2>Loading github User...</h2>
          <div style={spinnerStyle}></div>
        </div>
      )}
      {error && !loading && (
        <p style={{ color: "red" }}>{error} Try with other username</p>
      )}

      {!userdata && !error && !loading && <p>Please Initiate Search</p>}

      {!loading && userdata && (
        <div>
          <img src={userdata.avatar_url} alt="avatar" width="100" />
          <h2>User: {userdata.login}</h2>
          <p>
            {" "}
            <strong>Username:</strong> {userdata.name}
          </p>
          <p>
            <strong>Public Repos:</strong> {userdata.public_repos}
          </p>
          <p>
            <strong>Location:</strong>
            {userdata.location}
          </p>
          <p>
            <strong>Followers:</strong> {userdata.followers}
          </p>

          <p>
            <strong>Bio:</strong>
            {userdata.bio}
          </p>
        </div>
      )}
    </div>
  );
}

export default GithubUser;
