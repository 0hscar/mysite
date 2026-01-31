import fs from "node:fs";
import path from "node:path";
import dotenv from "dotenv";

dotenv.config({ path: ".env" });

const GITHUB_API = "https://api.github.com/graphql";
const USERNAME = "0hscar";
const TOKEN = process.env.GITHUB_TOKEN;

if (!TOKEN) {
  throw new Error("Missing GITHUB_TOKEN env variable");
}

const query = `
{
  user(login: "${USERNAME}") {
    pinnedItems(first: 6, types: [REPOSITORY]) {
      nodes {
        ... on Repository {
          id
          name
          description
          url
          stargazerCount
        }
      }
    }
  }
}
`;

async function fetchPinnedRepos() {
  const res = await fetch(GITHUB_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({ query }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`GitHub API error ${res.status}: ${text}`);
  }

  const json = await res.json();
  const nodes = json.data?.user?.pinnedItems?.nodes;

  if (!nodes) {
    throw new Error("Unexpected GitHub API response");
  }

  const outputPath = path.resolve("public/pinned-repos.json");

  fs.writeFileSync(
    outputPath,
    JSON.stringify(nodes, null, 2),
    "utf-8"
  );

  console.log(`✔ Pinned repos written to ${outputPath}`);
}

fetchPinnedRepos();
