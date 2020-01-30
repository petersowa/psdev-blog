import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import logo from '../images/logo.svg';

const Header = ({ siteTitle }) => (
    <header className="main-header">
        <Link className="main-header__logo" to="/">
            <img
                className="main-header__logo__image"
                src={logo}
                alt={siteTitle}
            />
            <h1 className="main-header__logo__title">{siteTitle}</h1>
        </Link>
    </header>
);

Header.propTypes = {
    siteTitle: PropTypes.string,
};

Header.defaultProps = {
    siteTitle: ``,
};

export default Header;
