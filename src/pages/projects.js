import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout";
import Intro from "../components/projects/intro/projectsIntro";
import Projects from "../components/projects/projects/projects";

export default function Project({ data }) {
  //const { projects } = data.project

  return (
    <>
      <Layout pageInfo={{ pageName: "projects" }}>
        <Intro name="My Projects" />
        <Projects />
      </Layout>

    </>

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

/*<div>
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
</div>*/
