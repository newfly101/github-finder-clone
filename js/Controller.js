const tag = '[CONTROLLER]';

export default class Controller {
    constructor(store, {userNameSearch, userDetails}) {
        // console.log(tag);

        this.store = store;
        this.userNameSearch = userNameSearch;
        this.userDetails = userDetails;

        this.userInputSubmit();
        this.userNameReset();
    }

    userInputSubmit() {
        this.userNameSearch.on("@submit", event => this.searchName(event.detail.value));
    }
    async searchName(userName) {
        console.log(tag, "UserName : ", userName);
        await this.store.getSearchUser(userName);

        console.log(tag, "findUser " + JSON.stringify(this.store.findUser));
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