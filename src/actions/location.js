'use strict';

export const SET_MAP_REGION = 'SET_MAP_REGION'
// export const SET_POSITION = 'SET_POSITION'
export const SET_REGION_UPDATING = 'SET_REGION_UPDATING'

// let regionTimer, isSettingRegion = false;


// export function setMapRegion(region) {
  // return { 
  //   type: SET_MAP_REGION,
  //   payload: region
  // }
// }

// export function setMapRegion(region) {
//     return (dispatch, getState) => {
//         if(isSettingRegion){
//             console.log('Region skipping updating')
//             clearTimeout(regionTimer);
//             regionTimer = undefined;
//         }
//         isSettingRegion = true;

//         console.log('Region updating timer')
//         regionTimer =   setTimeout(() => {
//             console.log('Region - DISPATCHING')
//             isSettingRegion = false;
//             // dispatch(this.props.setStart({latitude: region.latitude, longitude: region.longitude});)
//             dispatch({ 
//                 type: SET_MAP_REGION,
//                 payload: region
//             });
//             dispatch(setRegionUpdating(false))
//         }
//         , 600); 
//     }
// }

// export function setPosition(position) {
//   return { 
//     type: SET_POSITION,
//     payload: position 
//   }
// }

// export function setRegionUpdating(isUpdating) {
//   return { 
//     type: SET_REGION_UPDATING,
//     payload: isUpdating 
//   }
// }
