import View from "./Views.js";
import {qs} from "../helpers.js";
const tag = '[Section_3]';



export default class UserRepos extends View {
    constructor() {
        super(qs('.section3'));
        // console.log(tag, "this", this);

        this.template = new Template();
    }
    showData(data) {
        this.init();
        if (data.length > 0) {
            qs('.result')?.remove(); // 기존 목록 제거
            const html = this.template.getList(data);
            this.element.insertAdjacentHTML('beforeend', html);
        } else {
            this.element.innerHTML = this.template.getEmptyMessage();
        }
    }
    init() {
        this.element.innerHTML = "";
    }
}

class Template {

    getList(data) {
        return `
            ${data.map(this._getItem).join("")}
        `
    }

    getEmptyMessage() {
        return `
            <div class="empty-box">검색결과가 없습니다.</div>
        `;
    }

    _getItem({name, html_url, stargazers_count, watchers_count, forks_count}) {
        return `
        <div class="viewer-repository">
            <div class="repository-name">
                 <a href="${html_url}" target="_blank">
                     ${name}
                 </a>
            </div>
            <div class="viewer-button-container">
                 <button>Stars: ${stargazers_count}</button>
                 <button>Watchers: ${watchers_count}</button>
                 <button>Forks: ${forks_count}</button>
            </div>
        </div>
        `;
    }

}

// {
//     "id": 687956721,
//     "node_id": "R_kgDOKQFi8Q",
//     "name": "080355",
//     "full_name": "newfly101/080355",
//     "private": false,
//     "owner": {
//     "login": "newfly101",
//         "id": 62008619,
//         "node_id": "MDQ6VXNlcjYyMDA4NjE5",
//         "avatar_url": "https://avatars.githubusercontent.com/u/62008619?v=4",
//         "gravatar_id": "",
//         "url": "https://api.github.com/users/newfly101",
//         "html_url": "https://github.com/newfly101",
//         "followers_url": "https://api.github.com/users/newfly101/followers",
//         "following_url": "https://api.github.com/users/newfly101/following{/other_user}",
//         "gists_url": "https://api.github.com/users/newfly101/gists{/gist_id}",
//         "starred_url": "https://api.github.com/users/newfly101/starred{/owner}{/repo}",
//         "subscriptions_url": "https://api.github.com/users/newfly101/subscriptions",
//         "organizations_url": "https://api.github.com/users/newfly101/orgs",
//         "repos_url": "https://api.github.com/users/newfly101/repos",
//         "events_url": "https://api.github.com/users/newfly101/events{/privacy}",
//         "received_events_url": "https://api.github.com/users/newfly101/received_events",
//         "type": "User",
//         "user_view_type": "public",
//         "site_admin": false
// },
//     "html_url": "https://github.com/newfly101/080355",
//     "description": "유니티 교과서, 개정6판",
//     "fork": true,
//     "url": "https://api.github.com/repos/newfly101/080355",
//     "forks_url": "https://api.github.com/repos/newfly101/080355/forks",
//     "keys_url": "https://api.github.com/repos/newfly101/080355/keys{/key_id}",
//     "collaborators_url": "https://api.github.com/repos/newfly101/080355/collaborators{/collaborator}",
//     "teams_url": "https://api.github.com/repos/newfly101/080355/teams",
//     "hooks_url": "https://api.github.com/repos/newfly101/080355/hooks",
//     "issue_events_url": "https://api.github.com/repos/newfly101/080355/issues/events{/number}",
//     "events_url": "https://api.github.com/repos/newfly101/080355/events",
//     "assignees_url": "https://api.github.com/repos/newfly101/080355/assignees{/user}",
//     "branches_url": "https://api.github.com/repos/newfly101/080355/branches{/branch}",
//     "tags_url": "https://api.github.com/repos/newfly101/080355/tags",
//     "blobs_url": "https://api.github.com/repos/newfly101/080355/git/blobs{/sha}",
//     "git_tags_url": "https://api.github.com/repos/newfly101/080355/git/tags{/sha}",
//     "git_refs_url": "https://api.github.com/repos/newfly101/080355/git/refs{/sha}",
//     "trees_url": "https://api.github.com/repos/newfly101/080355/git/trees{/sha}",
//     "statuses_url": "https://api.github.com/repos/newfly101/080355/statuses/{sha}",
//     "languages_url": "https://api.github.com/repos/newfly101/080355/languages",
//     "stargazers_url": "https://api.github.com/repos/newfly101/080355/stargazers",
//     "contributors_url": "https://api.github.com/repos/newfly101/080355/contributors",
//     "subscribers_url": "https://api.github.com/repos/newfly101/080355/subscribers",
//     "subscription_url": "https://api.github.com/repos/newfly101/080355/subscription",
//     "commits_url": "https://api.github.com/repos/newfly101/080355/commits{/sha}",
//     "git_commits_url": "https://api.github.com/repos/newfly101/080355/git/commits{/sha}",
//     "comments_url": "https://api.github.com/repos/newfly101/080355/comments{/number}",
//     "issue_comment_url": "https://api.github.com/repos/newfly101/080355/issues/comments{/number}",
//     "contents_url": "https://api.github.com/repos/newfly101/080355/contents/{+path}",
//     "compare_url": "https://api.github.com/repos/newfly101/080355/compare/{base}...{head}",
//     "merges_url": "https://api.github.com/repos/newfly101/080355/merges",
//     "archive_url": "https://api.github.com/repos/newfly101/080355/{archive_format}{/ref}",
//     "downloads_url": "https://api.github.com/repos/newfly101/080355/downloads",
//     "issues_url": "https://api.github.com/repos/newfly101/080355/issues{/number}",
//     "pulls_url": "https://api.github.com/repos/newfly101/080355/pulls{/number}",
//     "milestones_url": "https://api.github.com/repos/newfly101/080355/milestones{/number}",
//     "notifications_url": "https://api.github.com/repos/newfly101/080355/notifications{?since,all,participating}",
//     "labels_url": "https://api.github.com/repos/newfly101/080355/labels{/name}",
//     "releases_url": "https://api.github.com/repos/newfly101/080355/releases{/id}",
//     "deployments_url": "https://api.github.com/repos/newfly101/080355/deployments",
//     "created_at": "2023-09-06T11:05:27Z",
//     "updated_at": "2023-09-06T11:05:27Z",
//     "pushed_at": "2023-07-04T23:54:11Z",
//     "git_url": "git://github.com/newfly101/080355.git",
//     "ssh_url": "git@github.com:newfly101/080355.git",
//     "clone_url": "https://github.com/newfly101/080355.git",
//     "svn_url": "https://github.com/newfly101/080355",
//     "homepage": null,
//     "size": 43525,
//     "stargazers_count": 0,
//     "watchers_count": 0,
//     "language": null,
//     "has_issues": false,
//     "has_projects": true,
//     "has_downloads": true,
//     "has_wiki": true,
//     "has_pages": false,
//     "has_discussions": false,
//     "forks_count": 0,
//     "mirror_url": null,
//     "archived": false,
//     "disabled": false,
//     "open_issues_count": 0,
//     "license": null,
//     "allow_forking": true,
//     "is_template": false,
//     "web_commit_signoff_required": false,
//     "topics": [],
//     "visibility": "public",
//     "forks": 0,
//     "open_issues": 0,
//     "watchers": 0,
//     "default_branch": "main"
// },