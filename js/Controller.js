const tag = '[CONTROLLER]';

export default class Controller {
    constructor(store, {userNameSearch, userDetails, userRepos}) {
        // console.log(tag);

        this.store = store;
        this.userNameSearch = userNameSearch;
        this.userDetails = userDetails;
        this.userRepos = userRepos;

        this.userInputSubmit();
        this.userNameReset();
    }

    userInputSubmit() {
        this.userNameSearch.on("@submit", event => this.searchName(event.detail.value));
    }
    async searchName(userName) {
        console.log(tag, "UserName : ", userName);
        await this.store.getSearchUser(userName);
        await this.userDetails.setUserDetail(this.store.findUser, this.store.userLoginData); // userImg, url 만 날리는 경우
        await this.userRepos.showData(this.store.repoList);

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