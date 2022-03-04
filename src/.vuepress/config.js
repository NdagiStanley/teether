const { description } = require('../../package')
const { path } = require('@vuepress/utils')

module.exports = {
  // site config
  lang: 'en-US',
  title: 'Ndagi, Stanley M.',
  description: description,

  // theme and its config
  theme: path.resolve(__dirname, './theme'),
  themeConfig: {
    logo: 'he_.png',
    docsRepo: 'https://github.com/NdagiStanley/teether',
    docsBranch: 'main',
    docsDir: 'src',
    editLinkPattern: ':repo/edit/:branch/:path',
    editLink: false,
    editLinkText: 'Noted a typo or want to improve this page? Help me out! Edit this page on GitHub.',
    navbar: [
      {
        text: 'About',
        children: [
          {
            text: 'Me',
            link: '/me/',
          },
          {
            text: 'My Vision',
            link: '/vision/',
          },
          {
            text: 'Beta Tester',
            link: '/beta-tester/',
          }
        ]
      },
      {
        text: 'KingdomBIZ',
        children: [
          {
            text: 'About',
            link: '/kingdombiz/',
          },
          {
            text: 'Tech',
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
        link: '/blog/'
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
            text: 'Blog on Hashnode',
            link: 'https://blog.md.engineer',
            target: '_blank'
          },
          {
            text: 'Code on GitHub',
            link: 'https://github.com/NdagiStanley',
            target: '_blank'
          },
        ]
      },
      {
        text: 'TechK/n',
        link: 'https://techkln.org',
        target: '_blank'
      },
      {
        text: 'Contact',
        link: '/contact/',
      },
    ],
    sidebar: {
      '/vision': [
        {
          text: 'Vision',
          link: '/vision/',
          children: ['/vision/2020', '/vision/2019', '/vision/2018', '/vision/2016'],
        },
      ],
      '/kingdombiz': [
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
      '/blog': [
        {
          text: 'Blog',
          link: '/blog/',
          children: ['/blog/github-stars', '/blog/vue-django', '/blog/andela', '/blog/beta-tester'],
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
