import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CssBaseline } from '@material-ui/core';

import LandingPage from "./components/LandingPage";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import ProjectsPage from "./components/ProjectsPage";
import About from "./components/About";
import Yuansfer from "./components/Yuansfer";
import Footer from "./components/Footer";
import FooterWhite from "./components/FooterWhite";
import PuppyLuv from "./components/PuppyLuv";

export default function App() {
  return (
  <div>
  <Router>
    <CssBaseline />
    <NavBar/>
    <Switch>
      <Route exact path="/">
        <LandingPage/>
        <Projects/>
        <Footer/>
      </Route>
      <Route exact path="/about">
        <About/>
        <Footer/>
      </Route>
      <Route exact path="/yuansfer">
        <Yuansfer/>
        <FooterWhite/>
      </Route>
      <Route exact path="/puppyluv">
        <PuppyLuv/>
        <FooterWhite/>
      </Route>
      <Route exact path="/projects">
        <ProjectsPage/>
        <Footer/>
      </Route>
    </Switch>
  </Router>
  </div>
  );
};