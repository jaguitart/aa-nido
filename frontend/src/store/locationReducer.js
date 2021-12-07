const LOAD_COUNTRIES = 'locations/LOAD_COUNTRIES'

// ACTIONS
const loadCountries = (countries) => ({
  type: LOAD_COUNTRIES,
  countries,
});

// SELECTORS
export const getAllCountries = () => async (dispatch) => {
  const res = await fetch('/api/locations');
  const countries = await res.json();
  dispatch(loadCountries(countries));
}

//INITIAL STATE
const initialState = {};

// REDUCER
const countriesReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case LOAD_COUNTRIES:
      newState = { ...state }
      action.countries.forEach(country => { newState[country.id] = country })
      return newState
    default:
      return state;
  }
}

export default countriesReducer