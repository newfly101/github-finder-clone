import View from "./Views.js";
import {qs} from "../helpers.js";

export default class userNameSearch extends View{
    constructor() {
        super(qs(".section1"));
        console.log("this", this);

        this.userNameElement = qs("[type=text]", this.element);
        console.log("userName", this.userNameElement);
    }
}