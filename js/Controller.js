const tag = '[CONTROLLER]';

export default class Controller {
    constructor(store, {userNameSearch}) {
        console.log(tag);

        this.store = store;
        this.userNameSearch = userNameSearch;
    }
}