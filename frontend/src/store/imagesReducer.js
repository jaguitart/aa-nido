const LOAD_IMAGES = 'images/LOAD_IMAGES'
const ADD_IMAGE = 'images/ADD_IMAGES'
// const EDIT_IMAGE = 'images/EDIT_IMAGES'
// const REMOVE_IMAGE = 'images/REMOVE_IMAGES'


// ACTIONS
const loadImages = (images) => ({
  type: LOAD_IMAGES,
  images,
});

// const loadImages = (images) => ({
//   type: LOAD_IMAGES,
//   images,
// });

// SELECTORS
export const getAllImages = () => async (dispatch) => {
  const res = await fetch('/api/images');
  const images = await res.json();
  dispatch(loadImages(images));
}

//INITIAL STATE
const initialState = { };

// REDUCER
const imagesReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case LOAD_IMAGES:
      newState = { ...state }
      action.images.forEach(image => { newState[image.id] = image })
      return newState
    default:
      return state;
  }
}

export default imagesReducer