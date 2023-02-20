import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout";

export default function Project({ data }) {
    const { projects } = data.project

    return (
        <Layout pageInfo={{ pageName: "projects" }}>
            <div>
                <h1>My Projects</h1>

                {projects.map(project => (
                    <article key={project.id}>
                        <Link to={`/${project.fields.slug}`}>
                            {console.log(project.fields.slug)}
                            <h2>{project.frontmatter.title}</h2>
                        </Link>
                        <small>{project.frontmatter.author}, {project.frontmatter.date}</small>
                        <p>{project.excerpt}</p>
                    </article>
                ))}
            </div>
        </Layout>
    )
}

export const pageQuery = graphql`
  query MyQuery {
    project: allMarkdownRemark {
      projects: nodes {
        fields {
          slug
        }
        frontmatter {
          date(fromNow: true)
          title
          author
        }
        excerpt
        id
      }
    }
  }
`
