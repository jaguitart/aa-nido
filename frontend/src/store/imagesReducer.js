import { csrfFetch } from './csrf';

const LOAD_IMAGES = 'images/LOAD_IMAGES'
const ADD_IMAGE = 'images/ADD_IMAGE'
const EDIT_IMAGE = 'images/EDIT_IMAGE'
const REMOVE_IMAGE = 'images/REMOVE_IMAGE'


const loadImages = images => ({
  type: LOAD_IMAGES,
  payload: images
});

const addImage = image => ({
  type: ADD_IMAGE,
  payload: image
});

const editImage = image => ({
  type: EDIT_IMAGE,
  payload: image
});

const removeImage = image => ({
  type: REMOVE_IMAGE,
  payload: image
});

// SELECTORS
export const getAllImages = () => async dispatch => {
  const res = await fetch('/api/images');
  const data = await res.json();
  dispatch(loadImages(data));
  return data
}

export const addBirdImages = newBird => async dispatch => {
  const { imageTitle, imageBody, locationId, userId, albumId, imageUrl } = newBird
  const formData = new FormData();
  formData.append("imageTitle", imageTitle);
  formData.append("imageBody", imageBody);
  formData.append("locationId", locationId);
  formData.append("userId", userId);
  formData.append("albumId", albumId);
  if (imageUrl) formData.append("imageUrl", imageUrl);
  // for (let key of formData.entries()) {
  //   console.log(key[0] + ', ' + key[1])
  // }
  const res = await csrfFetch(`/api/images/add`, {
    method: "POST",
    headers: { "Content-Type": "multipart/form-data" },
    body: formData,
  });
  if (res.ok) {
    const addedBird = await res.json();
    dispatch(addImage(addedBird));
    return res;
  }
}

export const editBirdImage = (id, editedBird) => async (dispatch) => {
  const res = await csrfFetch(`/api/images/${id}/edit`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(editedBird)
  })
  if (res.ok) {
    const bird = await res.json();
    dispatch(editImage(bird));
    return res;
  }
}


export const removeBirdImage = (id) => async (dispatch) => {
  const res = await csrfFetch(`/api/images/${id}/delete`, {
    method: 'DELETE'
  });
  if (res.ok) {
    dispatch(removeImage(id))
  }
}

const initialState = {};

export default function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {

    case LOAD_IMAGES:
      newState = {}
      action.payload.map(image => newState[image.id] = image)
      return newState

    case ADD_IMAGE:
      newState = {
        ...state,
        [action.payload.id]: action.payload
      }
      return newState

    case EDIT_IMAGE:
      state[action.payload.id] = action.payload;
      newState = { ...state };
      return newState

    case REMOVE_IMAGE:
      newState = { ...state }
      delete newState[action.payload]
      return newState


    default:
      return state;
  }
}


//INITIAL STATE
// const initialState = {};

// export default function reducer(state = initialState, action) {
//   let newState;
//   switch (action.type) {

//     case LOAD_IMAGES:
//       newState = { ...state }
//       action.payload.images.map(image => newState[image.id] = image)
//       return newState


//     case ADD_IMAGE:
//       newState = {
//         ...state,
//         [action.payload.image.id]: action.payload.image
//       };
//       return newState

//     case EDIT_IMAGE:
//       state[action.payload.image.id] = action.payload.image;
//       newState = { ...state };
//       return newState

//     case REMOVE_IMAGE:
//       newState = { ...state };
//       delete newState[action.payload];
//       return newState;

//     default:
//       return state;
//   }
// }
