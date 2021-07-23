import { IAction } from './IAction'


export type ModePayload = {
  mode: string
}

export type ThemeState = {
  mode: string

}


const baseString = 'theme'
export const actionString = {
  changeMode: `${baseString}/changeMode`
}


const changeMode = (mode: string) => {

  const payload: ModePayload = {
    mode: mode
  }
  
  const action: IAction<ModePayload> = {
    type: actionString.changeMode,
    payload
  }
  return action
}



export default { changeMode }