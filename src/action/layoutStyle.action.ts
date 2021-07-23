import { IAction } from './IAction'


export type SideBarPayload = {
  isOpen: boolean
}

export type SideBarState = {
  isOpen: boolean

}


const baseString = 'layout'
export const actionString = {
  isOpen: `${baseString}/isOpen`
}


const sideBarAction = (isOpen: boolean) => {

  const payload: SideBarPayload = {
    isOpen: isOpen
  }
  
  const action: IAction<SideBarPayload> = {
    type: actionString.isOpen,
    payload
  }
  return action
}



export default { sideBarAction }