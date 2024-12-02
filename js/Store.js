import {fetchSearch, fetchToUrl} from "./repository.js";

const tag = '[STORE]';
export default class Store {
    constructor() {
        // console.log(tag);

        this.searchUserName = "";
        this.init();
        this.findUser = Object.assign({});
        this.userLoginData = Object.assign({});
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
                await this.getUserDetails();
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
            this.findUser.repos_list = repos;

            const gists = await fetchToUrl(this.findUser.gists_url);
            this.findUser.gists_count = gists.length;

            console.log(tag, "Calculating Complete Count");
        } catch (e) {
            console.log(tag, 'Error in SearchUserFollow:', e);
        }
    }
    async getUserDetails() {
        console.log(tag, "GET:: User Login Detail Information");
        try {
            this.userLoginData = await fetchToUrl(this.findUser.url);
            console.log(tag, "Complete:: User Login Detail Information", this.userLoginData);
        } catch (error) {
            console.log(tag, 'Error in getUserDetails:', error);
        }
    }
}