const govukEleventyPlugin = require('@x-govuk/govuk-eleventy-plugin')

module.exports = function(eleventyConfig) {
  // Register the plugin
  eleventyConfig.addPlugin(govukEleventyPlugin,{
    brandColour: '#6f72af',
    header:{
        organisationLogo: '',
        organisationName:'Manual of Me',
    },
    fontFamily: 'arial',

    footer:{
      contentLicence: {
        text: ' '
      },
      copyright: {
        text: ' '
      },
      meta: {
        items: [
          {
            href: "https://github.com/Samuel-Hoskin/Manual-of-Me",
            text: "GitHub Repo"
          },
          {
            href: "/about",
            text: "About"
          },


        ],
        html: 'Built by  <a href="#" class="govuk-footer__link">Samuel Hoskin</a>'
      }
    }
        

  })

  return {
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dir: {
      // Use layouts from the plugin
      layouts: 'layouts'
    }
  }
};