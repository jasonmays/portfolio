import * as React from "react"
import Container from 'react-bootstrap/Container';
import Navbar from "./navbar/navbar"

const Layout = ({ children, pageInfo }) => {
  return (
    <Container>
      <Navbar pageInfo={pageInfo} />
      {children}
    </Container>
  )
}

export default Layout