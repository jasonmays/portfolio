import * as React from "react"
import Navbar from "./navbar/navbar"

const Layout = ({ children }) => {
  return (
    <main>
      <Navbar/>
      {children}
    </main>
  )
}

export default Layout