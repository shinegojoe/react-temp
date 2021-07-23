import { Route, Switch, Redirect } from "react-router-dom"

// import PageMain from "../component/page/main"
// import Home from '../component/main/main'
import Login from '../page/login'
import Home from "../page/home"
import Page1 from "../page/page1"
import Page2 from "../page/page2"



const Router = () => {
  
  return (
    <div>
      <Switch>
        <Route path="/login" component={Login}></Route>
        <Route path="/home" component={Home}></Route>
        <Route path="/page1" component={Page1}></Route>
        <Route path="/page2" component={Page2}></Route>
        <Redirect to="/login"></Redirect>
      </Switch>
    </div>
  );
};

export { Router };
