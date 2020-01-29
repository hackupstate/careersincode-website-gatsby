import React from "react"
import './footer.css'
import { Container, Row, Col } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


const Footer = (props) => {
    return (
        <Container fluid={true}>
            <div>
                <footer>

                    <div class="footerBackground">
                        <Row xs="3">
                            <Col>

                                <div class="col-md-4 text-center footerText mb-4">
                                    <h4 class="font-weight-bold mb-3">Contact</h4>
                                    <div class="mb-4">
                                        <p class="mb-0">Doug Crescenzi</p>
                                        <p class="mb-0"><a class="footerLink" href="mailto:doug@hackupstate.com">doug@hackupstate.com</a></p>
                                        <p class="mb-0"><a class="footerLink" href="tel:315-436-8655">(315) 436-8655</a></p>
                                    </div>
                                    <div class="mb-4">
                                        <p class="mb-0">Jesse Peplinski</p>
                                        <p class="mb-0"><a class="footerLink" href="mailto:jesse@hackupstate.com">jesse@hackupstate.com</a></p>
                                        <p class="mb-0"><a class="footerLink" href="tel:315-409-3514">(315) 409-3514</a></p>
                                    </div>
                                </div>
                            </Col>

                            <Col>
                                <div class="col-md-4 text-center footerText mb-4">
                                    <h4 class="font-weight-bold mb-3">Connect</h4>
                                    {/* <a href="https://www.facebook.com/hackupstate"><img class="logo" src="./assets/social/fb.png"
          alt="Responsive image"></a>
      <a href="https://twitter.com/hackupstate"><img class="logo" src="./assets/social/tw.png"
          alt="Responsive image"></a>
      <a href="https://medium.com/@hackupstate"><img class="logo" src="./assets/social/med.png"
          alt="Responsive image"></a>
      <a href="https://www.instagram.com/hackupstate"><img class="logo" src="./assets/social/inst-green.png"
          alt="Responsive image"></a>
      <a href="https://github.com/hackupstate"><img class="logo" src="./assets/social/git-blue.png"
          alt="github icon"></a>
      <a href="https://www.linkedin.com/company/hack-upstate/"><img class="logo"
          src="./assets/social/linked-in-green.png" alt="linked in icon"></a>
      <a href="https://www.youtube.com/user/hackupstate"><img class="logo" src="./assets/social/yt-blue.png"
          alt="youtube icon"></a>
      <a
        href="https://join.slack.com/t/hack-upstate/shared_invite/enQtNzI3NDQ2NjA5MjE5LThkOWEzZGY1YzgzZjRmNzg4OTQ2ODkxZmIyOTI2NWM0ZDRjYWNkYzU4YzgzMjQ5ZTc3MzFhOWZlZTdhYjhkZDA"><img
          class="logo" src="./assets/social/slack-green.png" alt="slack icon"></a> */}
                                </div>
                            </Col>
                            <Col>
                                <div class="col-md-4 text-center footerText mb-4">
                                    <h4 class="font-weight-bold mb-3">More Links</h4>
                                    <p class="mb-0"><a class="footerLink" href="http://hackupstate.com/conduct.html">Code of Conduct</a></p>
                                    <p class="mb-0"><a class="footerLink" href="http://hackupstate.com/privacy.html">Privacy Policy</a></p>
                                    <br /><br /><br />
                                    <p class="mb-0">© Careers in Code {new Date().getFullYear()}</p>
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

