

export async function postData(url = 'http://localhost:8080/api/user', data = {}) {
    // Default options are marked with *
    return await fetch(url, {
      method: 'GET',
      mode: 'cors', 
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow', 
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(data) 
    });
  }

