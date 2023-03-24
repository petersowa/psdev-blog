import React from 'react';

import Layout from '../components/layout';
import Seo from '../components/seo';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql, Link } from 'gatsby';

import Webview from '../components/Webview';

// import starsImage from '../images/astronomy-stars.jpg';

function DelayShow({ children }) {
    const [delayShow, setShow] = React.useState(false);
    React.useEffect(() => {
        setTimeout(() => {
            setShow(true);
        }, 10);
    }, []);
    return (
        <div
            className={
                'cover-container shadow ' + (delayShow ? 'show' : 'hide')
            }
        >
            {children}
        </div>
    );
}

function OverflowImage({ fluid }) {
    return (
        <DelayShow>
            <GatsbyImage
                className="cover-image"
                fluid={fluid}
                alt="milkyway on horizon"
            ></GatsbyImage>
        </DelayShow>
    );
}

const Post = ({ post }) => (
    <article key={post.id} className="front-article">
        <h1 className="front-article__title">{post.title}</h1>
        {post.body && (
            <div
                className="front-article__body"
                dangerouslySetInnerHTML={{
                    __html: post.body.childMarkdownRemark.html,
                }}
            ></div>
        )}
        <div className="front-article__meta">
            {/* <h6 className="front-article__meta-field">
                                    Author: {node.author}
                                </h6> */}
            <h6 className="front-article__meta-field">
                Created: {post.createdAt}
            </h6>
            <h6 className="front-article__meta-field">
                Updated: {post.updatedAt}
            </h6>
        </div>
    </article>
);

const IndexPage = () => {
    const data = useStaticQuery(graphql`
        query myquery {
            file(relativePath: { eq: "astronomy-stars.jpg" }) {
                id
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }

            allContentfulBlogPosts(sort: { updatedAt: DESC }) {
                edges {
                    node {
                        id
                        slug
                        body {
                            body
                            childMarkdownRemark {
                                html
                            }
                        }
                        updatedAt(formatString: "MM/DD/YYYY")
                        createdAt(formatString: "MM/DD/YYYY")
                        title
                        author
                        formatType
                    }
                }
            }
        }
    `);

    return (
        <Layout>
            <Seo title="Home" />

            <h1 className="heading">Latest News</h1>
            {/* <OverflowImage fluid={data.file.childImageSharp.fluid} /> */}

            <section>
                {data.allContentfulBlogPosts.edges.map(({ node }) => (
                    <Post post={node} key={node.id}></Post>
                ))}
            </section>

            <Link to="/app/random2">Random Link</Link>
            <a
                href="https://salty-fjord-22750.herokuapp.com/"
                alt="Finance App"
            >
                Finance App
            </a>
            {/* <h1 className="heading">Stackblitz Project</h1> */}
            {/* <Webview source="https://stackblitz.com/edit/year-date-page?embed=1&file=index.js" /> */}
        </Layout>
    );
};

export default IndexPage;
