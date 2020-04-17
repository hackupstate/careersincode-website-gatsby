import React from "react"
// import './footer.css'
// import './layout.css'
import footerStyles from "./footer.module.css"
import { Container, Row, Col } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import FB from '../images/social/fb.png'
import Git from '../images/social/git-blue.png'
import Insta from '../images/social/inst-green.png'
import LinkedIn from '../images/social/linked-in-green.png'
import Med from '../images/social/med.png'
import Slack from '../images/social/slack-green.png'
import TW from '../images/social/tw.png'
import YT from '../images/social/yt-blue.png'
import content from '../content/content.json'


const Footer = (props) => {
    return (

        <footer className={footerStyles.footerBackground}>
            <Container fluid>
                <Row xs="3">
                    <Col>
                        <div className={footerStyles.footerText}>
                            <h4 className={footerStyles.footerTextBold}> {content.ui.footer_main_content.contact.header}</h4>
                            <div className="mb-4">
                                <p className="mb-0"> {content.ui.footer_main_content.contact.doug.name} </p>
                                <p className="mb-0"><a className={footerStyles.footerLink} href={content.ui.footer_main_content.contact.doug.email}> {content.ui.footer_main_content.contact.doug.email_text} </a></p>
                                <p className="mb-0"><a className={footerStyles.footerLink} href={content.ui.footer_main_content.contact.doug.phone}> {content.ui.footer_main_content.contact.doug.phone_text} </a></p>
                            </div>
                            <div className="mb-4">
                                <p className="mb-0"> {content.ui.footer_main_content.contact.jesse.name} </p>
                                <p className="mb-0"><a className={footerStyles.footerLink} href={content.ui.footer_main_content.contact.jesse.email}> {content.ui.footer_main_content.contact.jesse.email_text} </a></p>
                                <p className="mb-0"><a className={footerStyles.footerLink} href={content.ui.footer_main_content.contact.jesse.phone}> </a> {content.ui.footer_main_content.contact.jesse.phone_text} </p>
                            </div>
                        </div>
                    </Col>

                    <Col>
                        <div className={footerStyles.footerText}>
                            <h4 className={footerStyles.footerTextBold}> {content.ui.footer_main_content.connect.header}  </h4>
                            <a href={content.ui.footer_main_content.connect.facebook.link} target="_blank" rel="noopener noreferrer" className={footerStyles.logo}> <img src={FB} alt={content.ui.footer_main_content.connect.facebook.alt_text} /> </a>
                            <a href={content.ui.footer_main_content.connect.twitter.link} target="_blank" rel="noopener noreferrer" className={footerStyles.logo}> <img src={TW} alt={content.ui.footer_main_content.connect.twitter.alt_text} /> </a>
                            <a href={content.ui.footer_main_content.connect.medium.link} target="_blank" rel="noopener noreferrer" className={footerStyles.logo}> <img src={Med} alt={content.ui.footer_main_content.connect.medium.alt_text} /> </a>
                            <a href={content.ui.footer_main_content.connect.instagram.link} target="_blank" rel="noopener noreferrer" className={footerStyles.logo}> <img src={Insta} alt={content.ui.footer_main_content.connect.instagram.alt_text} /> </a>
                            <a href={content.ui.footer_main_content.connect.github.link} target="_blank" rel="noopener noreferrer" className={footerStyles.logo}> <img src={Git} alt={content.ui.footer_main_content.connect.github.alt_text} /> </a>
                            <a href={content.ui.footer_main_content.connect.linkedin.link} target="_blank" rel="noopener noreferrer" className={footerStyles.logo}> <img src={LinkedIn} alt={content.ui.footer_main_content.connect.linkedin.alt_text} /> </a>
                            <a href={content.ui.footer_main_content.connect.youtube.link} target="_blank" rel="noopener noreferrer" className={footerStyles.logo}> <img src={YT} alt={content.ui.footer_main_content.connect.youtube.alt_text} /> </a>
                            <a href={content.ui.footer_main_content.connect.slack.link} target="_blank" rel="noopener noreferrer" className={footerStyles.logo}> <img src={Slack} alt={content.ui.footer_main_content.connect.slack.alt_text} /> </a>
                        </div>
                    </Col>

                    <Col>
                        <div className={footerStyles.footerText}>
                            <h4 className={footerStyles.footerTextBold}> {content.ui.footer_main_content.more_links.header} </h4>
                            <p className="mb-0"><a className={footerStyles.footerLink} href={content.ui.footer_main_content.more_links.conduct.link}> {content.ui.footer_main_content.more_links.conduct.text} </a></p>
                            <p className="mb-0"><a className={footerStyles.footerLink} href={content.ui.footer_main_content.more_links.privacy.link}>{content.ui.footer_main_content.more_links.privacy.text}</a></p>
                            <br /><br /><br />
                            <p className="mb-0">© Careers in Code {new Date().getFullYear()}</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;

//© Careers in Code {new Date().getFullYear()}

// to do: 
// add media breakpoints for mobile/tablet so it looks less garbage when it collapse

