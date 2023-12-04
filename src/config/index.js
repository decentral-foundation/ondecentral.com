module.exports = {
  siteTitle:
    'Lucia Protocol - Infrastructure for Lending and Borrowing | Privacy Focused Web3 Access  |  Built on Polygon ',
  siteDescription: 'ZK-Proofs Implementation | Decentralized DeFi Platform',
  siteKeywords: 'zkevm, blockchain, lending, defi, loans, nodejs, rust, venture capital, vc',
  siteUrl: 'https://ondecentral.com',
  siteLanguage: 'en_US',
  name: 'Decentral',
  location: 'San Francisco, CA',
  email: 'info@ondecentral.com',
  openPositions: 'https://angel.co/company/decentralinc/jobs',
  webApp: 'https://portal.founderskit.org',
  socialMedia: [
    {
      name: 'Github',
      url: 'https://github.com/ondecentral/',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/company/founderskit/',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/lingqingmeng/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/luciaprotocol',
    },
  ],

  nav: [
    {
      name: 'About',
      url: '#about',
    },
    {
      name: 'FAQs',
      url: '#product',
    },
    {
      name: 'Team',
      url: '#team',
    },
    {
      name: 'Contact',
      url: '#contact',
    },
  ],

  twitterHandle: '@founders_kit',
  googleAnalyticsID: 'G-9HMJ423VGZ',

  googleVerification: '6sWFAYxVRjcZIj568rtimRaEsmce8cDIRSk3YLutZxI',
  headerHeight: 100,

  greenColor: '#e8804d',
  navyColor: '#1f1d1d',
  darkNavyColor: '#f7f0eb',
  armColor: '#a2466c',
  eeColor: '#f7f0eb',

  srConfig: (delay = 200) => {
    return {
      origin: 'bottom',
      distance: '20px',
      duration: 500,
      delay,
      rotate: { x: 0, y: 0, z: 0 },
      opacity: 0,
      scale: 1,
      easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
      mobile: true,
      reset: false,
      useDelay: 'always',
      viewFactor: 0.25,
      viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
    };
  },
};
