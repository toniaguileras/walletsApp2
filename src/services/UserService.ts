

export function getUsers() {
    return fetch('http://localhost:8080/api/user').then(res => res.json());
   
  }

