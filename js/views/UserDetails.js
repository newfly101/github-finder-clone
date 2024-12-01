import View from "./Views.js";
import {on, qs} from "../helpers.js";

const tag = '[Section_2]';

export default class userDetails extends View {
    constructor() {
        super(qs('.section2'));
        console.log("this", this);

        this.userProfile = {
            profileImg: "assets/userProfile.svg",
            htmlUrl: "#",
            profileOptions: {
                repository: "",
                gists: "",
                Followers: "",
                Followings: ""
            },
            // api 다시 재 요청 해야함
            // userFileOptions: {
            //     company: "",
            //     website: "",
            //     location: "",
            //     since: "",
            // }
        }

        this.userProfile.profileImg = qs(".viewer-userProfile-img-container").firstElementChild;
        this.userProfile.htmlUrl = qs("#view-to-github");
        this.userProfile.profileOptions.repository = qs("#user-1");
        this.userProfile.profileOptions.gists = qs("#user-2");
        this.userProfile.profileOptions.Followers = qs("#user-3");
        this.userProfile.profileOptions.Followings = qs("#user-4");
        // this.userProfile.userFileOptions.company = qs("#userFile-1");
        // this.userProfile.userFileOptions.website = qs("#userFile-2");
        // this.userProfile.userFileOptions.location = qs("#userFile-3");
        // this.userProfile.userFileOptions.since = qs("#userFile-4");
        // this.userProfile.

        this.bindEvent();
    }

    async getUserProfile(userProfile) {
        this.userProfile.profileImg.src = userProfile.avatar_url;
        this.userProfile.htmlUrl.href = userProfile.html_url;
        this.userProfile.profileOptions.repository.innerText = userProfile.repos_url.length;
        this.userProfile.profileOptions.gists.innerText = userProfile.gists_url.length;
        this.userProfile.profileOptions.Followers.innerText = userProfile.followers_url.length;
        this.userProfile.profileOptions.Followings.innerText = userProfile.following_url.length;
        // console.log(this.userProfile.profileOptions);
        // this.userProfile.userFileOptions.company.innerText = userProfile.url.company;
        // this.userProfile.userFileOptions.website.innerText = userProfile.url.blog;
        // this.userProfile.userFileOptions.location.innerText = userProfile.url.location;
        // this.userProfile.userFileOptions.since.innerText = userProfile.url.created_at;
    }

    bindEvent() {
        on(this.element, "getUser", () => this.handleGetUser());
    }
    handleGetUser() {
        this.emit("@getUser", this.userProfile.profileImg);
    }
}