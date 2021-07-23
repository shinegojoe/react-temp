
import { IAction } from '../action/IAction'
// import { TranslateHint, actionString, TranslateStyle } from '../action/translateStyle.action'
// import { actionString, SideBarPayload, SideBarState } from '../action/layoutStyle.action'

import {ThemeState, actionString, ModePayload} from '../action/theme.action'


let initState: ThemeState = {
  mode: 'light'
}


const changeMode = (state: ThemeState, action: IAction<ModePayload>) => {
  let newState = {...state}
  newState.mode = action.payload.mode
  return newState
}

const themeReducer = (state=initState, action: IAction<any>) => {
  // console.log('acc', action)
  
  if(action.type === actionString.changeMode) {
    return changeMode(state, action)
  }
  // if(action.type === actionString.isShow) {
  //   // return isShow(state, action)
  // }
  
  return state
}

export { themeReducer }

