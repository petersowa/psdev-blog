require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
    siteMetadata: {
        title: `PS Dev Blog`,
        description: `A developer blog: coding articles, links, demos.`,
        author: `Peter Sowa (devspeter)`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `ps-developer-blog`,
                short_name: `blog`,
                start_url: `/`,
                // background_color: `#663399`,
                // theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/logo.svg`, // This path is relative to the root of the site.
            },
        },
        `gatsby-plugin-sass`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `data`,
                path: `${__dirname}/src/data`,
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: 'gatsby-remark-external-links',
                        options: {
                            target: '_blank',
                            rel: 'noopener noreferrer',
                        },
                    },
                ],
            },
        },
        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: process.env.GATSBY_CONTENTFUL_SPACEID,
                accessToken: process.env.GATSBY_CONTENTFUL_TOKEN,
            },
        },
        // {
        //     resolve: `gatsby-plugin-typescript`,
        // },
        // {
        //     resolve: `gatsby-plugin-create-client-paths`,
        //     options: { prefixes: [`/app/*`] },
        // },

        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
};
