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

import Protect from 'react-app-protect'
import 'react-app-protect/dist/index.css'

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
      <Protect
      sha512='EE26B0DD4AF7E749AA1A8EE3C10AE9923F618980772E473F8819A5D4940E0DB27AC185F8A0E1D5F84F88BC887FD67B143732C304CC5FA9AD8E6F57F50028A8FF'
      blur={true}
      styles={{
        input: { color: 'blue' },
        header: { fontSize: '20px' }
      }}
      >
        <Yuansfer/>
        <FooterWhite/>
      </Protect>
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