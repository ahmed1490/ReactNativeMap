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
    cars: [
      {id: 1, latitude: 37.33260575262121, longitude: -122.0307375036871, duration: '3 mins'},
      {id: 2, latitude: 37.33340172650372, longitude: -122.0321321962561, duration: '6 mins'}
    ]
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