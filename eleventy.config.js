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