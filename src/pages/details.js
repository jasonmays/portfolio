import * as React from "react"
import Layout from "../components/Layout"

const Details = () => {
  return (
    <Layout pageInfo={{ pageName: "details" }}>
        <p>
          Details Page
        </p>
    </Layout>
  )
}

export default Details

export const Head = () => <title>Details</title>