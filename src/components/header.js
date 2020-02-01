import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import logo from '../images/logo.svg';

const Header = ({ siteTitle }) => (
    <header className="header">
        <Link className="header__link" to="/">
            <img className="header__logo" src={logo} alt={siteTitle} />
            <h1 className="header__title">{siteTitle}</h1>
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
