import { useEffect, useState } from "react";

function useGitHub(username) {
  const [userdata, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [debounceUserName, setDebounceUserName] = useState(username);
  // It waits for user to type untill 600ms
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceUserName(username);
    }, 800);

    return () => {
      clearTimeout(timer); // Kills the timeout if user type after some delay
    };
  }, [username]);
  useEffect(() => {
    // https://api.github.com/users/{USERNAME}
    if (!debounceUserName) return;
    const token = import.meta.env.VITE_GITHUB_TOKEN;
    setLoading(true);

    fetch(`https://api.github.com/users/${debounceUserName}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "X-GitHub-Api-Version": "2022-11-28",
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Error ${res.status}:${res.statusText}`);
        }
        return res.json();
      })
      .then((data) => {
        // console.log("data", data);
        setError(null);
        setUserData(data);
        setLoading(false);
      })
      .catch((err) => {
        // console.log("Err:", err);
        setError(err.message);
        setUserData(null);
        setLoading(false);
      });
  }, [debounceUserName]);

  return [userdata, error, loading];
}

export default useGitHub;
