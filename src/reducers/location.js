import { 
  SET_MAP_REGION,
  // SET_POSITION,
  SET_REGION_UPDATING
} from '../actions/location'


// state in Redux
// location: {...}

const initialState = {
    mapRegion: {},
    isRegionUpdating: false,
    // position: {}
};

export default function setLocation(state = initialState, action) {
  switch (action.type) {
    case SET_MAP_REGION:
      return {
        ...state,
        mapRegion: action.payload
      }

    // case SET_POSITION:
    //   return {
    //     ...state,
    //     position: action.payload
    //   }

    case SET_REGION_UPDATING:
      return {
        ...state,
        isRegionUpdating: action.payload
      }

    default:
      return state
  }
}