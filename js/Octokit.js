require('dotenv').config();
const { Octokit } = require("@octokit/rest");

export const octokit = new Octokit({
    auth: process.env.GH_TOKEN,  // 발급 받은 GitHub Personal Access Token
});

