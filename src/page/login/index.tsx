import { useSelector, useDispatch } from "react-redux"
import authAction from '../../action/auth.action'
import themeAction from '../../action/theme.action'


// ui component ...
import TextInput from '../../component/UI/textInput'
import BaseBtn from '../../component/UI/baseBtn'
import SwitchBtn from '../../component/UI/Switch'

// style ...
import style from '../../sass/page/login.module.sass'

import { ThemeContext } from '../../context/theme'
import { useContext } from 'react'

const Login = () => {
  const theme = useContext(ThemeContext)
  console.log('theme', theme)

  const dispatch = useDispatch()

  const loginClick = () => {
    const action = authAction.authAction(true)
    dispatch(action)
  }

  const switchUpdate = (val: boolean) => {
    console.log('switch update', val)
    const mode = val ? 'light' : 'dark'
    const action = themeAction.changeMode(mode)
    dispatch(action)
  }

  

  return (
    <div id={style.loginContainer}>
      {/* <div>this is login</div> */}
      {/* <button onClick={loginClick}>login</button> */}
      <div className={style.contentWrapper}>
        <div className={style.loginWrapper}>
          <div className={style.logoWrapper}></div>
          <div className={style.logoText}>hds-722</div>
          <div className={style.inputField}>
            <TextInput width='100%' fullWidth={true} label='account'></TextInput>
          </div>
          <div className={style.inputField}>
            <TextInput width='100%' fullWidth={true} label='password'></TextInput>
          </div>

          <div className={style.loginBtn}>
            <BaseBtn width='100%' height='46px' color='white' text='login' bgc={theme.primary}></BaseBtn>
          </div>
          <div className={style.selectionWrapper}></div>
          <div>
            <SwitchBtn update={switchUpdate} isOn={true}></SwitchBtn>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Login