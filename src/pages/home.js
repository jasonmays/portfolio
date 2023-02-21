import * as React from "react";
import Layout from "../components/Layout";
import Intro from "../components/home/intro/intro";
import Projects from "../components/home/projects/projectsHome";

const Home = () => {
  return (
    <Layout pageInfo={{ pageName: "home" }}>
      <Intro />
      <Projects />
    </Layout>
  )
}

export default Home

export const Head = () => <title>Home</title>