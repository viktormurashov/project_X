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
              <Link to="/employee" className={classes.link}>
                <ListItem button>
                  {/* <ListItemIcon>
                    <WorkIcon />
                  </ListItemIcon> */}
                  <ListItemText primary={"Employee"} />
                </ListItem>
              </Link>
              <Link to="/finalsalary" className={classes.link}>
                <ListItem button>
                  {/* <ListItemIcon>
                    <PostAddIcon />
                  </ListItemIcon> */}
                  <ListItemText primary={"Final salary"} />
                </ListItem>
              </Link>
              <Link to="/typework" className={classes.link}>
                <ListItem button>
                  {/* <ListItemIcon>
                    <AssignmentIndIcon />
                  </ListItemIcon> */}
                  <ListItemText primary={"Type of work"} />
                </ListItem>
              </Link>
              <Link to="/work" className={classes.link}>
                <ListItem button>
                  {/* <ListItemIcon>
                    <PersonIcon />
                  </ListItemIcon> */}
                  <ListItemText primary={"Work"} />
                </ListItem>
              </Link>
              <Link to="/employeework" className={classes.link}>
                <ListItem button>
                  {/* <ListItemIcon>
                    <PersonAddIcon />
                  </ListItemIcon> */}
                  <ListItemText primary={"Employee Work"} />
                </ListItem>
              </Link>
          </List>
        </Drawer>
        <Switch>
        <Route exact={true} path="/" component={
          () => <StartPage/>
        }>
        </Route>
        <Route path="/employee" component={
          () => <Entity entityName='employee' publicName='Employee' id='Employee_code'/>
        }>
        </Route>
        <Route path="/finalsalary" component={
          () => <Entity entityName='finalsalary' publicName='Final salary' id='Final_salary_code'/>
        }>
        </Route>
        <Route path="/typework" component={
          () => <Entity entityName='typework' publicName='Type of work' id='Code_type_work'/>
        }>
        </Route>
        <Route path="/work" component={
          () => <Entity entityName='work' publicName='Work' id='Work_code'/>
        }>
        </Route>
        <Route path="/employeework" component={
          () => <Entity entityName='employeework' publicName='Employee work' id=''/>
        }>
        </Route>
        </Switch>
      </div>
    </Router>
  );
}
