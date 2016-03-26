'use strict';
//https://github.com/gbuszmicz/simple-login-app/blob/master/src%2Factions%2Fuser.js
// import { removeUser } from '../store/asyncStorage'
// import { AsyncStorage } from 'react-native'
// import React from 'react-native'


export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE'


export function loginRequest(creds) {
  return { 
    type: LOGIN_REQUEST,
    creds 
  }
}
export function loginSuccess(user) {
  return { 
    type: LOGIN_SUCCESS, 
    user 
  }
}
export function loginFailure(errorMessage) {
  return { 
    type: LOGIN_FAILURE, 
    errorMessage 
  }
}

export function logoutRequest() {
  return { 
    type: LOGOUT_REQUEST
  }
}
export function logoutSuccess() {
  return { 
    type: LOGOUT_SUCCESS
  }
}

export function logoutFailure(errorMessage) {
  return { 
    type: LOGOUT_FAILURE, 
    errorMessage 
  }
}

// Logs the user out
// export function logoutUser() {
//   return dispatch => {
//     dispatch(logoutRequest())
//     // removeUser().then(dispatch(logoutSuccess()))
//   }
// }