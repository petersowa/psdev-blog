/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './header';
import Menu from './menu';

import './layout.css';

const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                    author
                }
            }
        }
    `);

    return (
        <>
            <div className="v-container">
                <Header siteTitle={data.site.siteMetadata.title} />
                <Menu></Menu>

                <div className="container">
                    <aside className="sidebar sidebar--left"></aside>
                    <main className="main">{children}</main>
                    <aside className="sidebar sidebar--right"></aside>
                </div>
                <footer className="main__footer">
                    © {new Date().getFullYear()} by{' '}
                    {data.site.siteMetadata.author}, Built with
                    {` `}
                    <a href="https://www.gatsbyjs.org">Gatsby</a>
                </footer>
            </div>
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
