import * as actionTypes from '../actions/actions';
import { updateObject } from '../utility';


const initialState = {
  username: '',
  animal: '',
  birthday: '',
  error: '',
  isVerified: true,
  loading: false
}

const fetchProfileSuccess = (state, action) => {
  const { animal, username } = action.payload;
  return updateObject(state, {
    username,
    animal,
    loading: false
  })
}

const fetchProfileStart = (state, action) => {
  return updateObject(state, {
    loading: true
  })
}

const fetchProfileFail = (state, action) => {
  return updateObject(state, {
    error: action.payload,
    loading: false
  })
}

const fetchUserVerifySuccess = (state, action) => {
  return updateObject(state, {
    isVerified: action.payload,
  })
}

const fetchUserVerifyFail = (state, action) => {
  return updateObject(state, {
    error: action.payload,
  })
}

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case actionTypes.FETCH_PROFILE_SUCCESS:
      return fetchProfileSuccess(state, action)

    case actionTypes.FETCH_PROFILE_FAIL:
      return fetchProfileFail(state, action)

    case actionTypes.FETCH_PROFILE_START:
      return fetchProfileStart(state, action)

    case actionTypes.FETCH_USER_VERIFY_FAIL:
      return fetchUserVerifyFail(state, action)

    case actionTypes.FETCH_USER_VERIFY_SUCCESS:
      return fetchUserVerifySuccess(state, action)

    default: return state
  }
}

export default reducer;


