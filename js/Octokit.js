const { Octokit } = require("@octokit/rest");

const octokit = new Octokit({
    auth: 'YOUR-TOKEN',  // 발급 받은 GitHub Personal Access Token
});
