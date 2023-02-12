import * as React from "react"
import { Router } from "@reach/router"
import Layout from "../components/Layout"
import Home from "./home"
import Details from "./details"
import Profile from "./profile"

const IndexPage = () => {
  return (
    <Layout>
      <Router>
        <Home path="/"/>
        <Details path="/details"/>
        <Profile path="/profile"/>
      </Router>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Router</title>