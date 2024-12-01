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

app.use(cors(corsOption));

const octokit = new Octokit({
    auth: process.env.GH_TOKEN,  // GitHub Access Token
});

app.get('/test', async (req, res) => {
    res.json({message: 'Hello World!'});
})

app.get('/search-topics', async (req, res) => {
    try {
        const response = await octokit.request('GET /search/topics', {
            headers: {
                'X-GitHub-Api-Version': '2022-11-28'
            }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching data from GitHub API' });
    }
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
