import * as React from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = () => {
  return (
    <>
      <Container>
        <section>
          <Row className="pt-5 mt-5">
            <Col lg={{ span: 8, order: 2 }}>I'm a Web Developer based in Philly</Col>
            <Col lg={{ span: 4, order: 1 }}>Last but first</Col>
          </Row>
          <Row>
            <Col lg>lg=true</Col>
            <Col lg>lg=true</Col>
            <Col lg>lg=true</Col>
          </Row>
        </section>
        <p>
          Home
        </p>
      </Container>
    </>
  )
}

export default Home

export const Head = () => <title>Home</title>