import * as React from "react"
import Layout from "../components/Layout"

const NotFoundPage = () => {
  return (
    <Layout pageInfo={{ pageName: "404" }}>
      <p>404 page</p>
    </Layout>
  )
}

export default NotFoundPage

export const Head = () => <title>Not found</title>
