const axios = require("axios");

const getGithubData = async (username) => {

  const user = await axios.get(
    `https://api.github.com/users/${username}`
  );

  const repos = await axios.get(
    `https://api.github.com/users/${username}/repos`
  );

  return {
    user: user.data,
    repos: repos.data
  };
};

module.exports = getGithubData;