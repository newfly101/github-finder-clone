import {fetchSearch, fetchToUrl} from "./repository.js";

const tag = '[STORE]';
export default class Store {
    constructor() {
        // console.log(tag);

        this.searchUserName = "";
        this.init();
        this.findUser = Object.assign({});
    }

    // 초기화
    init() {
        this.searchUserName = "";
    }
    // 정규식을 이용해서 object의 value에 {/secret} 과 같이 {} 문자열이 있으면 삭제
    clearOptionStrings(object) {
        return Object.fromEntries(
            Object.entries(object).map(([key, value]) => {
                if (typeof value === "string") {
                    value = value.replace(/\{[^}]*\}/g, "");
                }
                return [key, value];
            })
        );
    }

    async getSearchUser(userName) {
        if (userName.trim().length > 0) {
            try {
                const data = await fetchSearch(userName);
                this.findUser = data.find(user => user.login === userName);
                this.findUser = this.clearOptionStrings(this.findUser);
                console.log(tag,"SearchUser => ",this.findUser);
                await this.calcDetailCount();
            } catch (error) {
                console.log(tag, 'Error in SearchUser:', error);
            }
        } else {
            console.log("검색할 사용자의 이름을 입력해주세요.");
            this.init();
        }
    }

    async calcDetailCount() {
        console.log(tag, "Calculating each button's Count");
        try{
            const follower = await fetchToUrl(this.findUser.followers_url);
            this.findUser.followers_count = follower.length;

            const following = await fetchToUrl(this.findUser.following_url);
            this.findUser.following_count = following.length;

            const repos = await fetchToUrl(this.findUser.repos_url);
            this.findUser.repos_count = repos.length;

            const gists = await fetchToUrl(this.findUser.gists_url);
            this.findUser.gists_count = gists.length;

            console.log(tag, "Calculating Complete Count");
        } catch (e) {
            console.log(tag, 'Error in SearchUserFollow:', e);
        }
    }


    // async getSearchUserDetail(userName) {
    //     console.log("detail request");
    //     try {
    //         const data = await fetchSearchDetail(userName);
    //         console.log(`getSearchUserDetail : ${data.json()}`);
    //         return data.json();
    //     } catch (error) {
    //         console.error(tag, 'Error in getSearchUserDetail:', error);
    //     }
    // }
}

// this.findUser = {
//     "login": "newfly101",
//     "id": 62008619,
//     "node_id": "MDQ6VXNlcjYyMDA4NjE5",
//     "avatar_url": "https://avatars.githubusercontent.com/u/62008619?v=4",
//     "gravatar_id": "",
//     "url": "https://api.github.com/users/newfly101",
//     "html_url": "https://github.com/newfly101",
//     "followers_url": "https://api.github.com/users/newfly101/followers",
//     "following_url": "https://api.github.com/users/newfly101/following{/other_user}",
//     "gists_url": "https://api.github.com/users/newfly101/gists{/gist_id}",
//     "starred_url": "https://api.github.com/users/newfly101/starred{/owner}{/repo}",
//     "subscriptions_url": "https://api.github.com/users/newfly101/subscriptions",
//     "organizations_url": "https://api.github.com/users/newfly101/orgs",
//     "repos_url": "https://api.github.com/users/newfly101/repos",
//     "events_url": "https://api.github.com/users/newfly101/events{/privacy}",
//     "received_events_url": "https://api.github.com/users/newfly101/received_events",
//     "type": "User",
//     "user_view_type": "public",
//     "site_admin": false,
//     "score": 1
// }