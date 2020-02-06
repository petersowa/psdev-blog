import React from 'react';
import { graphql } from 'gatsby';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

export default ({ data }) => {
    const post = data.markdownRemark;
    return (
        <Layout className="post-template">
            <SEO title={post.frontmatter.title} />
            <h1 className="post-template__title heading">
                {post.frontmatter.title}
            </h1>

            <div
                className="post-template__content"
                dangerouslySetInnerHTML={{ __html: post.html }}
            />
            <hr />
            <h4 className="post-template__citation">
                Posted by {post.frontmatter.author} on {post.frontmatter.date}
            </h4>
            <Link className="post-template__link" to="/blog">
                Go Back
            </Link>
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
