import React from "react";
import PropTypes from "prop-types";
import Footer from "./footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./layout.css";
// import DriftChat from "./driftchat";

const Layout = ({ children }) => {
  return (
    <>
      <div
        style={{
          marginBottom: 0,
          padding: 0,
        }}
      >
        <main>{children}</main>
      </div>
      {/* <DriftChat /> */}
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
