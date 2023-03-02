import * as React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import headshot from '../../../images/Animoji.png';
import './intro.scss';

const Intro = () => {
    return (
        <section>
            <Row className="my-5 py-lg-5">
                <Col lg={{ span: 4, order: 3 }} className="d-flex flex-column justify-content-center align-items-center position-relative fadeIn">
                    <img
                        src={headshot}
                        width="200"
                        height="200"
                        className="d-inline-block rounded-circle bannerImage position-relative fadeIn"
                        alt="JM Logo"
                    />
                </Col>
                <Col lg={{ span: 2, order: 4 }} className="d-flex fadeIn">
                    <Stack gap={2} className="justify-content-center">
                        <a role="button" href="mailto: jmays340@gmail.com" aria-label="Email" className="socialsIcon fadeIn">
                            <i className="bi bi-envelope"></i>
                        </a>
                        <a role="button" href="https://www.linkedin.com/in/jason-mays/" aria-label="LinkedIn" target="_blank" rel="noreferrer" className="socialsIcon fadeIn">
                            <i className="bi bi-linkedin"></i>
                        </a>
                        <a role="button" href="https://github.com/jasonmays" aria-label="Github" target="_blank" rel="noreferrer" className="socialsIcon fadeIn">
                            <i className="bi bi-github"></i>
                        </a>
                    </Stack>
                </Col>
                <Col lg={{ span: 5, order: 1 }} className="align-middle pt-5 pt-lg-3 bannerText">
                    <p className="fadeIn">Jason Mays</p>
                    <h1 className="fadeIn">I'm a Web Developer based in Philly</h1>
                </Col>
                <Col lg={{ span: 1, order: 2 }} className="d-none d-lg-block"></Col>
            </Row>
        </section>
    );
}

export default Intro;

/*<div className="line d-none d-lg-block"></div>
<div className="shape">
    <svg width="100" height="100" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="250" cy="250" r="250" fill="#F7F6F6" />
    </svg>
</div>*/