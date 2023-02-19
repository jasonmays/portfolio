import * as React from "react";
import Layout from "../components/Layout";
import Intro from "../components/home/intro";

const Home = () => {
  return (
    <Layout pageInfo={{ pageName: "home" }}>
      <Intro />
    </Layout>
  )
}

export default Home

export const Head = () => <title>Home</title>