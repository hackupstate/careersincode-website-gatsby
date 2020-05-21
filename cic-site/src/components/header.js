import React from "react"
import jumboStyles from "./jumbotron.module.css"

const Header = ({ children }) => (
  <header className={(jumboStyles.jumboContainer, jumboStyles.jumboBannerImg)}>
    {children}
  </header>
)

export default Header
