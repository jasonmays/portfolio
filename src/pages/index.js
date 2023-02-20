import * as React from "react";
import '../theme/theme.scss';
import { Router } from "@reach/router";
import Home from "./home";
import Details from "./details";
import Profile from "./profile";
import Projects from "./projects";

const IndexPage = () => {
  
  return (
    <Router>
      <Home path="/" />
      <Details path="/details" />
      <Profile path="/profile" />
      <Projects path="/projects" />
    </Router>
  )
}

export default IndexPage