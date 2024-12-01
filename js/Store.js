import {fetchSearch} from "./repository.js";

const tag = '[STORE]';
export default class Store {
    constructor() {
        // console.log(tag);

        this.searchUserName = "";
        this.init();
        this.findUser = {};
    }

    // 초기화
    init() {
        this.searchUserName = "";
    }

    async getSearchUser(userName) {
        if (userName.trim().length > 0) {
            try {
                const data = await fetchSearch(userName);
                this.findUser = data.find(user => user.login === userName);
                console.log(tag,"SearchUser => ",this.findUser);
            } catch (error) {
                console.log(tag, 'Error in SearchUser:', error);
            }
        } else {
            console.log("검색할 사용자의 이름을 입력해주세요.");
            this.init();
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