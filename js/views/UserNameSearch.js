import View from "./Views.js";
import {on, qs} from "../helpers.js";

export default class userNameSearch extends View{
    constructor() {
        super(qs(".section1"));
        console.log("this", this);

        this.userNameElement = qs("[type=text]", this.element);
        console.log("userName", this.userNameElement);

        this.bindEvent();
    }

    bindEvent() {
        // input에서 event 'keyup' event 발생 시 this.handleKeyUp() function 실행
        on(this.userNameElement, "keyup", () => this.handleKeyUp());
    }
    handleKeyUp() {
        console.log("HANDLER : keyup");
    }
}