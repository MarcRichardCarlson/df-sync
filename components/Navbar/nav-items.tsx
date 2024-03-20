import ContactIcon from "../../public/assets/HeroiconsChatBubbleBottomCenterText.svg"
import AboutIcon from "../../public/assets/HeroiconsBookOpen.svg"
import HomeIcon from "../../public/assets/HeroiconsHome.svg"
import Image from 'next/image';

export interface NavItem {
  icon: JSX.Element;
  label: string;
}

export const allNavItems = [
  {
    icon: (
      <Image src={HomeIcon} alt="Home Page Icon" height={32} width={32} />
    ),
    label: "nav-home",
    path: '/',
  },

  {
    icon: (
      <Image src={AboutIcon} alt="About Page Icon" height={32} width={32} />
    ),
    label: "nav-about",
    path: '/about',
  },

  {
    icon: (
      <Image src={ContactIcon} alt="Contact Page Icon" height={32} width={32} />
    ),
    label: "nav-contact",
    path: '/contact',
  },
];

const [Home, About, Contact] = allNavItems;
export const initialTabs = [Home, About, Contact];