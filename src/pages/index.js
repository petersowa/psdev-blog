import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

// import starsImage from '../images/astronomy-stars.jpg';

const IndexPage = ({ data }) => {
    const [delayShow, setShow] = React.useState(false);
    const starsImage = useStaticQuery(graphql`
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
                html
                frontmatter {
                    author
                    date
                    path
                    title
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
            </p>
            <div
                className={
                    'cover-container shadow ' + (delayShow ? 'show' : 'hide')
                }
            >
                <Img
                    className="cover-image"
                    fluid={starsImage.file.childImageSharp.fluid}
                    alt="milkyway on horizon"
                ></Img>
            </div>
            <section
                className="post-template__content"
                dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
            />
            {/* <pre>{JSON.stringify(starsImage, null, 2)}</pre> */}
            <article className="article-columns">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Porro repellendus corrupti sunt autem praesentium unde,
                    officiis tempore eveniet corporis incidunt amet eaque fuga.
                    Ipsum nam odio iusto consectetur natus commodi!Incidunt
                    reprehenderit, enim expedita voluptatum laboriosam quidem
                    debitis ipsum. Neque quae, accusamus nemo, quasi magni
                    quaerat eius aut consectetur necessitatibus vitae
                    perspiciatis rerum commodi error distinctio quisquam quis
                    voluptas. Reiciendis.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Porro repellendus corrupti sunt autem praesentium unde,
                    officiis tempore eveniet corporis incidunt amet eaque fuga.
                    Ipsum nam odio iusto consectetur natus commodi!Incidunt
                    reprehenderit, enim expedita voluptatum laboriosam quidem
                    debitis ipsum. Neque quae, accusamus nemo, quasi magni
                    quaerat eius aut consectetur necessitatibus vitae
                    perspiciatis rerum commodi error distinctio quisquam quis
                    voluptas. Reiciendis.
                </p>
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
