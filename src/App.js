import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

import LandingPage from "./components/LandingPage";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "Kiwi Maru",
    backgroundColor: 'yellow',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundAttachment: 'flex',
    backgroundPosition: 'center',
    backgroundImage: `url('https://micrio.vangoghmuseum.nl/iiif/TZCqF/full/1280,/0/default.jpg?hash=_FqO0rAhuNsZ7ObVCZ6wgqpv_25KhGr4PStqoLnHnhU')`,
  },
}))

export default function App() {
  const classes = useStyles();

  return (
  <div className={classes.root}>
  <Router>
    <NavBar/>
      <Route exact path="/">
        <LandingPage/>
      </Route>
      <Route exact path="/projects">
        <Projects/>
      </Route>
      <Route exact path="/contact">
        <Contact/>
      </Route>
  </Router>
  </div>
  );
};