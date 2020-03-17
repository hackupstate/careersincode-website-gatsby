// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import NavComponent from "./nav"
// import TechGarden from "../images/light-hero-1.jpg"
import JumbotronComponent from "./jumbotron"
import content from "../content/content.json"

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: "black",
      // marginBottom: `1.45rem`,
    }}
  >
    <NavComponent />
    <JumbotronComponent heading={content.ui.index_jumbotron.heading} />
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
