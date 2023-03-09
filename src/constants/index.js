import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  jobufea,
  nearhub,
  btcs,
  bookingapp,
  jobit,
  callcenter,
  travelpage,
  nftmarketplace,
  threejs,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'Frontend Developer',
    icon: mobile,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Web3 Developer',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Fullstack Next.js Developer',
    company_name: 'Jobufea',
    icon: jobufea,
    iconBg: '#383E56',
    date: 'Oct 2021 - Mar 2023',
    points: [
      'Developing and maintaining web applications using Next.js and other related technologies.',
      'Coding APIs for the web application using Nest.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring server running efficiently.',
    ],
  },
  {
    title: 'Fullstack Web Developer',
    company_name: 'BTCs',
    icon: btcs,
    iconBg: '#E6DEDD',
    date: 'Feb 2022 - Feb 2023',
    points: [
      'Developing Frontend and Backend of Call Center web applications using React.js, Nest.js and other related technologies.',
      'Participating in designing UI/UX for the web applications',
      'Designing and developing IVR (Interactive Voice Response) features using Rete.js',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Blockchain Developer',
    company_name: 'BTCs',
    icon: btcs,
    iconBg: '#E6DEDD',
    date: 'May 2022 - Feb 2023',
    points: [
      'Developing and maintaining blockchain web3 NFT game using React.js and other related technologies.',
      'Developing Smart Contract for the web3 NFT game using Solidity',
      'Participating in designing feature specifications for the NFT game',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
    ],
  },
  {
    title: 'Blockchain Developer',
    company_name: 'Nearhub',
    icon: nearhub,
    iconBg: '#383E56',
    date: 'May 2022 - Oct 2022',
    points: [
      'Developing Smart Contract for the NFT Marketplace using NEAR - Rust SDK',
      'Bulding projects on Near Protocol Blockchain',
      'Participating in designing feature specifications for the NFT game',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects = [
  {
    name: 'Booking App',
    description:
      'Web-based platform that allows users to search and book hotels and manage booking history from various hotel providers, providing a convenient and efficient solution for travelling needs.',
    tags: [
      {
        name: 'reactjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'Module scss',
        color: 'pink-text-gradient',
      },
    ],
    image: bookingapp,
    source_code_link: 'https://github.com/muoi07052001/booking-app-front-end',
    live_link: 'https://booking-app-front-end.vercel.app/',
  },
  {
    name: 'Japanese Job IT',
    description:
      'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs in Japan.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'mysql',
        color: 'green-text-gradient',
      },
      {
        name: 'Module scss',
        color: 'pink-text-gradient',
      },
    ],
    image: jobit,
    source_code_link: 'https://github.com/muoi07052001',
    live_link: 'https://jobufea.com',
  },
  {
    name: 'Travel Page',
    description:
      'A comprehensive travel booking platform that allows users to book hotels, buy essential travelling products, and offers curated recommendations for popular destinations.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'postgresql',
        color: 'green-text-gradient',
      },
      {
        name: 'Module scss',
        color: 'pink-text-gradient',
      },
    ],
    image: travelpage,
    source_code_link: 'https://github.com/muoi07052001/db-travel-page-project',
    live_link: 'https://db-travel-page-project.vercel.app/',
  },
  {
    name: 'Call Center',
    description:
      'Web-based platform that allows users to search and manage call history from various contact providers, providing a convenient and efficient solution for setup calling options.',
    tags: [
      {
        name: 'reactjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'postgresql',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: callcenter,
    source_code_link: 'https://github.com/muoi07052001/',
    live_link: 'https://db-travel-page-project.vercel.app/',
  },
  {
    name: 'Near NFT Marketplace',
    description:
      'The Blockchain Game Crowdfunding Platform integrated with NFT Marketplace built on NEAR Protocol Blockchain using Rust SDK',
    tags: [
      {
        name: 'near',
        color: 'blue-text-gradient',
      },
      {
        name: 'rust',
        color: 'green-text-gradient',
      },
      {
        name: 'blockchain',
        color: 'pink-text-gradient',
      },
    ],
    image: nftmarketplace,
    source_code_link: 'https://github.com/muoi07052001/nearhub-marketplace',
    live_link: 'https://testnet.nearhub.io/',
  },
];

export { services, technologies, experiences, testimonials, projects };
