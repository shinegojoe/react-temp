import { IAction } from './IAction'


export type AuthPayload = {
  isAuth: boolean
}

export type AuthState = {
  isAuth: boolean

}


const baseString = 'auth'
export const actionString = {
  isAuth: `${baseString}/isAuth`
}


const authAction = (isAuth: boolean) => {

  const payload: AuthPayload = {
    isAuth: isAuth
  }
  
  const action: IAction<AuthPayload> = {
    type: actionString.isAuth,
    payload
  }
  return action
}



export default { authAction }