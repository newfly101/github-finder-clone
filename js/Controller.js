const tag = '[CONTROLLER]';

export default class Controller {
    constructor(store, {userNameSearch}) {
        console.log(tag);

        this.store = store;
        this.userNameSearch = userNameSearch;

        this.userInputSubmit();
    }

    userInputSubmit() {
        // this.userNameSearch.on("@submit", event => this.searchUserName(event));
        this.userNameSearch.on("@submit", event => this.searchName(event.detail.value));
    }

    searchUserName(event) {
        console.log(tag, event, event.detail);
    }
    searchName(userName) {
        console.log(tag, "UserName : ", userName);
    }
}