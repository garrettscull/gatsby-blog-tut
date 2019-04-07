import React from 'react';
import { Link } from "gatsby"


export default function Template({data}) {
    const post = data.markdownRemark

    return (
        <div>
            <a href="/blog">Go Back</a>
            <hr />
            <h1>{post.frontmatter.title}</h1>
            <h4>Posted by {post.frontmatter.author} on {post.frontmatter.date}</h4>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
    )
}

export const postQuery = graphql`
    query BlogPostByPath($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                path
                title
                author
                date
            }
        }
    }
`