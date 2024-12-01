const tag = '[CONTROLLER]';

export default class Controller {
    constructor(store, {userNameSearch}) {
        console.log(tag);

        this.store = store;
        this.userNameSearch = userNameSearch;

        this.userInputSubmit();
        this.userNameReset();
    }

    userInputSubmit() {
        this.userNameSearch.on("@submit", event => this.searchName(event.detail.value));
    }
    searchName(userName) {
        console.log(tag, "UserName : ", userName);
        this.store.getSearchUser(userName);
        // this.store.test();
    }
    userNameReset() {
        this.userNameSearch.on("@reset", event => this.checkUserName(event));
    }

    checkUserName(event) {
        if (event.detail.value.length === 0) {
            console.log(tag, "User name erased");
        }
    }
}