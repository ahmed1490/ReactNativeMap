'use strict';
import RNGeocoder from'react-native-geocoder';

export const SET_START_POSITION = 'SET_START_POSITION'
export const SET_END_POSITION = 'SET_END_POSITION'
export const SET_PLACE_START = 'SET_PLACE_START'
export const SET_PLACE_END = 'SET_PLACE_END'
export const SET_OPTIONS_VISIBLE = 'SET_OPTIONS_VISIBLE'
export const SET_LOCATION_SELECTION = 'SET_LOCATION_SELECTION'


export function setStart(location, placeData) {
  return (dispatch, getState) => {
    dispatch(setStartPosition(location));
    if( placeData ){
      dispatch(setPlaceStart(placeData));
      return;
    }

    setTimeout(
      () => getReverseGeocode(
              location,
              () => getState().journey.startPosition,
              (data) => dispatch(setPlaceStart(data))
            )
    , 600);
  };
}

export function setEnd(location, placeData) {
  return (dispatch, getState) => {
    dispatch(setEndPosition(location));
    if( placeData ){
      dispatch(setPlaceEnd(placeData));
      return;
    }

    setTimeout(
      () => getReverseGeocode(
              location,
              () => getState().journey.endPosition,
              (data) => dispatch(setPlaceEnd(data))
            )
    , 600);
  };
}

function getReverseGeocode(location, stateLocationFn, callback) {
  RNGeocoder.reverseGeocodeLocation(location)
    .then(data => {
      const { latitude, longitude } = stateLocationFn();

      if ( latitude != location.latitude || longitude != location.longitude ) {  //check its not changed again
        console.log('skipped updating', location, latitude, longitude);
        return;
      }

      callback({
          name: data[0].name,
          locality: data[0].locality
      });
      console.log('found for:', location, data[0]);
    })
    .catch(err => console.log('error with reverse geocode: ', err, location));
}

function setStartPosition(position) {
  return { 
    type: SET_START_POSITION,
    payload: position 
  }
}

function setPlaceStart(start_point) {
  return { 
    type: SET_PLACE_START,
    payload: start_point 
  }
}

function setEndPosition(position) {
  return {
    type: SET_END_POSITION,
    payload: position
  }
}

function setPlaceEnd(end_point) {
  return {
    type: SET_PLACE_END,
    payload: end_point
  }
}

export function setOptionsVisible(isOptionsVisible) {
  return {
    type: SET_OPTIONS_VISIBLE,
    payload: isOptionsVisible
  }
}

export function setLocationSelection(locationSelection) {
  return {
    type: SET_LOCATION_SELECTION,
    payload: locationSelection
  }
}