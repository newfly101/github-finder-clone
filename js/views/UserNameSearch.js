import View from "./Views.js";
import {emit, on, qs} from "../helpers.js";

const tag = '[Section_1]';

export default class userNameSearch extends View{
    constructor() {
        super(qs(".search-user-form"));
        // console.log("this", this);

        this.userNameElement = qs("[type=text]", this.element);
        this.resetNameElement = qs(".reset-btn", this.element);

        this.showResetButton(false);
        this.bindEvent();
    }

    showResetButton(visible = true) {
        this.resetNameElement.style.display = visible ? "block" : "none";
    }

    bindEvent() {
        // input에서 event 'keyup' event 발생 시 this.handleKeyUp() function 실행
        on(this.userNameElement, "keyup", () => this.handleKeyUp());
        on(this.element, "submit", (event) => this.handleSubmit(event));
        on(this.resetNameElement, "click", () => this.handleReset());
    }
    handleKeyUp() {
        const {value} = this.userNameElement;
        this.showResetButton(value.length > 0);
    }
    handleSubmit(event) {
        event.preventDefault();
        console.log(tag, "handleSubmit");
        const {value} = this.userNameElement;
        this.emit("@submit", {value});
    }
    handleReset() {
        this.userNameElement.value = '';
        const {value} = this.userNameElement;
        this.showResetButton(value.length > 0);
        this.emit("@reset", {value});

    }
}