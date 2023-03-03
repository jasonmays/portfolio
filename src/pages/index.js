import * as React from "react";
import '../theme/theme.scss';
import { Router } from "@reach/router";
import Home from "./home";
import About from "./about";
import Projects from "./projects";

const IndexPage = () => {
  
  return (
    <Router>
      <Home path="/" />
      <About path="/about" />
      <Projects path="/projects" />
    </Router>
  )
}

export default IndexPage