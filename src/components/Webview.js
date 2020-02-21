import PropTypes from 'prop-types';
import React from 'react';

const Webview = ({ source }) => (
    <div className="webview">
        <iframe className="webview__iframe" src={source} sandbox></iframe>
    </div>
);

Webview.propTypes = {
    source: PropTypes.string,
};

Webview.defaultProps = {
    source: ``,
};

export default Webview;
