import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

import LandingPage from "./components/LandingPage";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'yellow',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundAttachment: 'flex',
  },
}))

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Router>
        <Switch>
          <Route exact path="/">
            <NavBar/>
            <LandingPage/>
          </Route>
          <Route exact path="/projects">
            <Projects/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};