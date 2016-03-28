import { 
  LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, 
  LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILURE 
} from '../actions/user'


// User state in Redux
// currentUser: {...}

const initialState = {
  isAuthenticated: true,
  isFetching: false,
  user: {
    username: "gonzalo",
    uid: 12312131231,
    profilePicture: "http://....",
    fullname: "Gonzalo F. Buszmicz"
  },
  errorMessage: ""
};

export default function currentUser(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isAuthenticated: false,
        isFetching: true,
        user: {
          username: action.creds.username
        },
        errorMessage: ''
      }
    case LOGIN_SUCCESS:
      return state

    case LOGIN_FAILURE:
      return state

    case LOGOUT_REQUEST:
      return state

    case LOGOUT_SUCCESS:
      return state

    case LOGOUT_FAILURE:
      return state

    default:
      return state
  }
}