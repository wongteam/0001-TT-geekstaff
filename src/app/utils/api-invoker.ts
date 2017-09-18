import * as fetch from 'isomorphic-fetch';

// base headers
const HEADERS = {
  'Content-Type': 'application/json',
};

/**
 * Invoke API using isomorphic fetch lib and return promise
 * @param {string} method
 * @param {string} endPoint
 * @param {{}} body
 * @returns {Promise<any>}
 */
export function invokeAPI(method: string, endPoint: string, body = {}): Promise<any> {
  const fetchOptions = {
    method,
    headers: HEADERS,
  };

  if (method !== 'get' && method !== 'delete') {
    fetchOptions['body'] = JSON.stringify(body); // tslint:disable-line
  }

  return fetch(endPoint, fetchOptions)
    .then((res: any) => {
      if (res.ok) {
        return res;
      } else {
        return res.json()
          .then((err: any) => {
            throw new Error(JSON.stringify(err));
          });
      }
    })
    .then((res: any) => res.json());
}
