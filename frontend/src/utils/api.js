import uuid from 'uuid';

//
// SETUP
//
const api = 'http://localhost:3001';

let token = localStorage.token;
if (!token) {
  token = localStorage.token = Math.random().toString(36).substr(-8);
}

const headers = {
  Accept: 'application/json',
  Authorization: token
};

//
// CATEGORIES
//
export const getCategories = () =>
  fetch(`${api}/categories`, { headers })
    .then(res => res.json())
    .then(data => data.categories);

//
// POSTS
//
export const getPost = id =>
  fetch(`${api}/posts/${id}`, { headers })
    .then(res => res.json());

export const getPosts = () =>
  fetch(`${api}/posts`, { headers })
    .then(res => res.json())
    .then(posts => posts.filter(post => !post.deleted));

export const getPostsByCategory = category =>
  fetch(`${api}/${category}/posts`, { headers })
    .then(res => res.json());

export const createPost = post =>
  fetch(`${api}/posts`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      ...post,
      id: uuid(),
      timestamp: Date.now()
    })
  }).then(res => res.json());

export const editPost = ({ id, title, body }) =>
  fetch(`${api}/posts/${id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title,
      body,
      timestamp: Date.now()
    })
  }).then(res => res.json());

export const deletePost = id =>
  fetch(`${api}/posts/${id}`, {
    method: 'DELETE',
    headers
  });

export const votePost = (id, option) =>
  fetch(`${api}/posts/${id}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      option
    })
  }).then(res => res.json());

//
// COMMENTS
//
export const getComments = postId =>
  fetch(`${api}/posts/${postId}/comments`, { headers })
    .then(res => res.json());

export const createComment = comment =>
  fetch(`${api}/comments`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      ...comment,
      id: uuid(),
      timestamp: Date.now()
    })
  }).then(res => res.json());

export const editComment = (id, body) =>
  fetch(`${api}/comments/${id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      body,
      timestamp: Date.now()
    })
  }).then(res => res.json());

export const deleteComment = id =>
  fetch(`${api}/comments/${id}`, {
    method: 'DELETE',
    headers
  });

export const voteComment = (id, option) =>
  fetch(`${api}/comments/${id}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      option
    })
  }).then(res => res.json());
