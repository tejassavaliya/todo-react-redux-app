import { FETCH_POSTS, NEW_POST } from "./types";

export const fetchPosts = () => dispatch => {

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts => dispatch({
            type:FETCH_POSTS,
            payload: posts
        }));
};

export const createPosts = (postData) => dispatch => {

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
        .then(res => res.json())
        .then(posts => dispatch({
            type:NEW_POST,
            payload: postData
        }));
};

// https://www.youtube.com/watch?v=93p3LxR9xfM
