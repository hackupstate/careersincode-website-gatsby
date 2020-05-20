import React from "react"

const Header = ({ children }) => (
  <header
    style={{
      background: "black",
      width: "100%",
    }}
  >
    {children}
  </header>
)

export default Header
