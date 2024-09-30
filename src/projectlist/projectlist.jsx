import HtmlPuzzle from '../assets/images/htmlpuzzle-snap-min.png';
import ChatApp from '../assets/images/chatapp-snap-min.png';
import TeamApp from '../assets/images/teamapp-snap-min.png';
import VidMonster from '../assets/images/vid-monster-snap-min.png';

/*
File Name: projectList.jsx 
Student Name: Gichul Jaun
Student ID: 301375948
Course: COMP229-408
Date: October 1, 2024
*/

export const projectList = [
  {
    id: 1,
    title: 'HTML Puzzle',
    text: 'Player need to solve a HTML tag puzzle. A timer starts once the player press the start button and they can check their score when the game ends. Built with React and Firebase.',
    img: HtmlPuzzle,
    link: 'https://gichul0317.github.io/react-puzzle-firebase/',
  },
  {
    id: 2,
    title: 'chatApp',
    text: 'A website for a concept project - a chat application. Designed the page first from Figma and built a responsive website in Webflow.',
    img: ChatApp,
    link: 'https://chatapp-landing-page-98aca7.webflow.io/',
  },
  {
    id: 3,
    title: 'teamApp',
    text: 'A full website design and build for a concept team collaboration platform. This website also includes a CMS blog. Built with Webflow and Figma',
    img: TeamApp,
    link: 'https://team-app-f7f7e2.webflow.io/',
  },
  {
    id: 4,
    title: 'vid-monster',
    text: 'Vid-Monster is a retro style game application. Player needs to defeat the vid-monster by choosing various actions such as "social distancing" and "wash hands". Built with React and Firebase.',
    img: VidMonster,
    link: 'https://vid-monster.netlify.app/',
  },
];
