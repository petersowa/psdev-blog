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
                        aspectRatio
                        base64
                        sizes
                        src
                        srcSet
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
                <img
                    className="cover-image"
                    src={starsImage.file.childImageSharp.fluid.src}
                    srcSet={starsImage.file.childImageSharp.fluid.srcSet}
                    alt="milkyway on horizon"
                ></img>
            </div>
            <article
                dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
            />
            {/* <pre>{JSON.stringify(starsImage, null, 2)}</pre> */}
            <p className="article article-columns">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                repellendus corrupti sunt autem praesentium unde, officiis
                tempore eveniet corporis incidunt amet eaque fuga. Ipsum nam
                odio iusto consectetur natus commodi!Incidunt reprehenderit,
                enim expedita voluptatum laboriosam quidem debitis ipsum. Neque
                quae, accusamus nemo, quasi magni quaerat eius aut consectetur
                necessitatibus vitae perspiciatis rerum commodi error distinctio
                quisquam quis voluptas. Reiciendis.
            </p>
            <p className="article article-columns">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                repellendus corrupti sunt autem praesentium unde, officiis
                tempore eveniet corporis incidunt amet eaque fuga. Ipsum nam
                odio iusto consectetur natus commodi!Incidunt reprehenderit,
                enim expedita voluptatum laboriosam quidem debitis ipsum. Neque
                quae, accusamus nemo, quasi magni quaerat eius aut consectetur
                necessitatibus vitae perspiciatis rerum commodi error distinctio
                quisquam quis voluptas. Reiciendis.
            </p>
        </Layout>
    );
};

export default IndexPage;
