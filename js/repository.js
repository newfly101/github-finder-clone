const tag = '[Repository]';

export async function fetchServerTest() {
    try {
        console.log(tag, "cors test");
        const response = await fetch('http://localhost:3000/test', {
            method: "GET",
            credentials: 'include',
        })
        return await response.json();
    } catch (e) {
        console.log("error: ",e);
    }
}
export async function fetchGetTopics() {
    try {
        console.log(tag, "cors test");
        const response = await fetch('http://localhost:3000/search-topics', {
            method: "GET",
            credentials: 'include',
        })
        return await response.json();
    } catch (e) {
        console.log("error: ",e);
    }
}

export async function fetchSearch(userName) {
    this.searchUserName = userName;
    try {
        const response = await fetch(`http://localhost:3000/search-users?userName=${userName}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        return await response.json();
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}