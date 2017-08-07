import { combineReducers } from 'redux';

const initialState = {
  sideNavIsOpen:false
}

// export default combineReducers (
//   {sideNavIsOpen}
// )
  
export const sideNavIsOpen = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_SIDENAV':
      return {...state, sideNavIsOpen:!state.sideNavIsOpen}
    default:
      return state
  }
}