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
              <Link to="/payment" className={classes.link}>
                <ListItem button>
                  <ListItemIcon>
                    <WorkIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Payment"} />
                </ListItem>
              </Link>
              <Link to="/outlet" className={classes.link}>
                <ListItem button>
                  <ListItemIcon>
                    <PostAddIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Outlet"} />
                </ListItem>
              </Link>
              <Link to="/contract" className={classes.link}>
                <ListItem button>
                  <ListItemIcon>
                    <AssignmentIndIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Contract"} />
                </ListItem>
              </Link>
              <Link to="/client" className={classes.link}>
                <ListItem button>
                  <ListItemIcon>
                    <PersonIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Client"} />
                </ListItem>
              </Link>
              <Link to="/rent" className={classes.link}>
                <ListItem button>
                  <ListItemIcon>
                    <PersonAddIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Rent"} />
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
        <Route path="/contract" component={
          () => <Entity entityName='contract' publicName='Contract' id='ContractID'/>
        }>
        </Route>
        <Route path="/rent" component={
          () => <Entity entityName='rent' publicName='Rent' id='RentalID'/>
        }>
        </Route>
        <Route path="/outlet" component={
          () => <Entity entityName='outlets' publicName='Outlet' id='OutletID'/>
        }>
        </Route>
        <Route path="/payment" component={
          () => <Entity entityName='payment' publicName='Payment' id='PaymentID'/>
        }>
        </Route>
        </Switch>
      </div>
    </Router>
  );
}
