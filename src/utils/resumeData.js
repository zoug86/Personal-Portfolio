import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { WebOutlined, AssignmentOutlined, YouTube, Language } from '@material-ui/icons';

const resumeData = {
    name: "Houssem Marzougui",
    title: " Full Stack Developer",
    email: "marzouguih86@gmail.com",
    address: "3837 Midgard Place, Victoria, BC",
    phone: "+1 778 318 7601",
    skype: "zoug86",
    socials: {
        Facebook: {
            link: "https://www.facebook.com",
            text: "facebook",
            icon: <FacebookIcon />
        },
        Twitter: {
            link: "https://www.facebook.com",
            text: "twitter",
            icon: <TwitterIcon />
        },
        LinkedIn: {
            link: "https://www.facebook.com",
            text: "linkedIn",
            icon: <LinkedInIcon />
        },
        Github: {
            link: "https://www.facebook.com",
            text: "github",
            icon: <GitHubIcon />
        }
    },
    about: "Started earnest brother believe an exposed so. Me he believing daughters if forfeited at furniture. Age again and stuff downs spoke. Late hour new nay able fat each sell. Nor themselves age introduced frequently use unsatiable devonshire get. They why quit gay cold rose deal park. One same they four did ask busy. Reserved opinions fat him nay position. Breakfast as zealously incommode do agreeable furniture. One too nay led fanny allow plate.\n\nQuick six blind smart out burst. Perfectly on furniture dejection determine my depending an to. Add short water court fat. Her bachelor honoured perceive securing but desirous ham required. Questions deficient acuteness to engrossed as. Entirely led ten humoured greatest and yourself. Besides ye country on observe. She continue appetite endeavor she judgment interest the met. For she surrounded motionless fat resolution may.",
    experiences: [
        {
            title: "Work 1",
            date: "2018 - Present",
            description: "Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor."
        },
        {
            title: "Work 2",
            date: "2018 - Present",
            description: "Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor."
        },
        {
            title: "Work 3",
            date: "2018 - Present",
            description: "Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor."
        }
    ],
    educations: [
        {
            title: "School 1",
            date: "2017 - 2020",
            description: "Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor."
        },
        {
            title: "School 2",
            date: "2007 - 2011",
            description: "Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor."
        }
    ],

    services: [
        {
            title: 'Web Development',
            description: 'I have been a web developer for 10 years',
            icon: <WebOutlined />
        },
        {
            title: 'Branding Identity',
            description: 'I have been a web developer for 10 years',
            icon: <AssignmentOutlined />
        },
        {
            title: 'Illustrator',
            description: 'I have been a web developer for 10 years',
            icon: <WebOutlined />
        },
        {
            title: 'Illustrator',
            description: 'I have been a web developer for 10 years',
            icon: <WebOutlined />
        }
    ],

    skills: [
        {
            title: 'FRONT_END',
            description: [
                "REACTJS",
                "JavaScript",
                "TypeScript",
                "Bootstrap",
                "Material UI"
            ]

        },
        {
            title: 'BACK_END',
            description: [
                "NODEJS",
                "Java",
                "Python",
                "Solidity"
            ]

        },
        {
            title: 'DATABASES',
            description: [
                "Firebase",
                "Ms SQL server",
                "MySQL",
                "MongoDB"
            ]

        },
        {
            title: 'SOURCE CONTROL',
            description: [
                "Git",
                "GitHub",
                "SCRUM/Agile"
            ]

        }
    ],
    projects: [
        {
            tag: 'React',
            imageUrl: 'https://wallpaperaccess.com/full/1758755.jpg',
            title: 'Project 1',
            caption: 'This is my project description.',
            description: 'This is my project description. More will come later on...............',
            links: [
                { link: 'https://www.google.com', icon: <YouTube /> },
                { link: 'https://www.google.com', icon: <GitHubIcon /> },
                { link: 'https://www.google.com', icon: <Language /> }
            ],
        },
        {
            tag: 'React',
            imageUrl: 'https://wallpaperaccess.com/full/1758755.jpg',
            title: 'Project 2',
            caption: 'This is my project description.',
            description: 'This is my project description. More will come later on...............',
            links: [
                { link: 'https://www.google.com', icon: <YouTube /> },
                { link: 'https://www.google.com', icon: <GitHubIcon /> },
                { link: 'https://www.google.com', icon: <Language /> }
            ],
        },
        {
            tag: 'React',
            imageUrl: 'https://wallpaperaccess.com/full/1758755.jpg',
            title: 'Project 3',
            caption: 'This is my project description.',
            description: 'This is my project description. More will come later on...............',
            links: [
                { link: 'https://www.google.com', icon: <YouTube /> },
                { link: 'https://www.google.com', icon: <GitHubIcon /> },
                { link: 'https://www.google.com', icon: <Language /> }
            ],
        },
        {
            tag: 'Nodejs',
            imageUrl: 'https://wallpaperaccess.com/full/1758755.jpg',
            title: 'Project 4',
            caption: 'This is my project description.',
            description: 'This is my project description. More will come later on...............',
            links: [
                { link: 'https://www.google.com', icon: <YouTube /> },
                { link: 'https://www.google.com', icon: <GitHubIcon /> },
                { link: 'https://www.google.com', icon: <Language /> }
            ],
        },
        {
            tag: 'API',
            imageUrl: 'https://wallpaperaccess.com/full/1758755.jpg',
            title: 'Project 5',
            caption: 'This is my project description.',
            description: 'This is my project description. More will come later on...............',
            links: [
                { link: 'https://www.google.com', icon: <YouTube /> },
                { link: 'https://www.google.com', icon: <GitHubIcon /> },
                { link: 'https://www.google.com', icon: <Language /> }
            ],
        },
        {
            tag: 'SQL',
            imageUrl: 'https://wallpaperaccess.com/full/1758755.jpg',
            title: 'Project 6',
            caption: 'This is my project description.',
            description: 'This is my project description. More will come later on...............',
            links: [
                { link: 'https://www.google.com', icon: <YouTube /> },
                { link: 'https://www.google.com', icon: <GitHubIcon /> },
                { link: 'https://www.google.com', icon: <Language /> }
            ],
        }

    ]
}

export default resumeData;