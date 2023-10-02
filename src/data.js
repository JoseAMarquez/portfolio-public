import projImg1 from './assets/img/project-img1.png';
import projImg2 from './assets/img/project-img2.png';
import projImg3 from './assets/img/project-img3.png';

//Skills Icons
import { FaHtml5 } from 'react-icons/fa'; //html
import { FaCss3Alt } from 'react-icons/fa'; //CSS
import { FaJsSquare } from 'react-icons/fa'; //JS
import { FaReact } from 'react-icons/fa'; //React
import { FaBootstrap } from 'react-icons/fa'; //Bootstrap
import { FaGithubSquare } from 'react-icons/fa'; //github
import { FaJava } from 'react-icons/fa'; //java
import { SiMysql } from 'react-icons/si'; //mysql
import { SiMongodb } from 'react-icons/si'; //mongo

//Socials
import linkedinIcon from './assets/img/linkedin.svg';
import githubIcon from './assets/img/github.svg';

const iconSize = 65;

//skills structure is id, name of skill, img of the skill
export const skills = [
  { id: 1, skill: 'Java', img: <FaJava size={iconSize} /> },
  { id: 2, skill: 'JavaScrip', img: <FaJsSquare size={iconSize} /> },
  { id: 3, skill: 'CSS', img: <FaCss3Alt size={iconSize} /> },
  { id: 4, skill: 'HTML', img: <FaHtml5 size={iconSize} /> },
  { id: 5, skill: 'React', img: <FaReact size={iconSize} /> },
  { id: 6, skill: 'Bootstrap ', img: <FaBootstrap size={iconSize} /> },
  { id: 7, skill: 'Github', img: <FaGithubSquare size={iconSize} /> },
  { id: 8, skill: 'MySQL ', img: <SiMysql size={iconSize} /> },
  { id: 9, skill: 'Mongo DB', img: <SiMongodb size={iconSize} /> },
];

export const links = [
  {
    id: 1,
    url: '/',
    text: 'random',
  },
  {
    id: 2,
    url: '/about',
    text: 'about',
  },
  {
    id: 3,
    url: '/projects',
    text: 'projects',
  },
  {
    id: 4,
    url: '/contact',
    text: 'contact',
  },
  {
    id: 5,
    url: '/profile',
    text: 'profile',
  },
];

//projects structure is title,description, image of project, link of the live demo and link to the code
export const projects = [
  {
    title: 'Business Startup',
    description: 'Design & Development',
    imgUrl: projImg1,
    demoLink: 'https://github.com/',
    codeLink: 'https://github.com/',
  },
  {
    title: 'Business Startup',
    description: 'Design & Development',
    imgUrl: projImg2,
    demoLink: 'https://github.com/',
    codeLink: 'https://github.com/',
  },
];

//social media structure is id(increasing), url of your social and logo of the social media
export const socials = [
  {
    id: 1,
    url: 'https://www.linkedin.com/',
    icon: <img src={linkedinIcon} alt='' />,
  },
  {
    id: 2,
    url: 'https://github.com/',
    icon: <img src={githubIcon} alt='' />,
  },
];
