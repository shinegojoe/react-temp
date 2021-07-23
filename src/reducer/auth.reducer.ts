
import { IAction } from '../action/IAction'
// import { TranslateHint, actionString, TranslateStyle } from '../action/translateStyle.action'
// import { actionString, SideBarPayload, SideBarState } from '../action/layoutStyle.action'

import { actionString, AuthPayload, AuthState } from '../action/auth.action'



let initState: AuthState = {
  isAuth: false
}

// const updateStyle = (state: TranslateHint, action: IAction<TranslateStyle>) => {
//   let newState = {...state}
//   newState.left = action.payload.left
//   newState.top = action.payload.top - 30
//   newState.word = action.payload.word
//   newState.isShow = true
//   return newState
// }

const isAuth = (state: AuthState, action: any) => {
  let newState = {...state}
  newState.isAuth = action.payload.isAuth
  return newState
}

const authReducer = (state=initState, action: IAction<any>) => {
  console.log('acc', action)
  
  if(action.type === actionString.isAuth) {
    return isAuth(state, action)
  }
  // if(action.type === actionString.isShow) {
  //   // return isShow(state, action)
  // }
  
  return state
}

export { authReducer }

