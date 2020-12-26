module.exports = {
  siteMetadata: {
    title: `Daryll Capistrano`,
    description: `Full Stack Web Developer`,
    author: `Daryll Capistrano`,
    location: `Portland, Oregon`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `png`,
        path: `${__dirname}/src/assets/png`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `jpg`,
        path: `${__dirname}/src/assets/jpg`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#0C1A2E`,
        theme_color: `#0C1A2E`,
        display: `minimal-ui`,
        icon: `src/assets/png/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
