import React from "react"
import { Link } from "gatsby"
import { Container } from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"

const Navbar = () => {
  return (
    <Container>
      <div class="navBar">
        <Link to="/page-2/">Go to page 2</Link>
        <br />
        <Link to="/alumni/">Alumni Page</Link>
      </div>
    </Container>
  )
}

export default Navbar
