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

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
