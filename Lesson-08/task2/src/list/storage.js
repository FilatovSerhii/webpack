/* eslint-disable import/no-mutable-exports */
export const baseUrl = 'https://6141db7d4d16670017ba29f9.mockapi.io/api/v1/task';

export function getItem() {
  return fetch(baseUrl).then(response => response.json());
}

export function setItem(userData) {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(userData),
  }).then(response => response.json());
}
