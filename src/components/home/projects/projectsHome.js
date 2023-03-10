import * as React from "react";
import { useState } from "react";
import { useStaticQuery, graphql, Link } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import ProjectNav from '../../projectNav/projectNav';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import './projectHome.scss';

const Projects = () => {
    const [filter, setFilter] = useState("all");
    console.log(filter);
    const data = useStaticQuery(graphql`
    query {
        allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
          nodes {
            frontmatter {
              author
              date
              title
              type
              featuredImage {
                childImageSharp {
                  gatsbyImageData(width: 800)
                }
              }
            }
            fields {
              slug
            }
          }
        }
      }
  `)

    return (
        <section className="mt-5 pt-5 border-top border-3 border-black">
            <ProjectNav setFilter={setFilter} />
            <Row>
                {data.allMarkdownRemark.nodes.map(project => (
                    <>
                        {filter === project.frontmatter.type &&
                            <>
                                <Col md={6}>
                                    <Link to={`/${project.fields.slug}`}>
                                        <GatsbyImage image={getImage(project.frontmatter.featuredImage?.childImageSharp?.gatsbyImageData)} />
                                    </Link>
                                    <div className="mt-4 mb-5 pb-3 text-center">
                                        <h3 >{project.frontmatter.title}</h3>
                                        <p>{project.frontmatter.type}</p>
                                    </div>

                                </Col>
                            </>
                        }

                        {filter === "all" &&
                            <>
                                <Col md={6}>
                                    <Link to={`/${project.fields.slug}`}>
                                        <GatsbyImage image={getImage(project.frontmatter.featuredImage?.childImageSharp?.gatsbyImageData)} />
                                    </Link>
                                    <div className="mt-4 mb-5 pb-3 text-center">
                                        <h3>{project.frontmatter.title}</h3>
                                        <p>{project.frontmatter.type}</p>
                                    </div>
                                </Col>
                            </>
                        }
                    </>
                ))}
                <div className="d-flex justify-content-center mb-5">
                    <Link to="/projects">
                    <Button className="rounded-circle p-4" variant="outline-primary" size="lg">More</Button>
                    </Link>
                </div>
            </Row>
        </section>
    );
}



export default Projects;