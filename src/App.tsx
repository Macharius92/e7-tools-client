//import './App.css';
import React, { useState } from 'react';
import HeaderMui from './components/headermui';
import ResponsiveDrawer from './components/responsivedrawer';
import Signedin from './components/signedin';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  }),
);

const App = () => {

const classes = useStyles();
  const [mobileDrawerOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileDrawerOpen);
  };

  return (
    <div className={classes.root}>
      <Router>
        <HeaderMui handleDrawer={handleDrawerToggle} mobileDrawerOpen={mobileDrawerOpen} />
        <ResponsiveDrawer handleDrawer={handleDrawerToggle} mobileDrawerOpen={mobileDrawerOpen} />
        <main className={classes.content}>
          <Toolbar />
          <Switch>
              <Route path="/signedin">
                <Signedin></Signedin>
              </Route>
              <Route exact path="/">
                Home
              </Route>
            </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;