export function getUsers() {
    return fetch('http://localhost:8080/api/user').then(res => res.json());

}

export function getUserById(userId: number) {
    return fetch('http://localhost:8080/api/user/find?userId=' + userId).then(res => res.json());

}
