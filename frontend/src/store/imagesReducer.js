import { csrfFetch } from './csrf';

const LOAD_IMAGES = 'images/LOAD_IMAGES'
const ADD_IMAGE = 'images/ADD_IMAGE'
// const EDIT_IMAGE = 'images/EDIT_IMAGES'
// const REMOVE_IMAGE = 'images/REMOVE_IMAGES'


// ACTIONS
const loadImages = (images) => ({
  type: LOAD_IMAGES,
  images,
});

const addImage = (images) => ({
  type: ADD_IMAGE,
  images,
});

// SELECTORS
export const getAllImages = () => async (dispatch) => {
  const res = await fetch('/api/images');
  const images = await res.json();
  dispatch(loadImages(images));
}

export const addBirdImages = (newBird) => async (dispatch) => {
  const res = await csrfFetch('/api/images/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newBird)
  })
  if (res.ok) {
    const bird = await res.json();
    dispatch(addImage(bird));
    return res;
  }
}

//INITIAL STATE
const initialState = {};

// REDUCER
const imagesReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case LOAD_IMAGES:
      newState = { ...state }
      action.images.forEach(image => { newState[image.id] = image })
      return newState
    case ADD_IMAGE:
      //revisar
      newState = {
        ...state,
        [action.image?.id]: action.image
      };
      return newState
    default:
      return state;
  }
}

export default imagesReducer