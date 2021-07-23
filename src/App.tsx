// import './App.css'
import { Router } from './router/router'
// import style from '../src/sass/app.module.sass'
import SideBar from './component/layout/sideBar'
import AppBar from './component/layout/appBar'
import { useSelector, useDispatch } from "react-redux"
import {AuthState} from './action/auth.action'


function App() {
  const authState = useSelector((state: any) => {
    return state.authReducer as AuthState
  });

  // console.log("lll", layoutState);
  const isAuth = authState.isAuth
  console.log('isAuth', isAuth)

  return (
    <div>
      {isAuth && <AppBar></AppBar>}
      <SideBar></SideBar>
      <Router></Router>
    </div>
  );
}

export default App
