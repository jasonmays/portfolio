import * as React from "react";
import Stack from 'react-bootstrap/Stack';
import './socials.scss';

const Socials = () => {
    return (
        <section className="d-flex w-100">
            <Stack gap={2}>
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
        </section>
    );
}

export default Socials;