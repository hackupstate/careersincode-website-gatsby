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
                            <h4 className={footerStyles.footerTextBold}> {content.ui.footer_main_content_contact.title}</h4>

                            <div className="mb-4">
                                <p className="mb-0"> {content.ui.footer_main_content_contact_one.name} </p>
                                <p className="mb-0"><a className={footerStyles.footerLink} href="mailto:doug@hackupstate.com"> {content.ui.footer_main_content_contact_one.email_text} </a></p>
                                <p className="mb-0"><a className={footerStyles.footerLink} href="tel:315-436-8655"> {content.ui.footer_main_content_contact_one.phone_text} </a></p>
                            </div>
                            <div className="mb-4">
                                <p className="mb-0"> {content.ui.footer_main_content_contact_two.name} </p>
                                <p className="mb-0"><a className={footerStyles.footerLink} href="mailto:jesse@hackupstate.com"> {content.ui.footer_main_content_contact_two.email_text} </a></p>
                                <p className="mb-0"><a className={footerStyles.footerLink} href="tel:315-409-3514"> {content.ui.footer_main_content_contact_two.phone_text} </a></p>
                            </div>
                        </div>
                    </Col>

                    <Col>
                        <div className={footerStyles.footerText}>
                            <h4 className={footerStyles.footerTextBold}> {content.ui.footer_main_content_connect.title} </h4>
                            <a href="https://www.facebook.com/hackupstate" target="_blank" rel="noopener noreferrer" className={footerStyles.logo}> <img src={FB} alt="Facebook logo" /> </a>
                            <a href="https://www.twitter.com/hackupstate" target="_blank" rel="noopener noreferrer" className={footerStyles.logo}> <img src={TW} alt="Twitter logo" /> </a>
                            <a href="https://www.medium.com/@hackupstate" target="_blank" rel="noopener noreferrer" className={footerStyles.logo}> <img src={Med} alt="Medium logo" /> </a>
                            <a href="https://www.instagram.com/hackupstate" target="_blank" rel="noopener noreferrer" className={footerStyles.logo}> <img src={Insta} alt="Instagram logo" /> </a>
                            <a href="https://www.github.com/hackupstate" target="_blank" rel="noopener noreferrer" className={footerStyles.logo}> <img src={Git} alt="Github logo" /> </a>
                            <a href="https://www.linkedin.com/company/hack-upstate" target="_blank" rel="noopener noreferrer" className={footerStyles.logo}> <img src={LinkedIn} alt="LinkedIn logo" /> </a>
                            <a href="https://www.youtube.com/hackupstate" target="_blank" rel="noopener noreferrer" className={footerStyles.logo}> <img src={YT} alt="YouTube logo" /> </a>
                            <a href="https://join.slack.com/t/hack-upstate/shared_invite/enQtNzI3NDQ2NjA5MjE5LThkOWEzZGY1YzgzZjRmNzg4OTQ2ODkxZmIyOTI2NWM0ZDRjYWNkYzU4YzgzMjQ5ZTc3MzFhOWZlZTdhYjhkZDA" target="_blank" rel="noopener noreferrer" className={footerStyles.logo}> <img src={Slack} alt="Slack logo" /> </a>
                        </div>
                    </Col>

                    <Col>
                        <div className={footerStyles.footerText}>
                            <h4 className={footerStyles.footerTextBold}> {content.ui.footer_main_content_more_links.title} </h4>
                            <p className="mb-0"><a className={footerStyles.footerLink} href="http://hackupstate.com/conduct.html"> {content.ui.footer_main_content_more_links_one.title} </a></p>
                            <p className="mb-0"><a className={footerStyles.footerLink} href="http://hackupstate.com/privacy.html">{content.ui.footer_main_content_more_links_two.title}</a></p>
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

