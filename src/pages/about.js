import * as React from "react"
import Layout from "../components/Layout"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Headshot from "../components/about/headshot/headshot";
import Socials from "../components/about/socials/socials";
import Bio from "../components/about/bio/bio";

const About = () => {
  return (
    <Layout pageInfo={{ pageName: "about" }}>
      <section>
        <Row className="my-5 py-lg-5">
          <Col lg={{ span: 4, order: 1 }} className="d-flex flex-column position-relative fadeIn">
            <Headshot />
          </Col>
          <Col lg={{ span: 2, order: 4 }} className="d-flex fadeIn">
            <Socials />
          </Col>
          <Col lg={{ span: 5, order: 3 }} className="pt-5 pt-lg-3">
            <Bio />
          </Col>
          <Col lg={{ span: 1, order: 2 }} className="d-none d-lg-block"></Col>
        </Row>
      </section>
    </Layout>
  )
}

export default About

export const Head = () => <title>About Me</title>