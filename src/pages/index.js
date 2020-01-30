import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <h1>Site Info</h1>
        <p>
            This is my new developer blog. I will have coding tips and links to
            coding resources, videos, and great tooling
        </p>
    </Layout>
);

export default IndexPage;
