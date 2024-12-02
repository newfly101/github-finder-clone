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
        }
        console.log(this.userDetail.userProfileLink);

    }

    setUserDetail(userData) {
        console.log(tag, "userData: ", userData);
        this.userDetail.userImg.src = userData.avatar_url;
        this.userDetail.userProfileLink.href = userData.html_url;
    }
}

// <section class="section2">
//             <div class="viewer-userProfile-img-container">
//                 <img src="./assets/userProfile.svg" alt="userProfileImg"/>
//                 <button>
//                     <a id="view-to-github" href="#" target="_blank">
//                         View Profile
//                     </a>
//                 </button>
//             </div>
//             <div class="viewer-userProfile-detail-container">
//                 <div class="viewer-button-container">
//                     <button>Public Repos: <span id="user-1">0</span></button>
//                     <button>Public Gists: <span id="user-2">0</span></button>
//                     <button>Followers: <span id="user-3">0</span></button>
//                     <button>Following: <span id="user-4">0</span></button>
//                 </div>
//                 <div class="viewer-userProfile-container">
//                     <p>Company: <span id="userFile-1"></span></p>
//                     <p>Website/Blog: <span id="userFile-2"></span></p>
//                     <p>Location: <span id="userFile-3"></span></p>
//                     <p>Member Since: <span id="userFile-4"></span></p>
//                 </div>
//             </div>
//         </section>
