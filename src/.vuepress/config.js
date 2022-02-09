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
        children: [
          {
            text: 'About ME',
            link: '/me/',
          },
          {
            text: 'Vision',
            link: '/vision/',
          }
        ]
      },
      {
        text: 'KingdomBIZ',
        children: [
          {
            text: 'About KingdomBIZ',
            link: '/kingdombiz/',
          },
          {
            text: 'Tech & the Christian',
            link: '/kingdombiz/tech/',
          },
          {
            text: 'Testimonies',
            link: '/kingdombiz/testimonies/',
          },
        ]
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
            text: 'LinkedIn',
            link: 'https://www.linkedin.com/in/ndagistanley',
            target: '_blank'
          },
          {
            text: 'Twitter',
            link: 'https://twitter.com/NdagiStanley',
            target: '_blank'
          },
          {
            text: 'Contact',
            link: '/contact/',
          },
        ]
      },
      {
        text: 'TechK/n',
        link: 'https://techkln.org',
        target: '_blank'
      }
    ],
    sidebar: {
      '/vision/': [
        {
          text: 'Vision',
          link: '/vision/',
          children: ['/vision/2020', '/vision/2019', '/vision/2018', '/vision/2016'],
        },
      ],
      '/kingdombiz/': [
        {
          text: 'KingdomBIZ',
          link: '/kingdombiz/',
          children: [
            '/kingdombiz/tech',
            {
              text: 'Testimonies',
              link: '/kingdombiz/testimonies',
              children: ['/kingdombiz/testimonies/domains']
            }
          ],
        },
      ],
    },
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
