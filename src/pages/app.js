import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import MainRouter from '../components/MainRouter';

export default function app() {
    return (
        <Layout>
            <Seo title="Apps" />
            <h1 className="heading">Apps</h1>
            <MainRouter></MainRouter>
        </Layout>
    );
}
