import observer from "./observer";

const kinveyBaseUrl = "https://baas.kinvey.com/";
const kinveyAppKey = "kid_B1wU6amON";
const kinveyAppSecret = "e5672938ce6d4be39acb9914d1e3f9e4";

// Creates the authentication header
function makeAuth(type) {
  return type === "basic"
    ? "Basic " + btoa(kinveyAppKey + ":" + kinveyAppSecret)
    : "Kinvey " + sessionStorage.getItem("authtoken");
}

// Creates request object to kinvey
function makeRequest(method, module, endpoint, auth, data) {
    let dataJSON = JSON.stringify(data)
    let url = kinveyBaseUrl + module + "/" + kinveyAppKey + "/" + endpoint;

    observer.trigger(observer.events.notification, { type: 'loading', message: 'Loading' })
    return fetch(url, {
        method : method,
        headers: {
            Authorization: makeAuth(auth),
            "Content-type": "application/json"
        },
        body: dataJSON
    }).then(rawData => {    
        if(rawData.status === 204){
          return rawData
        }
        return rawData.json()
    })
    .then(res =>  {
      if(!res.error){
        observer.trigger(observer.events.notification, {type: 'success', message: 'Success'})
      } else {
        observer.trigger(observer.events.notification, {type: 'error', message: res.description})
      }
      return res
    })
}

// Function to return GET promise
function get(module, endpoint, auth) {
  return makeRequest("GET", module, endpoint, auth);
}



// Function to return POST promise
function post(module, endpoint, auth, data) {
    return makeRequest("POST", module, endpoint, auth, data)
}

// Function to return PUT promise
function update(module, endpoint, auth, data) {
  return makeRequest("PUT", module, endpoint, auth, data);
}

// Function to return DELETE promise
function remove(module, endpoint, auth) {
  return makeRequest("DELETE", module, endpoint, auth);
}

export default {
  get,
  post,
  update,
  remove
};
