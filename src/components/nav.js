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
        <NavbarToggler onClick={toggleNavbar} className="ml-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav className={("ml-auto", navStyles.navAlignment)}>
            <UncontrolledDropdown nav inNavbar fluid>
              <DropdownToggle nav caret className={navStyles.navLink}>
                About
              </DropdownToggle>
              <DropdownMenu left className={navStyles.dropdownDisplayInline}>
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
                  <NavLink className={navStyles.dropdownLink} href="/alumni/">
                  Alumni
                  </NavLink>
                </DropdownItem>
                <DropdownItem className={navStyles.dropdownItem}>
                  <NavLink className={navStyles.dropdownLink} href="/speakers/">
                    Guest Speakers
                  </NavLink>
                </DropdownItem>
                <DropdownItem className={navStyles.dropdownItem}>
                  <NavLink className={navStyles.dropdownLink} href="/jobs/">
                    Jobs
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
              <NavLink href="/students/" className={navStyles.navLink}>
                Students
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/instructors/" className={navStyles.navLink}>
                Instructors
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/mentors/" className={navStyles.navLink}>
                Mentors
              </NavLink>
            </NavItem>
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
            <UncontrolledDropdown nav inNavbar fluid>
              <DropdownToggle nav caret className={navStyles.navLink}>
                Objectives
              </DropdownToggle>
              <DropdownMenu left className={navStyles.dropdownDisplayInline}>
                <DropdownItem className={navStyles.dropdownItem}>
                  <NavLink className={navStyles.dropdownLink} href="/objectives-2019/">
                    2019 Objectives
                  </NavLink>
                </DropdownItem>
                <DropdownItem className={navStyles.dropdownItem}>
                  <NavLink className={navStyles.dropdownLink} href="/objectives/">
                    2020 Objectives (coming soon)
                  </NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </Container>
  );
};

export default NavComponent;
