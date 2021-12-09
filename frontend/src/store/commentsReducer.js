import { csrfFetch } from './csrf';

const LOAD_COMMENTS = 'comments/LOAD_COMMENTS'
const ADD_COMMENTS = 'comments/ADD_COMMENTS'
// const EDIT_COMMENTS = 'comments/EDIT_COMMENTS'
const REMOVE_COMMENTS = 'comments/REMOVE_COMMENTS'


// ACTIONS
const loadComments = comments => ({
  type: LOAD_COMMENTS,
  comments,
});

const addComment = comment => ({
  type: ADD_COMMENTS,
  comment,
});

const removeComment = comment => ({
  type: REMOVE_COMMENTS,
  comment,
});


// SELECTORS
export const getComments = () => async (dispatch) => {
  const res = await fetch('/api/comments');
  const comments = await res.json();
  dispatch(loadComments(comments));
};

export const addAComment = (newComment) => async (dispatch) => {
  const { imageId } = newComment
  const res = await csrfFetch(`/api/comments/${imageId}/addComment`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newComment)
  });
  if (res.ok) {
    const comment = await res.json();
    dispatch(addComment(comment));
    return res;
  }
}

export const removeAComment = (id) => async (dispatch) => {
  const res = await csrfFetch(`/api/comments/${id}/delete`, {
    method: 'DELETE'
  });
  if (res.ok) {
    dispatch(removeComment(id))
  }
}


const initialState = {};

const commentsReducer = (state = initialState, action) => {
  let newState = {};
  switch (action.type) {
    case LOAD_COMMENTS:
      newState = { ...state }
      action.comments.forEach(comment => { newState[comment.id] = comment })
      return newState
    case ADD_COMMENTS:
      newState = { ...state, [action.comment.id]: action.comment };
      return newState;
    case REMOVE_COMMENTS:
      newState = { ...state };
      delete newState[action.comment];
      return newState;
    default:
      return state;
  }
}


export default commentsReducer;