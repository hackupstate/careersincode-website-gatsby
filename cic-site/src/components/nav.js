import React from "react"
import {
  Container,
  Navbar,
  NavItem,
  Nav,
  NavLink,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
  NavbarBrand,
} from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import ComboLogo from "../images/combo-logo-white.png"

const NavComponent = () => {
  return (
    <Container fluid>
      <Navbar>
        <NavbarBrand href="/">
          <img
            src={ComboLogo}
            alt="Logo"
            style={{
              width: "auto",
              height: 30,
              marginTop: 15,
              display: "flex",
              justifyContent: "start",
            }}
          />
        </NavbarBrand>
        <Nav>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              About
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>
                <NavLink href="/mission/">Mission</NavLink>
              </DropdownItem>
              <DropdownItem>
                <NavLink href="/team/">Team</NavLink>
              </DropdownItem>
              <DropdownItem>
                <NavLink href="/press/">Press</NavLink>
              </DropdownItem>
              <DropdownItem>
                <NavLink href="/newsletters/">Newsletters</NavLink>
              </DropdownItem>
              <DropdownItem>
                <NavLink href="/testimonials/">Testimonials</NavLink>
              </DropdownItem>
              <DropdownItem>
                <NavLink href="/faq/">FAQ</NavLink>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <NavItem>
            <NavLink href="/alumni/">Alumni</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/instructors/">Instructors & TA's</NavLink>
          </NavItem>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Students
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>
                <NavLink href="/prospective/">Prospective</NavLink>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Classroom
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>
                <NavLink href="/speakers/">Guest Speakers</NavLink>
              </DropdownItem>
              <DropdownItem>
                <NavLink href="/schedule/">Schedule</NavLink>
              </DropdownItem>
              <DropdownItem>
                <NavLink href="/speakers/">Guest Speakers</NavLink>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <NavItem>
            <NavLink href="/partner/">Partners</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/outcomes/">Outcomes</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/contact/">Contact</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/jobs/">Jobs</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </Container>
  )
}

export default NavComponent
