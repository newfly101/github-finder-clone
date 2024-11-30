import { on } from "../helpers.js";
const tag = '[VIEW]';

export default class View {
    constructor(element) {
        if (!element) throw "no element";

        this.element = element;

        return this;
    }

    on(eventName, handler) {
        on(this.element, eventName, handler);
        return this;
    }
}