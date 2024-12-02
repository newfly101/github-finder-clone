<div>
  <h1>🎓 프로젝트 결과물</h1>
  <img src="./assets/clone-result.gif" alt="result" style="width: 500px; height: 500px;"/>
</div>
<div>
  <h2>💡 사용 언어</h1>
<!--   <img src="https://img.shields.io/badge/이름-색상코드?style=flat-square&logo=로고명&logoColor=로고색"/> -->
  <div style="margin-bottom: 20px; display:flex; flex-direction:column;">
    <div style="display: block">
      <p>사용 언어</p>
      <img src="https://img.shields.io/badge/BanillaJS-ffca28?style=flat-square&logo=javascript&logoColor=white" alt=""/>
      <img src="https://img.shields.io/badge/CSS-2b52d4?style=flat-square&logo=css3&logoColor=white" alt=""/>
      <img src="https://img.shields.io/badge/Node.js-5FA04E?style=flat-square&logo=nodedotjs&logoColor=black" alt=""/>
    </div>
    <div style="display: block">
        <p>라이브러리</p>
        <img src="https://img.shields.io/badge/express-F6C915?style=flat-square&logo=express&logoColor=black" alt=""/>
        <img src="https://img.shields.io/badge/dotenv-FF9699?style=flat-square&logo=librarything&logoColor=black" alt=""/>
        <img src="https://img.shields.io/badge/cors-FF9699?style=flat-square&logo=librarything&logoColor=black" alt=""/>
        <img src="https://img.shields.io/badge/require-FF9699?style=flat-square&logo=librarything&logoColor=black" alt=""/>
      <img src="https://img.shields.io/badge/@octokit/rest-FC6D26?style=flat-square&logo=github&logoColor=black" alt=""/>
    </div>
  </div>
</div>
<div>
  <h2>📌 Installation</h1>
  <pre><code>
  npm install -y @octokit/rest cors dotenv express require 
  </code></pre>
  <h2>.env</h2>
  <pre><code>
  GH_TOKEN=ghp_your_token_here
  </code></pre>
  <h2>express server 시작</h2>
  <pre><code>
// root에 server.js가 있고, .env 파일도 root에 존재하기 때문에 바로 실행
node server.js

// server.js에서 verifyGitHubToken() 주석 해제 하면 정상적으로 github-api에 로그인 했는지 결과처리를 확인가능하다.
  </code></pre>
</div>
