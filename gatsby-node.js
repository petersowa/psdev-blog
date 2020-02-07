/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path');

exports.onCreateNode = ({ node }) => {
    if (node.internal.type === 'MarkdownRemark') {
        console.log('---', node.internal.type);
    }
};

exports.createPages = async ({ actions, graphql }) => {
    const { createPage } = actions;
    const result = await graphql(`
        query {
            allMarkdownRemark(filter: { fileAbsolutePath: { ne: null } }) {
                edges {
                    node {
                        frontmatter {
                            path
                        }
                    }
                }
            }
        }
    `);

    if (result.data) {
        result.data.allMarkdownRemark.edges.forEach(({ node }) => {
            // console.log(JSON.stringify(node, null, 2));
            if (node.frontmatter.path) {
                createPage({
                    path: node.frontmatter.path,
                    component: path.resolve('./src/templates/post-view.js'),
                    context: {
                        slug: node.frontmatter.path,
                    },
                });
            }
        });
    }
};

// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.onCreatePage = async ({ page, actions }) => {
    const { createPage } = actions;
    // Only update the `/app` page.
    if (page.path.match(/^\/app/)) {
        // page.matchPath is a special key that's used for matching pages
        // with corresponding routes only on the client.
        page.matchPath = '/app/*';
        // Update the page.
        createPage(page);
    }
};
