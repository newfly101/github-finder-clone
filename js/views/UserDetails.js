import View from "./Views.js";
import {qs} from "../helpers.js";

const tag = '[Section_2]';


export default class userDetails extends View {
    constructor() {
        super(qs('.section2'));
        // console.log("this", this);

        this.userDetail = {
            userImg: qs('div > img'),
            userProfileLink: qs('div > button > a'),
            userRepoCount: qs("#user-1"),
            userGistsCount: qs("#user-2"),
            userFollowerCount: qs("#user-3"),
            userFollowingCount: qs("#user-4"),
            company: qs("#userFile-1"),
            website: qs("#userFile-2"),
            location: qs("#userFile-3"),
            memberSince: qs("#userFile-4")
        }
        console.log(this.userDetail.userProfileLink);

    }

    setUserDetail(userData, userDetail) {
        console.log(tag, "userData: ", userData);
        this.userDetail.userImg.src = userData.avatar_url;
        this.userDetail.userProfileLink.href = userData.html_url;
        // this.userDetail.userRepoCount.innerHTML = userData.repos_count;
        // this.userDetail.userGistsCount.innerHTML = userData.gists_count;
        // this.userDetail.userFollowerCount.innerHTML = userData.followers_count;
        // this.userDetail.userFollowingCount.innerHTML = userData.following_count;
        this.userDetail.company.innerHTML = userDetail.company !== null ? userDetail.company : "";
        this.userDetail.website.innerHTML = userDetail.blog !== null ? userDetail.blog : "";
        this.userDetail.location.innerHTML = userDetail.location !== null ? userDetail.location : "";
        this.userDetail.memberSince.innerHTML = userDetail.created_at;
        
        // 어 슈발.. ? 
        this.userDetail.userRepoCount.innerHTML = userDetail.public_repos;
        this.userDetail.userGistsCount.innerHTML = userDetail.public_gists;
        this.userDetail.userFollowerCount.innerHTML = userDetail.followers;
        this.userDetail.userFollowingCount.innerHTML = userDetail.following;
    }
}