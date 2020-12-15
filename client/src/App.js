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

import PersonIcon from '@material-ui/icons/Person';
import DescriptionIcon from '@material-ui/icons/Description';
import CategoryIcon from '@material-ui/icons/Category';
import PaymentIcon from '@material-ui/icons/Payment';

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
              <Link to="/document" className={classes.link}>
                <ListItem button>
                  <ListItemIcon>
                    <DescriptionIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Document"} />
                </ListItem>
              </Link>
              <Link to="/categoriesproducts" className={classes.link}>
                <ListItem button>
                  <ListItemIcon>
                    <CategoryIcon/>
                  </ListItemIcon>
                  <ListItemText primary={"Categories products"} />
                </ListItem>
              </Link>
              <Link to="/pricehistory" className={classes.link}>
                <ListItem button>
                  <ListItemIcon>
                    <PaymentIcon/>
                  </ListItemIcon>
                  <ListItemText primary={"Price history"} />
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
          
          </List>
        </Drawer>
        <Switch>
        <Route exact={true} path="/" component={
          () => <StartPage/>
        }>
        </Route>
        <Route path="/client" component={
          () => <Entity entityName='client' publicName='Client' id='ClientId'/>
        }>
        </Route>
        <Route path="/document" component={
          () => <Entity entityName='document' publicName='Document' id='DocumentId'/>
        }>
        </Route>
        <Route path="/categoriesproducts" component={
          () => <Entity entityName='categoriesproducts' publicName='Categories products' id='CategoriesProductsId'/>
        }>
        </Route>
        <Route path="/pricehistory" component={
          () => <Entity entityName='pricehistory' publicName='Price History' id='HistoryId'/>
        }>
        </Route>
        
        </Switch>
      </div>
    </Router>
  );
}
