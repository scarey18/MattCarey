module.exports = {
  siteMetadata: {
    title: `Matthew Carey | Baritone - Opera | Concert | Theater`,
    description: `Matthew Carey is a vocal performer, teacher, and Speech-Language Pathologist specializing in Singing Voice Therapy.`,
    author: `Sean Carey`,
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [],
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-polished`,
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Matthew Carey`,
        short_name: `Matthew Carey`,
        start_url: `/`,
        background_color: `#020202`,
        theme_color: `#fff`,
        display: `minimal-ui`,
        icon: `src/images/mattlogo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
