module.exports = {
  siteMetadata: {
    title: "Riza Hariati's Portfolio",
    description: "Showcasing my work since June 2020",
    owner: "@rizahariati",
  },
  plugins: [
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Riza Hariati`,
        short_name: `AzriCoding`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#f06292`,
        display: `minimal-ui`,
        icon: `src/images/favicon-32x32.png`,
      },
    },
  ],
}
