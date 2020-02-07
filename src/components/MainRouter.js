import React, { Component } from 'react';
// import { withPrefix } from 'gatsby';
import { Router, Redirect } from '@reach/router';
// import Layout from '../components/layout';
// import Profile from "../components/Profile"
// import Details from "../components/Details"
// import Login from "../components/Login"
import Default from './Default';
import Random from '../modules/test';

// const App = () => {
//     return (
//         // <div>test</div>
//         <Layout>
//             <MyRouter>
//                 {/* <Profile path="/app/profile" />
//         <Details path="/app/details" />
//         <Login path="/app/login" /> */}
//                 <Default path="app" />
//                 <Random path="/app/random" />
//                 <Random path="/app/random2" />
//                 <Redirect noThrow default to="/404" />
//                 {/* <div>test</div> */}
//             </MyRouter>
//         </Layout>
//     );
// };

class MainRouter extends Component {
    render() {
        return (
            <Router>
                <Default path="app" />
                <Random path="/app/random" />
                <Random path="/app/random2" />
                {/* <Redirect noThrow default to="/404" /> */}
                {/* <Random path="/app/random2" /> */}
            </Router>
        );
    }
}

export default MainRouter;

// export default App;
