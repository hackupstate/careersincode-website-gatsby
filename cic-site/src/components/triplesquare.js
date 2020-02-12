import React from "react"
import { Link } from 'gatsby'
import { Container, Row, Col, Button } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const TripleSquare = (props) => {
    return (
        <Container fluid={true}>
            <div>
                <Row>
                    <Col
                        style={{
                            background: '#2299dd',
                            height: 'fit-content',
                            textAlign: 'center',
                            width: '50%',
                            color: 'white',
                            padding: {
                                left: '5%',
                                top: '5%',
                                right: '5%',
                                bottom: '6%'
                            }
                        }}
                        md="4">
                        <h1> Students </h1>
                        <p style={{
                            fontSize: '24px'
                        }}>
                            Transform your career. The average salary for coding bootcamp graduates according
      to the Council on Integrity in Results Reporting is $53,273.
                            </p>

                        <Link to='/students/'>
                            <Button size="lg" style={{
                                background: 'white',
                                width: 'auto',
                                borderRadius: '0px',
                                color: '#2299dd',
                                margin: '5%',
                                "&:hover": {
                                    background: '#ffffff',
                                    opacity: '0.8'
                                },
                                marginTop: '5%'
                            }}>

                                Apply Today
                            </Button>
                        </Link>

                    </Col>
                    <Col
                        style={{
                            background: 'white',
                            height: 'fit-content',
                            width: '50%',
                            color: 'black',
                            textAlign: 'center',
                            padding: {
                                left: '5%',
                                top: '5%',
                                right: '5%',
                                bottom: '6%'
                            }
                        }}
                        md="4"
                    >
                        <h1> Instructors </h1>
                        <p style={{
                            fontSize: '24px'
                        }}>
                            Calling all Central NY software developers. We want to hire you! Join us in our
                        mission to combat poverty and train our region's next crop of software developers.</p>

                        <Link to='/instructors/' style={{ fontSize: '18px', color: "white" }}>
                            <Button size="lg" style={{
                                background: '#2de187',
                                width: 'auto',
                                borderRadius: '0px',
                                color: '#ffffff',
                                margin: '5%',
                                "&:hover": {
                                    background: '#33aa99',
                                    opacity: '0.8'
                                },
                                marginTop: '5%'
                            }}>
                                Become an Instructor
                        </Button>
                        </Link>
                    </Col>
                    <Col
                        style={{
                            background: '#2299dd',
                            height: 'fit-content',
                            width: '50%',
                            color: 'white',
                            textAlign: 'center',
                            padding: {
                                left: '5%',
                                top: '5%',
                                right: '5%',
                                bottom: '6%'
                            }
                        }}
                        md="4">
                        <h1> Partners </h1>
                        <p style={{
                            fontSize: '24px'
                        }}>
                            Now more than ever software developers are critical to the growth and
              sustainability
              of your company and our local economy. We want to help you grow locally!
                        </p>
                        <Link to='/partner/'>
                            <Button size="lg" style={{
                                background: 'white',
                                width: 'auto',
                                borderRadius: '0px',
                                color: '#2299dd',
                                margin: '5%',
                                "&:hover": {
                                    background: '#ffffff',
                                    opacity: '0.8'
                                },
                                marginTop: '5%'
                            }}>

                                Hire Our Developers
                            </Button>
                        </Link>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}

export default TripleSquare;