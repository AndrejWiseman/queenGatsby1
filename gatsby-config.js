/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {

  siteMetadata:{
    title: 'Queen',
    description: 'Kozmetički salon Queen - jer zaslužuješ samo najbolje! Dođi i uživaj u atmosferi koja će te osloboditi stresa i pružiti ti trenutke potpune relaksacije. Za zakazivanje termina, kontaktiraj nas putem telefona, vibera ili Facebook-a.',
    author: 'ByMe',
  },

  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    // `gatsby-plugin-scroll-reveal`,

    {
      resolve: 'gatsby-plugin-load-script',
      options: {
        src: '/static/scripts/script.js', // Change to the script filename
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // The unique name for each instance
        name: `images`,
        // Path to the directory
        path: `${__dirname}/src/assets/images`,
      },
    },
      {
        "resolve": `gatsby-source-filesystem`,
        "options": { "name": "carousel1", "path": `./src/assets/images/carousel1`}
      },

    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
          threshold: 0.1, // Percentage of an element's area that needs to be visible to launch animation
          once: true, // Defines if animation needs to be launched once
          disable: false, // Flag for disabling animations

          // Advanced Options
          selector: '[data-sal]', // Selector of the elements to be animated
          animateClassName: 'sal-animate', // Class name which triggers animation
          disabledClassName: 'sal-disabled', // Class name which defines the disabled state
          rootMargin: '0% 50%', // Corresponds to root's bounding box margin
          enterEventName: 'sal:in', // Enter event name
          exitEventName: 'sal:out', // Exit event name
      }
    },

    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Josefin Sans",
              variants: ["300", "400", "500", "600" ,"700"],
            },
            {
              family: "Crimson Text",
              variants: ["300", "400", "500", "600" ,"700"],
            },
            {
              family: "Playfair Display",
              variants: ["300", "400", "500", "600" ,"700"],
            },
            {
              family: "Hanken Grotesk",
              variants: ["300", "400", "500", "600" ,"700"],
            },
          ],
        },
      },
    },



  ],
}
