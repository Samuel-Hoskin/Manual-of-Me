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

    icons: {
      mask: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📝 </text></svg>',
      shortcut: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📝 </text></svg>',
      touch: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📝 </text></svg>',

    },

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
  eleventyConfig.addPassthroughCopy("assets");

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