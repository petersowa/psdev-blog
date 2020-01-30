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
            <div>
                <h1>Amazing Pandas Eating Things</h1>
                <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
                {data.allMarkdownRemark.edges.map(({ node }) => (
                    <div key={node.id}>
                        <h3>
                            {node.frontmatter.title}{' '}
                            <span>— {node.frontmatter.date}</span>
                        </h3>
                        <p>{node.excerpt}</p>
                        <Link to={node.frontmatter.path}>See more...</Link>
                        {/* <div dangerouslySetInnerHTML={{ __html: node.html }} /> */}
                    </div>
                ))}
            </div>
        </Layout>
    );
};

export const query = graphql`
    query {
        allMarkdownRemark {
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
