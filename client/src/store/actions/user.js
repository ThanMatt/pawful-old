import * as actionTypes from './actions';
import axios from '../../axios-user';

export const usersJoined = (users) => {
  return {
    type: actionTypes.USERS_JOINED,
    payload: users
  }
}

export const usersStart = () => {
  return {
    type: actionTypes.USERS_START
  }
}

export const usersFail = (err) => {
  return {
    type: actionTypes.USERS_FAIL,
    payload: err
  }
}

export const getUsers = () => {
  return dispatch => {
    dispatch(usersStart());
    axios.get('/')
      .then((response) => {
        dispatch(usersJoined(response.data))
      }).catch((err) => {
        console.log(err)
        dispatch(usersFail(err))
      })
  }
}