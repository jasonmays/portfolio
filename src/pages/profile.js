import * as React from "react"
import Layout from "../components/Layout"
import Container from 'react-bootstrap/Container';

const Profile = () => {
  return (
    <Layout>
      <Container>
        <p>
          Profile Page
        </p>
      </Container>
    </Layout>
  )
}

export default Profile

export const Head = () => <title>Profile</title>