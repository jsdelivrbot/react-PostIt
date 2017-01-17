import { FETCH_POSTS, CREATE_POST } from './types';
import axios from 'axios';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=1123tOmSoUpYmOt';


export const fetchPosts = () => {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export const createPost = (props) => {
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, props);

  return {
    type: CREATE_POST,
    payload: request
  };
}

// export function createPost(props) {
//   const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, props);
//
//   return {
//     type: CREATE_POST,
//     payload: request
//   };
// }
