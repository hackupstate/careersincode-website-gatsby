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
import jumboStyles from "./jumbotron.module.css"

const NavComponent = () => {
  return (
    <Container fluid className={jumboStyles.jumboContainer}>
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
            <DropdownToggle nav caret className={jumboStyles.navLink}>
              About
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>
                <NavLink className={jumboStyles.dropdownLink} href="/mission/">
                  Mission
                </NavLink>
              </DropdownItem>
              <DropdownItem>
                <NavLink className={jumboStyles.dropdownLink} href="/team/">
                  Team
                </NavLink>
              </DropdownItem>
              <DropdownItem>
                <NavLink className={jumboStyles.dropdownLink} href="/press/">
                  Press
                </NavLink>
              </DropdownItem>
              <DropdownItem>
                <NavLink
                  className={jumboStyles.dropdownLink}
                  href="/newsletters/"
                >
                  Newsletters
                </NavLink>
              </DropdownItem>
              <DropdownItem>
                <NavLink
                  className={jumboStyles.dropdownLink}
                  href="/testimonials/"
                >
                  Testimonials
                </NavLink>
              </DropdownItem>
              <DropdownItem>
                <NavLink className={jumboStyles.dropdownLink} href="/faq/">
                  FAQ
                </NavLink>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <NavItem>
            <NavLink href="/alumni/" className={jumboStyles.navLink}>
              Alumni
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/instructors/" className={jumboStyles.navLink}>
              Instructors & TA's
            </NavLink>
          </NavItem>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret className={jumboStyles.navLink}>
              Classroom
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>
                <NavLink
                  className={jumboStyles.dropdownLink}
                  href="/prospective/"
                >
                  Prospective Students
                </NavLink>
              </DropdownItem>
              <DropdownItem>
                <NavLink className={jumboStyles.dropdownLink} href="/students/">
                  Current Students
                </NavLink>
              </DropdownItem>
              <DropdownItem>
                <NavLink className={jumboStyles.dropdownLink} href="/speakers/">
                  Speakers
                </NavLink>
              </DropdownItem>
              {/* <DropdownItem>
                <NavLink className={jumboStyles.dropdownLink} href="/schedule/">
                  Schedule
                </NavLink>
              </DropdownItem> */}
            </DropdownMenu>
          </UncontrolledDropdown>
          <NavItem>
            <NavLink href="/partner/" className={jumboStyles.navLink}>
              Partners
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/outcomes/" className={jumboStyles.navLink}>
              Outcomes
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/contact/" className={jumboStyles.navLink}>
              Contact
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/jobs/" className={jumboStyles.navLink}>
              Jobs
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </Container>
  )
}

export default NavComponent
