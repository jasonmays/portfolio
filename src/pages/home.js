import * as React from "react"
import Layout from "../components/Layout"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = () => {
  return (
    <Layout pageInfo={{ pageName: "home" }}>
      <section>
        <Row className="mt-5">
          <Col lg={{ span: 3, order: 3 }}>picture</Col>
          <Col lg={{ span: 2, order: 4 }}>social</Col>
          <Col lg={{ span: 4, order: 1 }} className="pt-3">
            <p>Jason Mays</p>
            <h1>I'm a Web Developer based in Philly</h1>
          </Col>
          <Col lg={{ span: 3, order: 2 }} className="d-none d-lg-block"></Col>
        </Row>
      </section>
    </Layout>
  )
}

export default Home

export const Head = () => <title>Home</title>