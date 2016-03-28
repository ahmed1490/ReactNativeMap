'use strict';

export const SET_MAP_REGION = 'SET_MAP_REGION'
export const SET_POSITION = 'SET_POSITION'
export const SET_REGION_UPDATING = 'SET_REGION_UPDATING'


export function setMapRegion(region) {
  return { 
    type: SET_MAP_REGION,
    payload: region 
  }
}

export function setPosition(position) {
  return { 
    type: SET_POSITION,
    payload: position 
  }
}

export function setRegionUpdating(isUpdating) {
  return { 
    type: SET_REGION_UPDATING,
    payload: isUpdating 
  }
}
