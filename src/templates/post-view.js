import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
// import Layout from "../components/layout"

export default ({ data }) => {
  console.log(data)
  const post = data.markdownRemark
  return (
    <>
      <Link to="/blog">Go Back</Link>
      <h1>{post.frontmatter.title}</h1>
      <h4>
        Posted by {post.frontmatter.author} on {post.frontmatter.date}
      </h4>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($slug: String!) {
    markdownRemark(frontmatter: { path: { eq: $slug } }) {
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
