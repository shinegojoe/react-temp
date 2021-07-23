import { IAction } from '../action/IAction'
// import { TranslateHint, actionString, TranslateStyle } from '../action/translateStyle.action'
import { actionString, SideBarPayload, SideBarState } from '../action/layoutStyle.action'



let initState: SideBarState = {
  isOpen: false
}

// const updateStyle = (state: TranslateHint, action: IAction<TranslateStyle>) => {
//   let newState = {...state}
//   newState.left = action.payload.left
//   newState.top = action.payload.top - 30
//   newState.word = action.payload.word
//   newState.isShow = true
//   return newState
// }

const isSideBarOn = (state: SideBarState, action: IAction<SideBarPayload>) => {
  let newState = {...state}
  newState.isOpen = action.payload.isOpen
  return newState
}

const layoutReducer = (state=initState, action: IAction<any>) => {
  console.log('acc', action)
  
  if(action.type === actionString.isOpen) {
    return isSideBarOn(state, action)
  }
  // if(action.type === actionString.isShow) {
  //   // return isShow(state, action)
  // }
  
  return state
}

export { layoutReducer }

