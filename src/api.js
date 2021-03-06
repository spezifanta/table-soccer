export const load = (url) => {
  return new Promise((resolve, reject) => {
    let request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.responseType = 'json';

    request.onload = function() {
      if (request.status === 200) {
        if (!request.response) {
          reject(new Error('Invalid Response'));
        }

        resolve(request.response)
      }

      reject(new Error(request.statusText));
    };

    request.onerror = function() {
      reject(new Error('Request Error'));
    };

    request.send();
  });
};

export const post = (url, data) => {
  return new Promise((resolve, reject) => {
    let request = new XMLHttpRequest();
    request.open('POST', url, true);
    request.setRequestHeader("Content-Type", "application/json");
    request.responseType = 'json';

    request.onload = function() {
      if (request.status === 200) {
        if (!request.response) {
          reject(new Error('Invalid Response'));
        }

        resolve(request.response)
      }

      reject(new Error(request.statusText));
    };

    request.onerror = function() {
      reject(new Error('Request Error'));
    };

    request.send(JSON.stringify(data));
  });
};
