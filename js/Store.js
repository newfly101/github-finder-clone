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

}