import axios from 'axios';
import postEndpoint from './posts';

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 1000
});

const applyInstance = endpoint => {
  const newEndpoint = {}
  for (const key in endpoint) {
    if (Object.hasOwnProperty.call(endpoint, key)) {
      const method = endpoint[key];
      newEndpoint[key] = (...args) => method(...[instance, ...args])
    }
  }

  return newEndpoint;
}

export const posts = applyInstance(postEndpoint);

const api = { posts }

export default api;