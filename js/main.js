import Store from "./store.js";
import Controller from "./controller.js";

const tag = '[MAIN]';
document.addEventListener('DOMContentLoaded', main);

function main() {
    console.log(tag);
    const store = new Store();

    new Controller(store);
}