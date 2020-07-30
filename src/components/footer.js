import React from "react";
import { Row, Col } from "reactstrap";
import FB from "../images/social/fb.png";
import Git from "../images/social/git-blue.png";
import Insta from "../images/social/inst-green.png";
import LinkedIn from "../images/social/linked-in-green.png";
import Med from "../images/social/med.png";
import Slack from "../images/social/slack-green.png";
import TW from "../images/social/tw.png";
import YT from "../images/social/yt-blue.png";
import content from "../content/content.json";
import footerStyles from "./footer.module.css";

const Footer = (props) => {
  return (
    <footer>
      <Row className={footerStyles.blueContainer} noGutters>
        <Col className={footerStyles.footerEndContainer}>
          <h3 className={footerStyles.footerHeading}>
            {content.ui.footer_main_content.contact.header}
          </h3>
          {/* DOUG */}

          <div className={footerStyles.contactCol}>
            <p className={footerStyles.footerSubheading}>
              {" "}
              {content.ui.footer_main_content.contact.doug.name}{" "}
            </p>
            <p>
              <a
                className={footerStyles.footerLink}
                href={content.ui.footer_main_content.contact.doug.email}
              >
                {content.ui.footer_main_content.contact.doug.email_text}
              </a>
            </p>
            <p>
              <a
                className={footerStyles.footerLink}
                href={content.ui.footer_main_content.contact.doug.phone}
              >
                {content.ui.footer_main_content.contact.doug.phone_text}
              </a>
            </p>
          </div>
          {/* JESSE */}

          <div className={footerStyles.contactCol}>
            <p className={footerStyles.footerSubheading}>
              {" "}
              {content.ui.footer_main_content.contact.jesse.name}{" "}
            </p>
            <p>
              <a
                className={footerStyles.footerLink}
                href={content.ui.footer_main_content.contact.jesse.email}
              >
                {content.ui.footer_main_content.contact.jesse.email_text}
              </a>
            </p>
            <p>
              <a
                className={footerStyles.footerLink}
                href={content.ui.footer_main_content.contact.jesse.phone}
              >
                {content.ui.footer_main_content.contact.jesse.phone_text}
              </a>
            </p>
          </div>
        </Col>

        <Col className={footerStyles.footerLogoContainer}>
          <h3 className={footerStyles.footerHeading}>
            {" "}
            {content.ui.footer_main_content.connect.header}{" "}
          </h3>
          <div className={footerStyles.footerRow}>
            <a
              href={content.ui.footer_main_content.connect.facebook.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <img
                src={FB}
                alt={content.ui.footer_main_content.connect.facebook.alt_text}
                className={footerStyles.logo}
              />{" "}
            </a>
            <a
              href={content.ui.footer_main_content.connect.twitter.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <img
                src={TW}
                alt={content.ui.footer_main_content.connect.twitter.alt_text}
                className={footerStyles.logo}
              />{" "}
            </a>
            <a
              href={content.ui.footer_main_content.connect.medium.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <img
                src={Med}
                alt={content.ui.footer_main_content.connect.medium.alt_text}
                className={footerStyles.logo}
              />{" "}
            </a>
            <a
              href={content.ui.footer_main_content.connect.instagram.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <img
                src={Insta}
                alt={content.ui.footer_main_content.connect.instagram.alt_text}
                className={footerStyles.logo}
              />{" "}
            </a>
          </div>
          <div className={footerStyles.footerRow}>
            <a
              href={content.ui.footer_main_content.connect.github.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <img
                src={Git}
                alt={content.ui.footer_main_content.connect.github.alt_text}
                className={footerStyles.logo}
              />{" "}
            </a>
            <a
              href={content.ui.footer_main_content.connect.linkedin.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <img
                src={LinkedIn}
                alt={content.ui.footer_main_content.connect.linkedin.alt_text}
                className={footerStyles.logo}
              />{" "}
            </a>
            <a
              href={content.ui.footer_main_content.connect.youtube.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <img
                src={YT}
                alt={content.ui.footer_main_content.connect.youtube.alt_text}
                className={footerStyles.logo}
              />{" "}
            </a>
            <a
              href={content.ui.footer_main_content.connect.slack.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <img
                src={Slack}
                alt={content.ui.footer_main_content.connect.slack.alt_text}
                className={footerStyles.logo}
              />{" "}
            </a>
          </div>
        </Col>

        <Col className={footerStyles.footerEndContainer}>
          <div>
            <h3 className={footerStyles.footerHeading}>
              {content.ui.footer_main_content.more_links.header}
            </h3>
            <p>
              <a
                className={footerStyles.footerLink}
                href={content.ui.footer_main_content.more_links.conduct.link}
              >
                {content.ui.footer_main_content.more_links.conduct.text}
              </a>
            </p>
            <p>
              <a
                className={footerStyles.footerLink}
                href={content.ui.footer_main_content.more_links.privacy.link}
              >
                {content.ui.footer_main_content.more_links.privacy.text}
              </a>
            </p>

            <p>© Careers in Code {new Date().getFullYear()}</p>
          </div>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
