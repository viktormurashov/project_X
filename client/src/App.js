import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import './App.css';

import Entity from './Components/entity';

import {
  BrowserRouter as Router,
  Switch, Route, Link
} from "react-router-dom";

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
              <Link to="/typeofwork" className={classes.link}>
                <ListItem button>
                  <ListItemIcon>
                    <WorkIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Type of work"} />
                </ListItem>
              </Link>
              <Link to="/position" className={classes.link}>
                <ListItem button>
                  <ListItemIcon>
                    <PostAddIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Position"} />
                </ListItem>
              </Link>
              <Link to="/deal" className={classes.link}>
                <ListItem button>
                  <ListItemIcon>
                    <AssignmentIndIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Deal"} />
                </ListItem>
              </Link>
              <Link to="/employer" className={classes.link}>
                <ListItem button>
                  <ListItemIcon>
                    <PersonIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Employer"} />
                </ListItem>
              </Link>
              <Link to="/jobseeker" className={classes.link}>
                <ListItem button>
                  <ListItemIcon>
                    <PersonAddIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Job seeker"} />
                </ListItem>
              </Link>
          </List>
        </Drawer>
        <Switch>
        <Route path="/typeofwork" component={
          () => <Entity entityName='typeofwork' publicName='Type of work' id='WorkID'/>
        }>
        </Route>
        <Route path="/position" component={
          () => <Entity entityName='positions' publicName='Position' id='PositionID'/>
        }>
        </Route>
        <Route path="/deal" component={
          () => <Entity entityName='deal' publicName='Type of work' id='DealID'/>
        }>
        </Route>
        <Route path="/employer" component={
          () => <Entity entityName='employer' publicName='Employer' id='EmployerID'/>
        }>
        </Route>
        <Route path="/jobseeker" component={
          () => <Entity entityName='jobseeker' publicName='Job Seeker' id='SeekerID'/>
        }>
        </Route>
        </Switch>
      </div>
    </Router>
  );
}
