const tag = '[Repository]';

export async function fetchSearch(userName) {
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