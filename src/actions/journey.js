'use strict';

export const SET_POSITION = 'SET_POSITION'
export const SET_JOURNEY_START = 'SET_JOURNEY_START'
export const SET_OPTIONS_VISIBLE = 'SET_OPTIONS_VISIBLE'


export function setPosition(position) {
  return { 
    type: SET_POSITION,
    payload: position 
  }
}

export function setJourneyStart(start_point) {
  return { 
    type: SET_JOURNEY_START,
    payload: start_point 
  }
}

export function setOptionsVisible(isOptionsVisible) {
  return { 
    type: SET_OPTIONS_VISIBLE,
    payload: isOptionsVisible 
  }
}