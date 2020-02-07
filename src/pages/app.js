import React from 'react';
import { Router, Redirect } from '@reach/router';
import Layout from '../components/layout';
// import Profile from "../components/Profile"
// import Details from "../components/Details"
// import Login from "../components/Login"
import Default from '../components/Default';
import Random from '../modules/test';

const App = () => {
    return (
        <Layout>
            <Router>
                {/* <Profile path="/app/profile" />
        <Details path="/app/details" />
        <Login path="/app/login" /> */}
                <Default path="/app" />
                <Random path="/app/random" />
                <Random path="/app/random2" />
                <Redirect noThrow default to="/404" />
            </Router>
        </Layout>
    );
};

export default App;
