import * as React from "react";
import headshot from '../../../images/Animoji.png';
import './headshot.scss';

const Headshot = () => {
    return (
        <section className="headshotContainer">
            <img
              src={headshot}
              className="d-inline-block rounded-circle bannerImage position-relative fadeIn w-100"
              alt="JM Logo"
            />
        </section>
    );
}

export default Headshot;