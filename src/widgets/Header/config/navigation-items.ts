type NavigationItemType = {
  title: string;
  href: string;
};

type NavigationItemsType = {
  home: NavigationItemType;
  links: NavigationItemType[];
};

export const NavigationItems: NavigationItemsType = {
  home: {
    title: 'Home',
    href: '/'
  },
  links: [
    {
      title: 'About',
      href: '/about'
    },
    {
      title: 'Projects',
      href: '/projects'
    },
    {
      title: 'Contact',
      href: '/contact'
    }
  ]
};
