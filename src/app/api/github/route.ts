export async function GET() {

  const repoRes = await fetch(
    `https://api.github.com/users/tanishtirpathi/repos?sort=updated&per_page=1`,
    {
      headers: {
        Accept: "application/vnd.github+json",
      },
      next: { revalidate: 60 }, 
    }
  );

  const repos = await repoRes.json();
  const repo = repos[0];

  if (!repo) {
    return Response.json({ error: "No repos found" });
  }

  const commitRes = await fetch(
    `https://api.github.com/repos/tanishtirpathi/${repo.name}/commits?per_page=1`,
    {
      headers: {
        Accept: "application/vnd.github+json",
      },
      next: { revalidate: 60 },
    }
  );

  const commits = await commitRes.json();
  const lastCommit = commits[0];

  return Response.json({
    repo: {
      name: repo.name,
      url: repo.html_url,
    },
    commit: {
      message: lastCommit?.commit?.message,
      date: lastCommit?.commit?.author?.date,
      url: lastCommit?.html_url,
    },
  });
}