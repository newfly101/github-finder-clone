import dotenv from 'dotenv';
import { Octokit } from '@octokit/rest';
import express from 'express';
import cors from 'cors';

dotenv.config();  // .env 파일에서 환경 변수 로드
const app = express();
const port = 3000;

const corsOption = {
    origin: 'http://localhost:63342', // 클라이언트 Origin
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}
const API_HEADERS = {
    'X-GitHub-Api-Version': '2022-11-28'
}

app.use(cors(corsOption));

const octokit = new Octokit({
    auth: process.env.GH_TOKEN,
});
console.log(process.env.GH_TOKEN);

const octokitTag = '[GitHub API]';

/*
async function verifyGitHubToken() {
    try {
        // GitHub API의 /user 엔드포인트를 호출하여 토큰 유효성 확인
        const response = await octokit.request('GET /user');
        console.log(`${octokitTag} Token is valid.`);
        console.log(`${octokitTag} Authenticated User:`, response.data);
    } catch (error) {
        if (error.status === 401) {
            console.error(`${octokitTag} Invalid GitHub Token.`, error.message);
        } else {
            console.error(`${octokitTag} Error verifying token:`, error.message);
        }
    }
}
verifyGitHubToken();
*/

// 유저 검색 API REQUEST
app.get('/search-users', async (req, res) => {
    const query = req.query.userName;  // 기본 쿼리 'javascript'
    try {
        const response = await octokit.request('GET /search/users', {
            q: query,
            headers: API_HEADERS
        })
        console.log(`${octokitTag} Response : `, response.data.items);
        res.json(response.data.items);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching data from GitHub API' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
