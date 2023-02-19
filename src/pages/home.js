import * as React from "react";
import Layout from "../components/Layout";
import Banner from "../components/home/banner";

const Home = () => {
  return (
    <Layout pageInfo={{ pageName: "home" }}>
      <Banner />
    </Layout>
  )
}

export default Home

export const Head = () => <title>Home</title>