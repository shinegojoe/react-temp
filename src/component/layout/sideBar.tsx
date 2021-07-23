import React, { useState } from "react";

// ui component ...
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

// reducer ....
import { useSelector, useDispatch } from "react-redux"
import layoutStyleAction, { SideBarState } from "../../action/layoutStyle.action"
import authAction, { AuthState } from '../../action/auth.action'


// router ...
import { withRouter, RouteComponentProps } from "react-router-dom"

// stytle ...
import style from '../../sass/sidebar.module.sass'
// console.log('sss', style)

interface ISidebarItem {
  name: string
  path: string
}

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

const SwipeableTemporaryDrawer = (props: RouteComponentProps)=> {
  // const [ isOpen, setIsOpen ] = useState(false)
  const pageList: Array<ISidebarItem> = [
    {name: 'page1', path: '/page1'},
    {name: 'page2', path:'/page2'}
  ]

  console.log('sidebar', props.history)
  const classes = useStyles();
  const dispatch = useDispatch();

  const layoutState = useSelector((state: any) => {
    return state.layoutReducer as SideBarState;
  });

  // console.log("lll", layoutState);
  const isOpen = layoutState.isOpen;

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      // setIsOpen(open)
      console.log('sidebar click')
      const action = layoutStyleAction.sideBarAction(open);
      dispatch(action);
    };

  const itemClick = (path: any) => {
    // console.log('click')
    props.history.push({
      pathname: path
    })
  }

  const logoutClick = () => {
    const action = authAction.authAction(false)
    dispatch(action)
    
  }

  const list = () => (
    <div
      // className={classes.list}
      className={style.list}

      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List >
        {pageList.map((item: ISidebarItem, index)=> {
          return <ListItem button key={item.name} onClick={()=> {
            itemClick(item.path)
          }}>
            <ListItemIcon>
              <InboxIcon></InboxIcon>
            </ListItemIcon>
            <ListItemText primary={item.name} />
          </ListItem>
        })}
      </List>
      <Divider />
      <List>
        <ListItem button onClick={itemClick}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="page1" />
        </ListItem>
      </List>
      <ListItem className={style.xx} button onClick={logoutClick}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="logout" />
        </ListItem>
    </div>
  );

  return (
    <div >
      <React.Fragment>
        <SwipeableDrawer
          anchor={"left"}
          open={isOpen}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          {list()}
        
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}

export default withRouter(SwipeableTemporaryDrawer)