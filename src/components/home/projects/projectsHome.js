import * as React from "react";
import { useState } from "react";
import { useStaticQuery, graphql } from 'gatsby';
import Nav from 'react-bootstrap/Nav';

const Projects = () => {
    const [filter, setFilter] = useState("all");
    console.log(filter);
    const data = useStaticQuery(graphql`
    query {
        allMarkdownRemark {
            nodes {
              frontmatter {
                author
                date
                title
                type
              }
            }
        }
    }
  `)

    return (
        <section>
            <Nav
                defaultActiveKey="all"
                onSelect={(selectedKey) => setFilter(`${selectedKey}`)}
            >
                <Nav.Item>
                    <Nav.Link eventKey="all">All</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="Website">Website</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="Mobile">Mobile</Nav.Link>
                </Nav.Item>
            </Nav>
            {data.allMarkdownRemark.nodes.map(project => (
                <>
                    {filter === project.frontmatter.type &&
                        <p>{project.frontmatter.title}</p>
                    }

                    {filter === "all" &&
                        <p>{project.frontmatter.title}</p>
                    }

                </>
            ))}
        </section>
    );
}



export default Projects;