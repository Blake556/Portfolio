import canvasStore from './images/project-img/canvas.png'
import amazon from './images/project-img/amazon-store.png'
import fTracker from './images/project-img/tracker.png'
import musify from './images/project-img/musify.png'
import todo from './images/project-img/todo.png'
import techStore from './images/project-img/tech-store.png'
import twitter from './images/project-img/twitter.png'


let projectData = [
    {
        id: 0,
        screenShot: canvasStore,
        name: 'Canvas store',
        description: 'I built this to showcase building an e-commerce type store. This project has taught me how to use React Router and how to pass data from an array of objects for rendering the data, as well as passing selected data from one page to another through props.',
        techUsed: ['React', 'React Router', 'Material UI','JavaScript', 'Bootstrap'],
        website: 'https://blake556.github.io/Canvas-store/',
        code: 'https://github.com/Blake556/Canvas-store'
    },
    {
        id: 1,
        screenShot: fTracker,
        name: 'Calorie counter',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        techUsed: ['React', 'JavaScript', 'CSS', 'Bootstrap'],
        website: 'https://blake556.github.io/Calorie-Tracker/',
        code: 'https://github.com/Blake556/Calorie-Tracker'
        
    }, 
    {
        id: 2,
        screenShot: musify,
        name: 'Musify',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        techUsed: ['Spotify Api', 'Node', 'Express','Ejs', 'CSS'],
        website: 'https://',
        code: 'https://github.com/Blake556/Musify' 
    },
    {
        id: 3,
        screenShot: todo,
        name: 'Todo list',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        techUsed: ['Node', 'Express', 'EJS', 'CSS'],
        website: 'https://',
        code: 'https://github.com/Blake556/Todo-app' 
    },
    {
        id: 4,
        screenShot: techStore,
        name: 'Tech store',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        techUsed: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
        website: 'https://blake556.github.io/Electronics-store/',
        code: 'https://github.com/Blake556/Tech-store' 
    }, 
    {
        id: 5,
        screenShot: twitter,
        name: 'Twitter 2.0',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        techUsed: ['HTML', 'CSS', 'JavaScript'],
        website: 'https://blake556.github.io/Twitter/',
        code: 'https://github.com/Blake556/Twitter' 
    },    
    {
        id: 6,
        screenShot: amazon,
        name: 'Amazon 2.0',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        techUsed: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
        website: 'https://blake556.github.io/Amazon-2.0/html/clothes.html',
        code: 'https://github.com/Blake556/Amazon-2.0' 
    }, 

]

export default projectData;