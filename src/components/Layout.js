import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ children }) => {
  return (
    <main style={{ margin: `0 auto`, maxWidth: 650, padding: `0 1rem` }}>
      <nav>
        <Link to="/details">Details</Link>{" "}
        <Link to="/">Home</Link>{" "}
        <Link to="/profile">Profile</Link>
      </nav>
      {children}
    </main>
  )
}

export default Layout