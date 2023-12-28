import laterTech from './images/project-img/later-tech.png'
import canvasStore from './images/project-img/canvas.png'
import amazon from './images/project-img/amazon-store.png'
import fTracker from './images/project-img/tracker.png'
import musify from './images/project-img/musify.png'
import crypto from './images/project-img/crypto.png'
import techStore from './images/project-img/tech-store.png'
import twitter from './images/project-img/twitter.png'
import portfolio from './images/project-img/portfolio.png'


let projectData = [
    {
        id: 0,
        screenShot: portfolio,
        name: ' Portfolio',
        description: 'Building my portfolio site mainly consists of JSX, CSS, and Bootstrap. This project has helped me level up my styling skills as well as my responsiveness skills.',
        techUsed: ['React', 'React Router', 'Font-Awsome','CSS', 'Bootstrap'],
        // website: 'https://bkportfoliowebsite.web.app',
        code: 'https://github.com/Blake556/Portfolio'
    },
    {
        id: 1,
        screenShot: laterTech,
        name: 'Later Tech',
        description: 'Expanding on my previous e-commerce style project, this latest endeavor emphasizes a professionally deployed website with enhanced UI animations and advanced state management for an improved user experience.',
        techUsed: ['React', 'React Router', 'Font Awesome','JavaScript', 'Bootstrap'],
        website: 'https://later-tech.web.app/',
        code: 'https://github.com/Blake556/Later-tech'
    },
    {
        id: 2,
        screenShot: crypto,
        name: 'Crypto tracker',
        description: 'This app was built with a React front-end deployed to Firebase and an Express back-end deployed to Heroku. Crypto Tracker displays the top crypto prices and enables users to search for specific coins and their data.',
        techUsed: ['Full-stack', 'React', 'Express', 'API', 'Firebase', 'Heroku'],
        website: 'https://crypto-price-live-tracker.web.app/',
        code: 'https://github.com/Blake556/crypto-live-tracker' 
    },
    {
        id: 3,
        screenShot: fTracker,
        name: 'Calorie counter',
        description: 'This app is designed to help track your nutrition. The main idea behind this app is to create a "list" of data, similar to a todo app, but with specific values such as calories, carbs, and protein. After three days or logs, it calculates and returns the average for each category across those three days.',
        techUsed: ['React', 'JavaScript', 'CSS', 'Bootstrap'],
        website: 'https://blake556.github.io/Calorie-Tracker/',
        code: 'https://github.com/Blake556/Calorie-Tracker'
        
    }, 
    {
        id: 4,
        screenShot: musify,
        name: 'Musify',
        description: 'Musify is an app where you can search Spotify for your favorite music. This was a challenging project as it was my first experience working with APIs, without relying on tutorials, and instead utilizing resources such as Google, YouTube, Stack Overflow, and other forums for assistance.',
        techUsed: ['Full-stack', 'Spotify Api', 'Express','Ejs', 'CSS'],
        website: 'https://musify-search-960ef8d6826d.herokuapp.com/',
        code: 'https://github.com/Blake556/Musify'
    },
    {
        id: 5,
        screenShot: canvasStore,
        name: 'Canvas store',
        description: 'I built this to showcase building an e-commerce type store. This project has taught me how to use React Router and how to pass data from an array of objects for rendering the data, as well as passing selected data from one page to another through props.',
        techUsed: ['React', 'React Router', 'Material UI','JavaScript', 'Bootstrap'],
        website: 'https://canvas-store-71ff2.web.app',
        code: 'https://github.com/Blake556/Canvas-store'
    },
    // {
    //     id: 5,
    //     screenShot: techStore,
    //     name: 'Tech store',
    //     description: 'This website serves as an e-commerce store, demonstrating the use of vanilla JavaScript and DOM manipulation techniques. It showcases the power and versatility of JavaScript in building interactive and dynamic features for an online store. Through the effective manipulation of the DOM',
    //     techUsed: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    //     website: 'https://blake556.github.io/Tech-store/',
    //     code: 'https://github.com/Blake556/Tech-store' 
    // }, 
    {
        id: 6,
        screenShot: twitter,
        name: 'Twitter clone',
        description: 'Twitter clone aims to showcasing my ability to create a visually similar and functionally identical clone of an existing website. This project has taught me how to upload an image and use it in a web app.',
        techUsed: [ 'HTML', 'CSS', 'JavaScript', 'Bootstrap'],
        website: 'https://blake556.github.io/Twitter/',
        code: 'https://github.com/Blake556/Twitter' 
    },    
    {
        id: 7,
        screenShot: amazon,
        name: 'Amazon clone',
        description: 'This website was developed as an e-commerce store with the intention of serving as another replica site. Through this project, I gained valuable insights into using local storage to facilitate data transfer to the cart and enable essential functionality. However, like with all my apps, there is room for improvement.',
        techUsed: [ 'HTML', 'CSS', 'JavaScript', 'Bootstrap'],
        website: 'https://blake556.github.io/Amazon-2.0/html/clothes.html',
        code: 'https://github.com/Blake556/Amazon-2.0' 
    }, 

]

export default projectData;