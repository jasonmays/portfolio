import * as React from "react";
import { useState } from "react";
import { useStaticQuery, graphql, Link } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import ProjectNav from '../../projectNav/projectNav';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './projects.scss';

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
                  gatsbyImageData(width: 1200)
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
        <section className="mt-5">
            <ProjectNav setFilter={setFilter} />
            <Row>
                {data.allMarkdownRemark.nodes.map(project => (
                    <>
                        {filter === project.frontmatter.type &&
                            <>
                                <Col md={6} className="project">
                                    <GatsbyImage image={getImage(project.frontmatter.featuredImage?.childImageSharp?.gatsbyImageData)} />
                                    <Link to={`/${project.fields.slug}`}>
                                        <div className="overlayContainer">
                                            <div className="mt-4 pb-3 text-center overlay">
                                                <h3 >{project.frontmatter.title}</h3>
                                                <p>{project.frontmatter.type}</p>
                                            </div>
                                        </div>
                                    </Link>
                                </Col>
                            </>
                        }

                        {filter === "all" &&
                            <>
                                <Col md={6} className="project">
                                    <GatsbyImage image={getImage(project.frontmatter.featuredImage?.childImageSharp?.gatsbyImageData)} />
                                    <Link to={`/${project.fields.slug}`}>
                                        <div className="overlayContainer">
                                            <div className="mt-4 pb-3 text-center overlay">
                                                <h3 >{project.frontmatter.title}</h3>
                                                <p>{project.frontmatter.type}</p>
                                            </div>
                                        </div>
                                    </Link>
                                </Col>
                            </>
                        }
                    </>
                ))}
            </Row>
        </section>
    );
}



export default Projects;