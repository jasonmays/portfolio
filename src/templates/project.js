import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout";
import Row from 'react-bootstrap/Row';
import Introduction from "../components/project/Introduction/introduction";

export default function BlogPost({ data }) {
    const project = data.markdownRemark

    return (
        <Layout pageInfo={{ pageName: project.frontmatter.title }}>
          <Row>
            <Introduction project={project} />
          </Row>
            <div>
                <h1>{project.frontmatter.title}</h1>
                <small>{project.frontmatter.date}</small>
                <div dangerouslySetInnerHTML={{ __html: project.html }} />
            </div>
            projects.js
        </Layout>
    )
}
export const query = graphql`
  query ProjectsQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        type
        shortDescription
        IntroImage {
          childImageSharp {
            gatsbyImageData(width: 1200)
          }
        }
      }
    }
  }
`