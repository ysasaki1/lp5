export const headerData = {
  links: [
    {
      text: 'Home',
      links: [
        {
          text: 'Support Art Students',
          href: getPermalink('/homes/support-art-students'),
        },
        {
          text: 'Artworks',
          href: getPermalink('/homes/artworks'),
        },
        {
          text: 'Become a Supporter',
          href: getPermalink('/homes/become-a-supporter'),
        },
      ],
    },
    {
      text: 'Pages',
      links: [
        {
          text: 'Features',
          href: getPermalink('/#features'),
        },
        {
          text: 'Pricing',
          href: getPermalink('/pricing'),
        },
        {
          text: 'About Us',
          href: getPermalink('/about'),
        },
        {
          text: 'Contact',
          href: getPermalink('/contact'),
        },
        {
          text: 'Terms',
          href: getPermalink('/terms'),
        },
        {
          text: 'Privacy Policy',
          href: getPermalink('/privacy'),
        },
      ],
    },
    {
      text: 'Blog',
      links: [
        {
          text: 'Blog List',
          href: getBlogPermalink(),
        },
        {
          text: 'Art Support Stories',
          href: getPermalink('art-support-stories', 'post'),
        },
        {
          text: 'How to Support Artists',
          href: getPermalink('how-to-support-artists', 'post'),
        },
      ],
    },
  ],
  actions: [{ text: 'Join as a Supporter', href: 'https://www.artplatform.com/join', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Support',
      links: [
        { text: 'How It Works', href: '#' },
        { text: 'Benefits of Supporting', href: '#' },
        { text: 'FAQs', href: '#' },
        { text: 'Testimonials', href: '#' },
        { text: 'Pricing Plans', href: '#' },
      ],
    },
    {
      title: 'Community',
      links: [
        { text: 'Art Students', href: '#' },
        { text: 'Supporters', href: '#' },
        { text: 'Events', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About Us', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Careers', href: '#' },
        { text: 'Contact', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'Twitter', icon: 'tabler:brand-twitter', href: '#' },
    { ariaLabel: 'GitHub', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://onwidget.com/favicon/favicon-32x32.png" alt="onWidget logo" loading="lazy"></img>
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://onwidget.com/"> onWidget</a> · All rights reserved.
  `,
};
