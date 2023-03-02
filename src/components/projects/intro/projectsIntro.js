import * as React from "react";
import Row from 'react-bootstrap/Row';
import './projectIntro.scss';

const Intro = (props) => {
    return (
        <section>
            <Row className="my-5 py-lg-5">
                <h1 className="text-center">{props.name}</h1>
            </Row>
            <div className="pt-5 border-bottom border-3 border-black"></div>
        </section>
    );
}

export default Intro;