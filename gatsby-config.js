module.exports = {
  siteMetadata: {
    title: `Careers in Code`,
    description: `Careers in Code is a coding bootcamp that teaches computer programming to women and minorities to help combat poverty in Central NY. We provide students with the technical skills they need to obtain internships and entry level software development jobs with local employers after 24 weeks of instruction.`,
    author: `@hackupstate`,
    image: `./images/banners/careers-in-code-banner-optimized.jpg`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-styled-components`,
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/hu-logo-small.png`, // This path is relative to the root of the site.
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
