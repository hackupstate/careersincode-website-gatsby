import React from "react";
import PropTypes from "prop-types";
import Footer from "./footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./layout.css";

const Layout = ({ children }) => {
  return (
    <>
      <div
        style={{
          margin: `0 auto`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
