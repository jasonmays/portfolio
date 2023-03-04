import * as React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Col from 'react-bootstrap/Col';
import './introduction.scss';

const Introduction = (props) => {
    return (
        <>
            <Col lg={{ span: 6 }}>
                <GatsbyImage image={getImage(props.project.frontmatter.IntroImage?.childImageSharp?.gatsbyImageData)} />
            </Col>
            <Col lg={{ span: 6 }}>
                <p>{props.project.frontmatter.title}</p>
                <p>{props.project.frontmatter.date}</p>
                <p>{props.project.frontmatter.type}</p>
                <p>{props.project.frontmatter.shortDescription}</p>
            </Col>
        </>
    );
}

export default Introduction;