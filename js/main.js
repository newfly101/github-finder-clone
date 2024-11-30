import Store from "./Store.js";
import Controller from "./Controller.js";
import UserNameSearch from "./views/UserNameSearch.js";

const tag = '[MAIN]';
document.addEventListener('DOMContentLoaded', main);

function main() {
    console.log(tag);
    const store = new Store();

    const views = {
        userNameSearch: new UserNameSearch(),
    }

    new Controller(store, views);
}