import * as React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import headshot from '../../images/Headshot.png';
import './banner.scss';

const Banner = () => {
    return (
        <section>
            <Row className="mt-5 pt-lg-5">
                <Col lg={{ span: 4, order: 3 }} className="d-flex justify-content-center align-items-center">
                    <img
                        src={headshot}
                        width="200"
                        height="200"
                        className="d-inline-block rounded-circle bannerImage"
                        alt="JM Logo"
                    />
                </Col>
                <Col lg={{ span: 2, order: 4 }} className="d-flex">
                    <Stack gap={2} className="justify-content-center">
                        <i className="bi bi-envelope socialsIcon"></i>
                        <i className="bi bi-linkedin socialsIcon"></i>
                        <i className="bi bi-github socialsIcon"></i>
                    </Stack>
                </Col>
                <Col lg={{ span: 5, order: 1 }} className="align-middle pt-5 pt-lg-3 bannerText">
                    <p>Jason Mays</p>
                    <h1>I'm a Web Developer based in Philly</h1>
                </Col>
                <Col lg={{ span: 1, order: 2 }} className="d-none d-lg-block"></Col>
            </Row>
        </section>
    );
}

export default Banner;