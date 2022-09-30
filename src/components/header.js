import React from "react";
import * as headerStyles from "./header.module.css";

const Header = ({ children }) => (
  <header
    className={(headerStyles.headerContainer, headerStyles.jumboBannerImg)}
  >
    {children}
  </header>
);

export default Header;
