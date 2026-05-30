export interface NavigationItem {
  name: string;
  href?: string;
  children?: NavigationItem[];
}

export const navigationData: NavigationItem[] = [
  {
    name: '🏠 Home',
    href: '/',
  },
  {
    name: '📖 About',
    href: '/about',
    children: [
      { name: 'Our Story', href: '/about' },
      { name: 'Mission & Philosophy', href: '/about' },
      { name: 'Contact', href: '/contact' },
    ],
  },
  {
    name: '🛠️ Services',
    href: '/services',
  },
  {
    name: '🛍️ Shop (Marketplace)',
    href: '/shop',
    children: [
      { name: 'Herbal Blends & Teas', href: '/shop' },
      { name: 'Oils (Essential & Carrier)', href: '/shop' },
      { name: 'Massage & Aromatherapy Kits', href: '/shop' },
      { name: 'DIY Kits', href: '/shop' },
      { name: 'Digital Products (E-books, PDFs)', href: '/shop' },
    ],
  },
  {
    name: '🌍 Region and Traditions',
    href: '/region-and-traditions',
    children: [
      {
        name: '🌎 Global Apothecary',
        href: '/region-and-traditions',
      },
      {
        name: '🌍 African Herbal Apothecary',
        href: '/region-and-traditions',
      },
    ],
  },
  {
    name: '🕉️ Global Homeopathy & Ayurveda',
    href: '/global-homeopathy-ayurveda',
  },
  {
    name: '🌿 Natural Ingredients & Oils',
    href: '/natural-ingredients-oils',
  },
  {
    name: '🌸 Aromatherapy & Massage Therapy',
    href: '/aromatherapy-massage',
  },
  {
    name: '💚 Benefits',
    href: '/benefits',
  },
  {
    name: '🧪 DIY & Recipes',
    href: '/diy-recipes',
  },
  {
    name: '📚 Education Hub',
    href: '/education-hub',
  },
  {
    name: '🍃 Nutrition & Wellness',
    href: '/nutrition-wellness',
  },
  {
    name: '🕊️ Mind & Spirit',
    href: '/mind-spirit',
  },
  {
    name: '🌐 Community & Learning',
    href: '/community-learning',
  },
  {
    name: '🤖 FM Assist',
    href: '/fm-assist',
  },
  {
    name: '📘 Website Guide',
    href: '/website-guide',
  },
];
