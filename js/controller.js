
const tag = '[CONTROLLER]';
export default class Controller {
    constructor(store) {
        console.log(tag);

        this.store = store;
    }
}