import React from 'react';
import { graphql } from 'gatsby';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

export default ({ data }) => {
    console.log(data);
    const post = data.markdownRemark;
    return (
        <Layout>
            <SEO title={post.frontmatter.title} />

            <div
                className="md-post"
                dangerouslySetInnerHTML={{ __html: post.html }}
            />
            <hr />
            <h4>
                Posted by {post.frontmatter.author} on {post.frontmatter.date}
            </h4>
            <Link to="/blog">Go Back</Link>
        </Layout>
    );
};

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
`;
