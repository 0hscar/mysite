import { useEffect, useState } from "react";

type Repository = {
  id: string;
  name: string;
  description: string | null;
  url: string;
  stargazerCount: number;
};

export default function PinnedRepos() {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/pinned-repos.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load pinned repos");
        return res.json();
      })
      .then(setRepos)
      .catch((err) => setError(err.message));
  }, []);

  if (error) return <p>{error}</p>;

  return (
    <ul>
      {repos.map((repo) => (
        <li key={repo.id}>
          <a href={repo.url} target="_blank" rel="noreferrer">
            <strong>{repo.name}</strong>
          </a>
          {repo.description && <p>{repo.description}</p>}
          ⭐ {repo.stargazerCount}
        </li>
      ))}
    </ul>
  );
}
