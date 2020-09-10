import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import './App.css';

import Entity from './Components/entity';

import {
  BrowserRouter as Router,
  Switch, Route, Link
} from "react-router-dom";
import StartPage from './Components/startPage'
import {
  Drawer, List, ListItem,
  ListItemIcon, ListItemText,
} from "@material-ui/core";

import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import WorkIcon from '@material-ui/icons/Work';
import PersonIcon from '@material-ui/icons/Person';
import PostAddIcon from '@material-ui/icons/PostAdd';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

const useStyles = makeStyles((theme) => ({
  drawerPaper: { width: 'inherit' },
  link: {
    textDecoration: 'none',
    color: theme.palette.text.primary
  }
}));

export default function App() {
  const classes = useStyles();

  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Drawer
          style={{ width: '220px' }}
          variant="persistent"
          anchor="left"
          open={true}
          classes={{ paper: classes.drawerPaper }}
        >
          <List>
              <Link to="/client" className={classes.link}>
                <ListItem button>
                  <ListItemText primary={"Client"} />
                </ListItem>
              </Link>
              <Link to="/discount" className={classes.link}>
                <ListItem button>
                  <ListItemText primary={"Discount"} />
                </ListItem>
              </Link>
              <Link to="/room" className={classes.link}>
                <ListItem button>
                  <ListItemText primary={"Room"} />
                </ListItem>
              </Link>
              <Link to="/settling" className={classes.link}>
                <ListItem button>
                  <ListItemText primary={"Settling"} />
                </ListItem>
              </Link>
              <Link to="/discountsettling" className={classes.link}>
                <ListItem button>
                  <ListItemText primary={"Discount and Settling"} />
                </ListItem>
              </Link>
          </List>
        </Drawer>
        <Switch>
        <Route exact={true} path="/" component={
          () => <StartPage/>
        }>
        </Route>
        <Route path="/client" component={
          () => <Entity entityName='client' publicName='Client' id='ClientID'/>
        }>
        </Route>
        <Route path="/room" component={
          () => <Entity entityName='room' publicName='Room' id='RoomID'/>
        }>
        </Route>
        <Route path="/discount" component={
          () => <Entity entityName='discount' publicName='Discount' id='DiscountID'/>
        }>
        </Route>
        <Route path="/settling" component={
          () => <Entity entityName='settling' publicName='Settling' id='SettlingID'/>
        }>
        </Route>
        <Route path="/discountsettling" component={
          () => <Entity entityName='discountsettling' publicName='Discount and Settling' id=''/>
        }>
        </Route>
        </Switch>
      </div>
    </Router>
  );
}
