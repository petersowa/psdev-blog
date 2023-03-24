import React from 'react';
import ReactMarkdown from 'react-markdown';

import Layout from '../components/layout';
import Seo from '../components/seo';

// import Webview from '../components/Webview';

const AboutMD = `I am a UI/UX web developer with experience building mobile ready, response web sites.  I am working in the financial industry helping to improve web UI/UX and integrate third party payment and support applications.  I've worked mostly with Front End development but also helped develop and support a Node Express.JS based backend to provide an API for storing and retrieving client secure information.  The API was built, tested, and deployed on Pivotal Cloud Foundry.

Experienced working with: React.JS, Node, ExpressJS, HTML, CSS, SASS, JavaScript, Typescript, jQuery, Webpack, Grunt, Jenkins, Pivotal Cloud Foundry.

I have built projects with JWT authentication using Firebase, Auth0 and used databases, such as, MongoDB, Firestore.  One project is a task tracking (todo) and scheduling site: [FireTodo](https://firetodo.devspeter.space/)

I have knowledge of Python, Docker, and Kubernetes.  My preferred coding editor is VS Code.

To view my code editor settings, git aliases, and some of my favorite VS Code extensions take a look at my [Gists](https://gist.github.com/petersowa).

This site is build using React and Gatsby.  Some of the content is added using a web based content management system [Contentful](https://www.contentful.com/) and using locally generated Markdown files.

Take a look at my codepen for see some of my play projects.  Like a [Gravity Sim](https://codepen.io/petersowa/pen/pYKbQa) using CSS and JS.  It has a draggable control area and works with mouse and touch.

Please use the [contact](/contact) page to send any comments, suggestions or questions.`;

const AboutPage = () => {
    return (
        <Layout>
            <Seo title="About" />
            <h1 className="heading">About Me</h1>
            <article className="article article-columns">
                <ReactMarkdown source={AboutMD} />
            </article>
        </Layout>
    );
};

export default AboutPage;
