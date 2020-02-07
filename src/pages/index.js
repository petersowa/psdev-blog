import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Img from 'gatsby-image';
import { useStaticQuery, graphql, Link } from 'gatsby';

// import starsImage from '../images/astronomy-stars.jpg';

const IndexPage = () => {
    const [delayShow, setShow] = React.useState(false);
    const data = useStaticQuery(graphql`
        query MyQuery {
            file(relativePath: { eq: "astronomy-stars.jpg" }) {
                id
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            markdownRemark(frontmatter: { path: { eq: "post-dev-links" } }) {
                frontmatter {
                    path
                    date
                    author
                    title
                }
                html
            }

            allContentfulBlogPosts(sort: { fields: createdAt, order: ASC }) {
                edges {
                    node {
                        title
                        updatedAt(formatString: "MM/DD/YYYY H:MMa")
                        createdAt(formatString: "MM/DD/YYYY H:MMa")
                        author
                        id
                        body {
                            childMarkdownRemark {
                                html
                                excerpt
                            }
                        }
                        slug
                    }
                }
            }
        }
    `);

    React.useEffect(() => {
        setTimeout(() => {
            setShow(true);
        }, 10);
    }, []);
    return (
        <Layout>
            <SEO title="Home" />
            <h1 className="heading">Site Info</h1>
            <p className="article">
                This is my new developer blog. I will have coding tips and links
                to coding resources, videos, and great tooling
                <Link to="/app/random2">Random Link</Link>
            </p>
            <div
                className={
                    'cover-container shadow ' + (delayShow ? 'show' : 'hide')
                }
            >
                <Img
                    className="cover-image"
                    fluid={data.file.childImageSharp.fluid}
                    alt="milkyway on horizon"
                ></Img>
            </div>
            <section>
                {data.allContentfulBlogPosts.edges.map(({ node }) => {
                    return (
                        <article key={node.id} className="front-article">
                            <h1 className="front-article__title">
                                {node.title}
                            </h1>
                            <div
                                className="front-article__body"
                                dangerouslySetInnerHTML={{
                                    __html: node.body.childMarkdownRemark.html,
                                }}
                            ></div>
                            <div className="front-article__meta">
                                <h6 className="front-article__meta-field">
                                    Author: {node.author}
                                </h6>
                                <h6 className="front-article__meta-field">
                                    Created: {node.createdAt}
                                </h6>
                                <h6 className="front-article__meta-field">
                                    Updated: {node.updatedAt}
                                </h6>
                            </div>
                        </article>
                    );
                })}
            </section>
            <section
                className="post-template__content"
                dangerouslySetInnerHTML={{
                    __html: data.markdownRemark.html,
                }}
            />
            <article className="article-columns">
                <h1>Useful package for Gatsby and Remark</h1>
                <p>
                    gatsby-remark-external-links Adds the target and rel
                    attributes to external links in markdown. This is a gatsby
                    port of the remark-external-links remark plugin.
                </p>
                https://cnpmjs.org/package/gatsby-remark-external-links
            </article>
        </Layout>
    );
};

export default IndexPage;
