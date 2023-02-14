import * as React from "react"
import { Link } from "gatsby"
import Navbar from "./navbar/navbar"

const Layout = ({ children }) => {
  return (
    <main>
      <Navbar/>
      {children}
    </main>
  )
}

/*<nav>
        <Link to="/details">Details</Link>{" "}
        <Link to="/">Home</Link>{" "}
        <Link to="/profile">Profile</Link>
      </nav>*/

export default Layout