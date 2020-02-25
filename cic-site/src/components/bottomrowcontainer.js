import React from "react"
import { Link } from 'gatsby'
import { Container, Row, Col, Button } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import content from '../content/content.json'

const BottomRowContainer = (props) => {
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
                        <h1> {content.ui.index_main_content_bottom_row_container_one.title} </h1>
                        <p style={{
                            fontSize: '24px'
                        }}>
                            {content.ui.index_main_content_bottom_row_container_one.copy}
                        </p>

                        <Link to={content.ui.index_main_content_bottom_row_container_one.link}>
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

                                {content.ui.index_main_content_bottom_row_container_one.button}
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
                        <h1> {content.ui.index_main_content_bottom_row_container_two.title} </h1>
                        <p style={{
                            fontSize: '24px'
                        }}>
                            {content.ui.index_main_content_bottom_row_container_two.copy}
                        </p>

                        <Link to={content.ui.index_main_content_bottom_row_container_two.link} style={{ fontSize: '18px', color: "white" }}>
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
                                {content.ui.index_main_content_bottom_row_container_two.button}
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
                        <h1> {content.ui.index_main_content_bottom_row_container_three.title} </h1>
                        <p style={{
                            fontSize: '24px'
                        }}>
                            {content.ui.index_main_content_bottom_row_container_three.copy}
                        </p>
                        <Link to={content.ui.index_main_content_bottom_row_container_three.link}>
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

                                {content.ui.index_main_content_bottom_row_container_three.button}
                            </Button>
                        </Link>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}

export default BottomRowContainer;

// to do: fix hover on buttons so it actually works
// move styling to module or css sheet from inline
// add media breakpoints for mobile/tablet so it looks less garbage when it collapses