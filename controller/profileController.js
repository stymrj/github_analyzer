const db = require("../db");
const getGithubData = require("../services/githubService");

const analyzeProfile = async (req, res) => {

  try {

    const username = req.params.username;

    const { user, repos } =
      await getGithubData(username);

    const totalStars = repos.reduce(
      (sum, repo) =>
        sum + repo.stargazers_count,
      0
    );

    const totalForks = repos.reduce(
      (sum, repo) =>
        sum + repo.forks_count,
      0
    );

    const topRepo = repos.sort(
      (a, b) =>
        b.stargazers_count -
        a.stargazers_count
    )[0];

    const sql = `
      INSERT INTO github_profiles
      (
        username,
        name,
        followers,
        followings,
        public_repos,
        total_stars,
        total_forks,
        top_repository
      )
      VALUES (?,?,?,?,?,?,?,?)
    `;

    db.query(
      sql,
      [
        user.login,
        user.name,
        user.followers,
        user.following,
        user.public_repos,
        totalStars,
        totalForks,
        topRepo?.name || null
      ]
    );

    res.json({
      success: true,
      username: user.login,
      totalStars,
      totalForks
    });

  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};

module.exports = {
  analyzeProfile
};