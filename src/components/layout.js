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
        <div className="layout">
            <Header
                className="layout__header"
                siteTitle={data.site.siteMetadata.title}
            />
            <Menu className="layout__menu"></Menu>

            <div className="layout__body">
                <aside className="layout__sidebar layout__sidebar--left"></aside>
                <main className="layout__content">{children}</main>
                <aside className="layout__sidebar layout__sidebar--right"></aside>
            </div>
            <footer className="layout__footer">
                © {new Date().getFullYear()} by {data.site.siteMetadata.author},
                Built with
                {` `}
                <a
                    className="layout__footer__link"
                    href="https://www.gatsbyjs.org"
                >
                    Gatsby
                </a>
            </footer>
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
