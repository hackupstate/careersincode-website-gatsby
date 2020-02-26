import React from "react"
import { Container, Jumbotron, Button, Row } from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import content from "../content/content.json"

const JumbotronComponent = () => {
  return (
    <div>
      <Jumbotron
        fluid
        justified
        style={{ background: "transparent", color: "white" }}
      >
        <Container fluid>
          <Row
            style={{
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <h2>{content.ui.index_jumbotron.heading}</h2>
            <p>{content.ui.index_jumbotron.subHeading}</p>
          </Row>
          <Row style={{ display: "flex", justifyContent: "center" }}>
            <Button color="info" style={{ margin: 10 }}>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScpE0bpIn_E8CnKyO0AXvkHbliLPa0kKnFbhjBryTNKWDxFFg/viewform"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white", textDecoration: "none" }}
              >
                {content.ui.index_jumbotron.button1.text}
              </a>
            </Button>
            <Button color="info" style={{ margin: 10 }}>
              <a
                href="https://www.getdrip.com/forms/67102980/submissions/new"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white", textDecoration: "none" }}
              >
                {content.ui.index_jumbotron.button2.text}
              </a>
            </Button>
          </Row>
        </Container>
      </Jumbotron>
    </div>
  )
}

export default JumbotronComponent
