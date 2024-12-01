import {fetchGetTopics, fetchSearch, fetchServerTest} from "./repository.js";

const tag = '[STORE]';
export default class Store {
    constructor() {
        console.log(tag);


        this.searchUserName = "";
        this.init();
    }

    // 초기화
    init() {
        this.searchUserName = "";
    }


    // express server - octokit API Request
    async test() {
        try {
            const data = await fetchServerTest(); // repository.js의 fetchServerTest 호출
            console.log(tag, 'Test response:', data);
        } catch (error) {
            console.error(tag, 'Error in test:', error);
        }
    }

    async getTopics() {
        try {
            const data = await fetchGetTopics();
            console.log(tag, 'Test response:', data);
        } catch (error) {
            console.error(tag, 'Error in test:', error);
        }
    }

    async getSearchUser(userName) {
        try {
            const data = await fetchSearch(userName);
            console.log(tag, 'Test response:', data);
        } catch (error) {
            console.error(tag, 'Error in test:', error);
        }
    }

}