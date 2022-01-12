const { description } = require('../../package')
const { path } = require('@vuepress/utils')

module.exports = {
  // site config
  lang: 'en-US',
  title: 'Ndagi, Stanley M.',
  description: description,

  // theme and its config
  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: 'he_.png',
    navbar: [
      {
        text: 'About',
        link: '/me/'
      },
      {
        text: 'KingdomBIZ',
        link: '/kingdombiz/'
      },
      {
        text: 'Blog',
        link: 'https://blog.md.engineer',
        target: '_blank'
      },
      {
        text: 'Code',
        link: 'https://github.com/NdagiStanley',
        target: '_blank'
      },
      {
        text: 'Et al (Others)',
        children: [
          {
            text: 'Career',
            link: 'https://www.linkedin.com/in/ndagistanley',
            target: '_blank'
          },
          {
            text: 'Twitter',
            link: 'https://twitter.com/NdagiStanley',
            target: '_blank'
          },
        ]
      },
      {
        text: 'TechK/n',
        link: 'https://techkln.org',
        target: '_blank'
      }
    ],
    themePlugins: {
      // disable git plugin
      git: false,
    },
  },
  plugins: [
    [
      '@vuepress/register-components',
      {
        componentsDir: path.resolve(__dirname, './components'),
      },
    ],
  ],
}
