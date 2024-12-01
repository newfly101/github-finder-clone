import View from "./Views.js";
import {on, qs} from "../helpers.js";

const tag = '[Section_2]';

export default class userDetails extends View {
    constructor() {
        super(qs('.section2'));
        console.log("this", this);

        this.userProfileImg = qs(".viewer-userProfile-img-container").firstElementChild;

        this.bindEvent();
    }

    async getUserProfile(userProfile) {
        this.userProfileImg.src = userProfile.avatar_url;
        console.log(this.userProfileImg);
    }

    bindEvent() {
        on(this.element, "getUser", () => this.handleGetUser());
    }
    handleGetUser() {
        this.emit("@getUser", this.userProfileImg);
    }
}