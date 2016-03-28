import { 
  SET_POSITION,
  SET_JOURNEY_START,
  SET_OPTIONS_VISIBLE
} from '../actions/journey'


// state in Redux
// journey: {...}

const initialState = {
    position: {},
    start: 'Rosenthalar Platz',
    isOptionsVisible: false
};

export default function setJourney(state = initialState, action) {
  switch (action.type) {
    case SET_POSITION:
      return {
        ...state,
        position: action.payload
      }

    case SET_JOURNEY_START:
      return {
        ...state,
        start: action.payload
      }

    case SET_OPTIONS_VISIBLE:
      return {
        ...state,
        isOptionsVisible: action.payload
      }


    default:
      return state
  }
}