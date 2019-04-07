import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPage = ({data}) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Latest Posts</h1>
    {data.allMarkdownRemark.edges.map(post => (
        <div key={ post.node.id }>
            <h3>{ post.node.frontmatter.title }</h3>
            <small>Posted by { post.node.frontmatter.author } on { post.node.frontmatter.date }</small>
            <br />
            <br />
            <a href={post.node.frontmatter.path }>Read More</a>
            <br />
            <br />
            <hr />
        </div>
    ))}
  </Layout>
)

export const pageQuery = graphql`
    query BlogIndexQuery {
            allMarkdownRemark {
              edges {
                node {
                  id
                  frontmatter {
                    path
                    title
                    date
                    author
                  }
                }
              }
            } 
    }
`

export default BlogPage
