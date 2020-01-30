import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const SecondPage = () => (
    <Layout>
        <SEO title="About" />
        <h1>About Page</h1>
        <p className="article-columns">
            I am a web developer. Working on mostly on front end UI/UX dev. I
            also have exprience working with back end dev tools such as
            Express.js.
        </p>
    </Layout>
);

export default SecondPage;
