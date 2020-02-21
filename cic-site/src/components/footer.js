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


const Footer = (props) => {
    return (
        <Container fluid={true}>
            <div className={footerStyles}>
                <footer>
                    <div className={footerStyles.footerBackground}>
                        <Row xs="3">
                            <Col>
                                <div className={footerStyles.footerText}>
                                    <h4 className={footerStyles.footerTextBold}>Contact</h4>
                                    {/*  */}
                                    <div className="mb-4">
                                        <p className="mb-0">Doug Crescenzi</p>
                                        <p className="mb-0"><a className={footerStyles.footerLink} href="mailto:doug@hackupstate.com">doug@hackupstate.com</a></p>
                                        <p className="mb-0"><a className={footerStyles.footerLink} href="tel:315-436-8655">(315) 436-8655</a></p>
                                    </div>
                                    <div className="mb-4">
                                        <p className="mb-0">Jesse Peplinski</p>
                                        <p className="mb-0"><a className={footerStyles.footerLink} href="mailto:jesse@hackupstate.com">jesse@hackupstate.com</a></p>
                                        <p className="mb-0"><a className={footerStyles.footerLink} href="tel:315-409-3514">(315) 409-3514</a></p>
                                    </div>
                                </div>
                            </Col>

                            <Col>
                                <div className={footerStyles.footerText}>
                                    <h4 className={footerStyles.footerTextBold}>Connect</h4>
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
                                    <h4 className={footerStyles.footerTextBold}>More Links</h4>
                                    <p className="mb-0"><a className={footerStyles.footerLink} href="http://hackupstate.com/conduct.html">Code of Conduct</a></p>
                                    <p className="mb-0"><a className={footerStyles.footerLink} href="http://hackupstate.com/privacy.html">Privacy Policy</a></p>
                                    <br /><br /><br />
                                    <p className="mb-0">© Careers in Code {new Date().getFullYear()}</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </footer>
            </div>
        </Container >
    )
}

export default Footer;

//© Careers in Code {new Date().getFullYear()}

// to do: figure out gaps on left/right side of footer so it takes up 100% of the space
// add media breakpoints for mobile/tablet so it looks less garbage when it collapse

