import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout";

export default function BlogPost({ data }) {
    const project = data.markdownRemark

    return (
        <Layout pageInfo={{ pageName: project.frontmatter.title }}>
            <div>
                <h1>{project.frontmatter.title}</h1>
                <small>{project.frontmatter.date}</small>
                <div dangerouslySetInnerHTML={{ __html: project.html }} />
                <p>{project.frontmatter.type}</p>
            </div>
            projects2.js
        </Layout>
    )
}
export const query = graphql`
  query ProjectsQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        type
      }
    }
  }
`