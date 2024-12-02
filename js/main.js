import Store from "./Store.js";
import Controller from "./Controller.js";
import UserNameSearch from "./views/UserNameSearch.js";
import UserDetails from "./views/UserDetails.js";
import UserRepos from "./views/UserRepos.js";

const tag = '[MAIN]';
document.addEventListener('DOMContentLoaded', main);

function main() {
    // console.log(tag);
    const store = new Store();

    const views = {
        userNameSearch: new UserNameSearch(),
        userDetails: new UserDetails(),
        userRepos: new UserRepos(),
    }

    new Controller(store, views);
}