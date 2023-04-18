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
  portfolio,
  threejs,
  hien,
  long,
  quang,
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
    id: 'project',
    title: 'Project',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

export const basicInfo = [
  { name: 'Birthday', value: '7 May 2001' },
  { name: 'Website', value: 'https://www.linkedin.com/in/zuongnh/' },
  { name: 'Degree', value: 'University' },
  { name: 'City', value: 'Hanoi' },
  { name: 'Age', value: '22' },
  { name: 'Email', value: 'muoi07052001@gmail.com' },
  { name: 'Phone', value: '+84 339410781' },
  { name: 'Freelance', value: 'Available' },
];

export const skillProgressBar = [
  { name: 'Frontend', percentage: '80' },
  { name: 'Backend', percentage: '70' },
  { name: 'Deployment', percentage: '65' },
  { name: 'Blockchain', percentage: '65' },
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
      'Duong is such a talented person and is one of the students with the highest score at our university.',
    name: 'Hien Hoang',
    designation: 'Student',
    company: 'HUST',
    image: hien,
  },
  {
    testimonial:
      'I really appreciate Duong for his extremly hard-working and spirit when doing internship at my company',
    name: 'Long Nguyen',
    designation: 'CTO',
    company: 'BTCs',
    image: long,
  },
  {
    testimonial:
      'Duong is a dedicated person who always willing to learn, practice and build. And he still has a long way ahead',
    name: 'Quang Dang',
    designation: 'CTO',
    company: 'Jobufea',
    image: quang,
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
    source_code_link: 'https://github.com/dylan751/booking-app-front-end',
    live_link: 'https://booking-app-front-end.vercel.app/',
    source_code_enable: true,
    live_enable: true,
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
    source_code_link: 'https://github.com/dylan751',
    live_link: 'https://jobufea.com',
    source_code_enable: false,
    live_enable: true,
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
    source_code_link: 'https://github.com/dylan751/db-travel-page-project',
    live_link: 'https://db-travel-page-project.vercel.app/',
    source_code_enable: true,
    live_enable: false,
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
    source_code_link: 'https://github.com/dylan751/',
    live_link: 'https://ccp.ast-dev.ai-studio-work.net',
    source_code_enable: false,
    live_enable: false,
  },
  {
    name: 'Near NFT Marketplace',
    description:
      'The Blockchain Game Crowdfunding Platform integrated with NFT Marketplace built on NEAR Protocol Blockchain using Rust SDK and ReactJS',
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
    source_code_link: 'https://github.com/dylan751/nearhub-marketplace',
    live_link: 'https://testnet.nearhub.io/',
    source_code_enable: true,
    live_enable: false,
  },
  {
    name: 'Personal Portfolio',
    description:
      'My Portfolio Website built with Vite and Three.js. It is where I show my background, skills, interests and share my projects to everyone',
    tags: [
      {
        name: 'vite',
        color: 'blue-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'green-text-gradient',
      },
      {
        name: 'threejs',
        color: 'pink-text-gradient',
      },
    ],
    image: portfolio,
    source_code_link: 'https://github.com/dylan751/portfolio',
    live_link: 'https://portfolio-seven-ashen-81.vercel.app/',
    source_code_enable: true,
    live_enable: true,
  },
];

export { services, technologies, experiences, testimonials, projects };
