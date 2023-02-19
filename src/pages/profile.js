import * as React from "react"
import Layout from "../components/Layout"

const Profile = () => {
  return (
    <Layout pageInfo={{ pageName: "profile" }}>
        <p>
          Profile Page
        </p>
    </Layout>
  )
}

export default Profile

export const Head = () => <title>Profile</title>