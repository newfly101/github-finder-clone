import {fetchSearch, fetchServerTest} from "./repository.js";

const tag = '[STORE]';
export default class Store {
    constructor() {
        console.log(tag);


        this.searchUserName = "";
        this.init();
        this.findUser = {};
    }

    // 초기화
    init() {
        this.searchUserName = "";
    }


    // express server - octokit API Request
    async test() {
        try {
            const data = await fetchServerTest();
            console.log(tag, 'Test response:', data);
        } catch (error) {
            console.error(tag, 'Error in test:', error);
        }
    }

    async getSearchUser(userName) {
        if (userName.trim().length > 0) {
            try {
                const data = await fetchSearch(userName);
                console.log(tag, 'getSearchUser:', data);
                this.findUser = data.items.find(user => user.login === userName);
                console.log(tag,"findUser: ",this.findUser); // object로 담음
            } catch (error) {
                console.error(tag, 'Error in test:', error);
            }
        } else {
            console.log("검색할 사용자의 이름을 입력해주세요.");
            this.init();
        }

    }

}