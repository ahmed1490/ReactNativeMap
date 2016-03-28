import { combineReducers } from 'redux'
// import { combineReducers } from 'redux-immutablejs';
import user from './user'
import location from './location'
import journey from './journey'

export default combineReducers({
	user,
	location,
	journey
})