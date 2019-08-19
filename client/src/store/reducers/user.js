import * as actionTypes from '../actions/actions';
import { updateObject } from '../utility';


const initialState = {
  usersJoined: [],
  loading: false
}

const usersJoined = (state, action) => {
  return updateObject(state, {
    loading: false,
    usersJoined: action.payload
  })
}

const usersStart = (state, action) => {
  return updateObject(state, {
    loading: true
  })
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USERS_START: return usersStart(state, action)
    case actionTypes.USERS_JOINED: return usersJoined(state, action)
    default: return state
  }
}

export default reducer;


