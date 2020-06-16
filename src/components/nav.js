import React, { useState } from "react";
import {
  Container,
  Navbar,
  Collapse,
  NavbarToggler,
  NavItem,
  Nav,
  NavLink,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
  NavbarBrand,
} from "reactstrap";
// import "bootstrap/dist/css/bootstrap.min.css"
import ComboLogo from "../images/combo-logo-white.png";
import navStyles from "./nav.module.css";

const NavComponent = () => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <Container fluid className={navStyles.navContainer}>
      <Navbar dark expand="lg">
        <NavbarBrand href="/" className="mr-auto">
          <img src={ComboLogo} alt="Logo" className={navStyles.brandImg} />
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav className={("ml-auto", navStyles.navAlignment)}>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret className={navStyles.navLink}>
                About
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem className={navStyles.dropdownItem}>
                  <NavLink className={navStyles.dropdownLink} href="/mission/">
                    Mission
                  </NavLink>
                </DropdownItem>
                <DropdownItem className={navStyles.dropdownItem}>
                  <NavLink className={navStyles.dropdownLink} href="/team/">
                    Team
                  </NavLink>
                </DropdownItem>
                <DropdownItem className={navStyles.dropdownItem}>
                  <NavLink className={navStyles.dropdownLink} href="/press/">
                    Press
                  </NavLink>
                </DropdownItem>
                <DropdownItem className={navStyles.dropdownItem}>
                  <NavLink
                    className={navStyles.dropdownLink}
                    href="/newsletters/"
                  >
                    Newsletters
                  </NavLink>
                </DropdownItem>
                <DropdownItem className={navStyles.dropdownItem}>
                  <NavLink
                    className={navStyles.dropdownLink}
                    href="/testimonials/"
                  >
                    Testimonials
                  </NavLink>
                </DropdownItem>
                <DropdownItem className={navStyles.dropdownItem}>
                  <NavLink className={navStyles.dropdownLink} href="/faq/">
                    FAQ
                  </NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink href="/alumni/" className={navStyles.navLink}>
                Alumni
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/instructors/" className={navStyles.navLink}>
                Instructors & TA's
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret className={navStyles.navLink}>
                Classroom
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem className={navStyles.dropdownItem}>
                  <NavLink
                    className={navStyles.dropdownLink}
                    href="/prospective/"
                  >
                    Prospective Students
                  </NavLink>
                </DropdownItem>
                <DropdownItem className={navStyles.dropdownItem}>
                  <NavLink className={navStyles.dropdownLink} href="/students/">
                    Current Students
                  </NavLink>
                </DropdownItem>
                <DropdownItem className={navStyles.dropdownItem}>
                  <NavLink className={navStyles.dropdownLink} href="/speakers/">
                    Speakers
                  </NavLink>
                </DropdownItem>
                {/* <DropdownItem>
                <NavLink className={navStyles.dropdownLink} href="/schedule/">
                  Schedule
                </NavLink>
              </DropdownItem> */}
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink href="/partner/" className={navStyles.navLink}>
                Partners
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/outcomes/" className={navStyles.navLink}>
                Outcomes
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact/" className={navStyles.navLink}>
                Contact
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/jobs/" className={navStyles.navLink}>
                Jobs
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </Container>
  );
};

export default NavComponent;
