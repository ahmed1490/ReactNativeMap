import { 
  SET_START_POSITION,
  SET_END_POSITION,
  SET_PLACE_START,
  SET_PLACE_END,
  SET_OPTIONS_VISIBLE,
  SET_LOCATION_SELECTION
} from '../actions/journey'


// state in Redux
// journey: {...}

const initialState = {
    start: {},
    end: {},
    startPosition: {},
    endPosition: {},
    
    isOptionsVisible: false,
    locationSelection: undefined //'start'/'end'
};

export default function setJourney(state = initialState, action) {
  switch (action.type) {
    case SET_START_POSITION:
      return {
        ...state,
        startPosition: action.payload
      }

    case SET_END_POSITION:
      return {
        ...state,
        endPosition: action.payload
      }

    case SET_PLACE_START:
      return {
        ...state,
        start: action.payload
      }

    case SET_PLACE_END:
      return {
        ...state,
        end: action.payload
      }

    case SET_OPTIONS_VISIBLE:
      return {
        ...state,
        isOptionsVisible: action.payload
      }

    case SET_LOCATION_SELECTION:
      return {
        ...state,
        locationSelection: action.payload
      }


    default:
      return state
  }
}