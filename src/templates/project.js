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
            </div>
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
      }
    }
  }
`