import * as React from "react"
import Layout from "../components/Layout"
import Container from 'react-bootstrap/Container';

const Details = () => {
  return (
    <Layout>
      <Container>
        <p>
          Details Page
        </p>
      </Container>
    </Layout>
  )
}

export default Details

export const Head = () => <title>Details</title>