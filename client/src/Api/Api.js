
export default class Api {
    async getAll(entityName) {
      const res = await fetch(`http://localhost:9000/test/${entityName}`);
      const entityArray = await res.json();
  
      return entityArray;
    }
  
    async postEntity(data, entityName) {
      // Default options are marked with *
      await fetch(`http://localhost:9000/test/${entityName}`, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *client
        body: JSON.stringify(data) // body data type must match "Content-Type" header
      });
  
      return 'ok'; // parses JSON response into native JavaScript objects
    }
  
    async deleteEntity(data, entityName) {
      // Default options are marked with *
      const body = {
          id: data,
      }
      await fetch(`http://localhost:9000/test/${entityName}`, {
        method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *client
        body: JSON.stringify(body) // body data type must match "Content-Type" header
      });
  
      return 'ok'; // parses JSON response into native JavaScript objects
    }
  
    async putEntity(data, entityName) {
      // Default options are marked with *
      await fetch(`http://localhost:9000/test/${entityName}`, {
        method: 'PUT', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *client
        body: JSON.stringify(data) // body data type must match "Content-Type" header
      });
  
      return 'ok'; // parses JSON response into native JavaScript objects
    }
  }
