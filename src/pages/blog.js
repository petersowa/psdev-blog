import React from 'react';
import { graphql } from 'gatsby';
import { Link } from 'gatsby';
import SEO from '../components/seo';
// import { css } from "@emotion/core"
// import { rhythm } from "../utils/typography"
import Layout from '../components/layout';

export default ({ data }) => {
    console.log(data);
    return (
        <Layout>
            <SEO title="Blog" />
            <div className="blog">
                <h1 className="blog__heading heading">
                    {data.allMarkdownRemark.totalCount} Posts
                </h1>
                {data.allMarkdownRemark.edges.map(({ node }) => (
                    <div className="blog__entry" key={node.id}>
                        <h2 className="blog__entry__title">
                            {node.frontmatter.title}{' '}
                            <span>— {node.frontmatter.date}</span>
                        </h2>
                        <p className="blog__entry__excerpt">{node.excerpt}</p>
                        <Link
                            className="blog__entry__link"
                            to={node.frontmatter.path}
                        >
                            See more...
                        </Link>
                        {/* <div dangerouslySetInnerHTML={{ __html: node.html }} /> */}
                    </div>
                ))}
            </div>
        </Layout>
    );
};

export const query = graphql`
    query {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
            totalCount
            edges {
                node {
                    id
                    frontmatter {
                        title
                        date(formatString: "DD MMMM, YYYY")
                        path
                    }
                    excerpt
                    html
                }
            }
        }
    }
`;
