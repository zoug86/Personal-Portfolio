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
            link: "https://www.facebook.com/elhoss86USNA11",
            text: "facebook",
            icon: <FacebookIcon />
        },
        Twitter: {
            link: "https://twitter.com/elhoss86",
            text: "twitter",
            icon: <TwitterIcon />
        },
        LinkedIn: {
            link: "https://www.linkedin.com/in/houssem-marzougui-0424a795/",
            text: "linkedIn",
            icon: <LinkedInIcon />
        },
        Github: {
            link: "https://github.com/zoug86",
            text: "github",
            icon: <GitHubIcon />
        }
    },
    about: "Started earnest brother believe an exposed so. Me he believing daughters if forfeited at furniture. Age again and stuff downs spoke. Late hour new nay able fat each sell. Nor themselves age introduced frequently use unsatiable devonshire get. They why quit gay cold rose deal park. One same they four did ask busy. Reserved opinions fat him nay position. Breakfast as zealously incommode do agreeable furniture. One too nay led fanny allow plate.\n\nQuick six blind smart out burst. Perfectly on furniture dejection determine my depending an to. Add short water court fat. Her bachelor honoured perceive securing but desirous ham required. Questions deficient acuteness to engrossed as. Entirely led ten humoured greatest and yourself. Besides ye country on observe. She continue appetite endeavor she judgment interest the met. For she surrounded motionless fat resolution may.",
    experiences: [
        {
            title: "Remote Moderator",
            logo: "https://www.wayup.com/cdn/company_logo/XkdurYpgQf_20140918.jpg",
            company: "OneClass",
            date: "2018 - Present",
            description: "Supervise and moderate platform educators to ensure highest quality service to students in North America in different computer science and engineering courses."
        },
        {
            title: "Engineering Technical Analyst",
            date: "2019",
            logo: "https://media.tenor.com/images/76cfc2c79b7d2be1f9a8c291b558b852/tenor.png",
            company: "Deloitte",
            description: "Produced and partially managed Scientific Research and Experimental Development (SR&ED) technical reports for clients in many industries including TMT and Manufacturing in English and French in a rapid and challenging work environment."
        },
        {
            title: "Research and Teaching Assistant",
            logo: "https://media.glassdoor.com/sqll/146432/university-of-victoria-squarelogo.png",
            company: "University of Victoria",
            date: "2017 - 2020",
            description: "Implemented and simulated medical ultrasound imaging algorithms in Matlab using adaptive and conventional plane wave compounding techniques that reduced computational complexity and maintained similar image quality.",
            publication: "https://ieeexplore.ieee.org/document/8925560"

        },
        {
            title: "Software Engineer",
            logo: "http://hayouni.com/images/tnmilitary.jpg",
            company: "Tunisian Naval Electronics Division",
            date: "2015 - 2017",
            description: "•	Developed a Tracking Software using TLD algorithm to enhance weapon systems by adding the capacity of auto- aiming (.Net/C#, DSP). \n•	Designed a smart ship engine surveillance system where Temperature and pressure are collected from the engine sensors using an Arduino board and communicated via TCP / IP connection to a Web App that ensures treating and displaying the data. (SPA, C++, Node - Red, JavaScript, SQL).",
        },
        {
            title: "Communications Officer",
            logo: "http://hayouni.com/images/tnmilitary.jpg",
            company: "Tunisian Navy",
            date: "2011 - 2015",
            description: "Developed and supervised maintenance planning for all communication equipments onboard naval units to ensure full operational status of different satellite and terrestrial communication systems.."
        }
    ],
    educations: [
        {
            title: "Univeristy of Victoria",
            logo: "https://media.glassdoor.com/sqll/146432/university-of-victoria-squarelogo.png",
            date: "2017 - 2020",
            degree: "MASc in Electrical and Computer Engineering",
            description: "GPA: 8.4/9 – Graduate Award Recipient – Fulbright Scholarship Recipient."
        },
        {
            title: "United States Naval Academy",
            logo: "http://hayouni.com/images/usna.jpg",
            date: "2007 - 2011",
            degree: "BSc in Electrical Engineering",
            description: "GPA: 3.55/4 - Graduated with merit - Tunisian Military Scholarship Recipient."
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
            tag: 'Nodejs',
            images: [
                'https://lh3.googleusercontent.com/KxcKPx97S3oECxH3ieHB6YpNlgNhcokHe2wNKJAZmD9ieF4dTGssgjYq2owR2pT7bgM8MmIEQrN9ghDb3QAMPDNkKoTPe6Omu1FxpaYmUByY_cn8gG0cN9wIrSLJ84tRlNFeUXLzUXCNQBTm6YwrGXFAoOMUYDs-u7E17xM_8ELoLtC7ajMVranIZUvSkIHeAYbKu1iJPlE_ODwa2HD1p6i5Y4ZcNu9o-m6sNrP6kzSsKWvzXBs9-wcb4O_BlaYurnu5xhWsiBC2Yxc1Fvag5miglyzXU5Tupo2SiZ5csOUt4TVL5AsrV7iz65pLbjec6IydCiO_t2hxrKDvE4ktBdxzxnLpBI7s2zinEkGX9r95X0Wo6cKwQmsPWe2-BAjaNiHH4CjpXZzb028o7J_aoUUsnU9gKP-TAYOi44pYENVnrJ7VRtoxF9eQZ2I7r_a1illKhEOtGGwThHrYURqaIwTQsM9g4_CjczR4SiX-p3dS3hglvzJwHSavb5_-ZwCbg-iEMtOm8fLTCKzOCNNOybjGjm9GfsV2CNnMRXqVVmYvtS6c0CQF6KbIdNNlAWHmmkIvCB430tc25crIcP0KrL0rYArCxA-BVdj_aEUhBtrzFJatemtQqQkNnlSALfwTYG3oXyBTTjHFZLxjKqpjlVIzUU54xyf6E5IOAOJOu-U9GXf2zVdCitRs6EeKJusLdFbzsmmRPwRLrXi4RmoaC2s=w1915-h945-no?authuser=0',
                'https://lh3.googleusercontent.com/aYWdNupJL0bSSxcZCiP-Btj3ZPpr7qZ78Q0eFO8t4FItkGwAujgMO5nNkpR7sKyKzkZySPBTRZCop8QAYxkTLuzp6S_tfMkYSD9XsZFnXAtSl43-_yBqchQc3rtNjHR53bcLH2vcp1BBzB16JC6UxSwB2ipI0wVW5HaAki-6Mi7pk2_63hPPuJ6AVA6hQDmIdcsxx-wD2rh-H_MbWaltu4r_xTa3B5zSEZI6cCheMu2dqW6fVoF1Xz56GF1Csbkwdz6q-tLSu2f0S4zGPoOJipjGaP9hqd-RAqKZe2vxU1AT2m1QhTReXPMOEYgm3Io9gH2HPq1KZlJ-HgDTxkO8uGRhQu6_5elF4o8iu8kZAMaA9U9VZZhn3Ej3sYRBwqtCQBcbamlo0qdMClzT8pstVB_M0OYvf9Kx-RzRILrC9vU3Q6p8VVPTwAPKgHiSBtUfvI2zlnl0fmt2_16CzIkRqB3xEmYQVbDdwAqXpm32jiN_11J6Gc3TIjHqpqSg0Ph3yB-4Y5ISGmbgg2joo360lfkZwCaIuedYRveuJlGo_SNpyjPNYYjYgfR1-o4jqjjygMeiUqgwcVjM2Zqjn2kL4aeCah7Y5C2go_6B63hxmxvkqXjAui1ltrHaqgGVj0scc3rqzH7A3UYV622NP42NhJLOuSJIBqFIfIFfha9vMuZSnVUYYdl_m1plH4od7xumyonZNrgqR9JdC1CW0rY_s6k=w1859-h947-no?authuser=0',
                'https://lh3.googleusercontent.com/SeTtPTfrTAqyNPyVPBcp7Mlim_8M7kQz4JaLXrR5b1XyyOaeN91KC8Xo7nhxjRFJYVTx4jf18g5ArTbPd2kU9povQsXWkfS2ZwhBmXEmF7die3SG6bE_8MaLHu0DTEsXrO9yJwmYXU9JbYdwfykp2ugtFFB7x7pR2YJKVxOeRmPaVWjtVexZrEcFwqmhLtOxq-hGzcOp7BE5-Pyg8gT9vzEPQaVgMuP58uWs-VltHpRToV3LyZhZaFmy6X3cHpIDFn6Y0lW63RJx3ZnnoxmhCZj1xissiHikBmZzvn6utVPzMlZSAXb7L2v_psaJYpq0dnFdArnlPnWd8bWPeNyjXAV1TveX24yuWchT4OHQYnZRRje3SZSgfQmMZMgM0SZUJysabSwaNmyrsS9rd0jSDJK1VESHmPV4BS397RwbutNLxTpkDG8aQwvRjWUntLB9ZWskssVHpkV74yhGIocHuFHNvflesWlWCEpQGDQ4SGN9_8erBM7aTClpMej6nYoo2koToBKnuv7lNmtTuBpQJpvCH4mUSXcjKnX8jiYcT6qGc64cU-2K0xU1yz4A8wI2nf5q86D6eAX-EbvDJOQnDVYCPGTlTbwflIeUPmUT4KA5iyvmeuou5JDZvcD6_9mX74D03966C-NmZt2h5SwSirMH5BOxHqK_8AtQ7IhBIdu_EeoH1Ii6A2owqeh8gH7o5Us_BmZfLC3xnzIcA8p2eUA=w1918-h943-no?authuser=0',
                'https://lh3.googleusercontent.com/MaZhfV-lKiv2i6YZAeKlL0oswfw9D9nkr0JuRl5sFD863vDFqKLfx0qYsNpfGc96yzQRAttkcZDzR_k6pQ_AbjbPePvFNPhPc5_rvMQYcn2iOduT9bHuGYm3-MD7KXPjCxGhYtvyoATNUwsSpjIoZkMq7limlWLI40uOrdrGjPKOeL55UlvaV2g86rEHAo3Krd-1hzZgCJyeGHtp3C0cvR3Nbxw0tPSOT0jTW6P9EoMDPD0qsp67Kki_FxMFpubOP29MCoT-Q7NiI3hWYj3rrO4P_adUteEe4LOCpVV70Wqu542dvho3162Llb_wt0pcL_10ZIVlY7pQZRF3-EGQ1rR0Pg-nTbX9hVxyFtTzxniNVa5D2lU-VjLX1P-EusMRmou-Ya3kolPobrlkBvvtgoj1o9iFBV3SIlA0ek1ZJJYqsMIwd2RQ315pWdxR6bf_7kDUO9artf6k06Dwu5l1dErIUIXOYKjenjUkmoptsFXBdVH0nCNk9qyoeT0nB8dDZpt5FyOZ4BOwlFzOtYWs97z1QLhfLJIW9D2-jz1cNcSIjpwECE7ejRPaNfNg953-zbK9flDRkbOELOkEhZ-9OeuicvMvPt0s8xMkt6F_pftynqVXSIcVUSrfzmQS4Ot7bOu6D_rFiZwPH1iLYKutpus2oZTEvkaCHteFOLcyhE4kaek4kmrSwPwNlgCiC5QlIrCxZ7boBNM0DNd3LIweuIY=w1913-h943-no?authuser=0',
                'https://lh3.googleusercontent.com/E1OKdfFBlH0otCMobSHpuHPPHj6GHxUP4O2NCE4GVeT3_VFunET3hBFliN6VGYmTvqeh3Q2tIxrRnmAxBDILh4yTJzNtIo9TG6Z_Y5vJGAqEworD-LXFV4XtukXY-kFPV6aBXtgqJeixfDEhTYPurIXmFV8jucYt9qD31qEljTVA9nE7-Vz4QfLpcyanc62cEbpMx20_hd7EmtfTgzuiznYQQUpzX8zLlysOHcODrFG1_fmmQfxooexJu8W7leo1eSEcsbBAYrygyJPfv-bw9f9ZeguAVrjYb0YqsFlTBT0RxP-3VnWywNrPwbLK7YeqgZ_n0gma5_m6-o312vFqo71_hSCxJacTP5A9vvapyxlXwnNMahPRsD1wAfo9aKCh7jc_awaG3IsvhzLWoZcG4AtnJTFaOaXc5RHJlX0xi5xlgP8PMkh3ocH-0v0PZPqMgv1Pw-uiRIOBFcs5rBMKxkAfCa5TCTnqAomFv2mIPPkaesP4OYnC3sDLWH5dyaCmkW-dLjEUbroSzPfPAPjqtVl3XO7_VMrXFWDfbvVDHHSPaQA72NXzAxZmNVUG_7S4oJ956WPU2OC4QsWcEK7EBNVnah3UNTiz1KBeJ9Ic4xn-99KPj73Md0zdA_xah8lXBqzkGeUj_P9Eu0ZNu6cbMq7tf20H_TOL9bU_lfpsyaqw-TO_FkPJ7Dgks0d4INk9TXxsRQKu-2JzEgwollC_pBg=w1913-h940-no?authuser=0',
                'https://lh3.googleusercontent.com/D8UPp6LaOg3SK_h3Trd4FCGIgQm_Owajq4PSjURRHAOQrbQ-_2dG46YuTN2dlPmdhxQR7yHfFEG-EcFos3KiUKFtF2w6EOo8Srej4OVuEm8dOzF9HoKIYgaKbmKEvas2rd7YfwtD_EN4JMMbQrghCcD6lVxz_P13P-OG1jps3ZV8PI27zs0GyfVJ0iNSpDAI6Z7SJOFQlpEQHYC4QODcFe-RbvTqN0ArdCwQnbrFdamAR8kfgJ-wI80m56E3zNfNXCMFZO2kdryrpSXBVV4qYjhKYW-IcV5U9sEHRlgmuEZ6VYfWa-mGhF1xJVvpLB1n6RHDUOTm2uxYu2x6szXuRwAMk16H5eDU0RDPnymf_o8I2oEvqO476H6kDlykLuqdnEVIxsOwxTFrQ1Y535iZSY-46iD822gQ29ysUlrBcWl5LvnHo8tnh6_DRNLEIKl41_nJ1k_rw0BpI5k611rThhIgHOtWr7_OwfuebYYIcY1dmDZDmHH-ekLp7I4nJsE0Y45hsuXU6F8D14hHdXRGDj9X4W0aLvOk1v32IXJ0vlReLeNwhwP7IAGe5lQNTARldSW_3VZygK9XGSHH_cvzcxAjiRdYAPYj9hTU7IE2Q4MA9AUfxKGTLxKtt2SkUHDwcEdL_0oT2UauyyITPFwIeJov55jIUub2rfa8CEZAS8xu7syl8YOPl6xRawcRPGLgIY6jiuvsFyJZR04t9c-Plco=w1896-h943-no?authuser=0'
            ],
            title: 'YelpCamp',
            caption: 'A full-Stack Node.js Application.',
            description: 'This is a full website that uses authentication, authorization, API calls, security patches, MongoDB Atlas storage, and deployed on herokuapp.com.',
            links: [
                { link: 'https://www.google.com', icon: <YouTube /> },
                { link: 'https://github.com/zoug86/YelpCamp', icon: <GitHubIcon /> },
                { link: 'https://zoug-yelp-camp.herokuapp.com/', icon: <Language /> }
            ],
        },
        {
            tag: 'React',
            images: ['https://lh3.googleusercontent.com/gMA48N_VZDH75zaInxsORnxo5y6RM6YG51rLtDXaoOLy1WULVxQTBcvWA68HjIJnGwxBgcbmON62uj-y2hYEKSu_8-RS-B1ggIctjPA6hqG3AvEQcvV9MLN9dSdy9sUy7AIM5qB87qAlZTvBpOSgm_voirO5xmHqCwPOysNBYPMViMP3yLzlZ4wNO3lQbsgOqqAVp6ObMXBCUgzHg-r0tzt1-yPTJa0QMHrHnLbyPgHHBeiHM2n-fdk1fdlWrcA1Um2x-BLZMd5uR0NveMLsVIExyQhmvJkas8sraoGQYjMq63SRqx3ST5ZHw_3AHn3MkE3g-bMvathpkudpE5Z_kyd2iVwnj6NSf7fl692awvIUaThvFf7j8_H2Ox9oFqmqrVUKHxZyMbWLdvDljmABBYyFyyHp-aHJTPaIUraYXTFRiB3s7ZN6R4sj7kigR6sso8KE5v0VGh-lkbqtLfJLAJv8gSi7V7mXjiPAD9mwgy8dXjjlBMmhVknqCM0PDVAGe6e9Kqa9U2erXx4HzTW-EfP9pgUuPvllyjeJNNLB8NAM2myrUglHYcTGdO6uXROB_SHf2ksUQZ3MEC0a_IQCRnpWUxk_dMx9AgZScGushu6phJBfO2Phkj6xcZo9ppBUsWlMw8eX5nIr5AFFQUIxghN5QADzp1wpwX6KY_rMmCiBhrywJYD_sP3KMuV1qOktdEysL7A67-bozPRs8TgXhkw=w1684-h947-no?authuser=0',
                'https://wallpaperaccess.com/full/1758750.jpg'
            ],
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
            images: ['https://wallpaperaccess.com/full/1758755.jpg',
                'https://wallpaperaccess.com/full/1758750.jpg'
            ],
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
            images: ['https://wallpaperaccess.com/full/1758755.jpg',
                'https://wallpaperaccess.com/full/1758750.jpg'
            ],
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
            images: ['https://wallpaperaccess.com/full/1758755.jpg',
                'https://wallpaperaccess.com/full/1758750.jpg'
            ],
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
            images: ['https://wallpaperaccess.com/full/1758755.jpg',
                'https://wallpaperaccess.com/full/1758750.jpg'
            ],
            title: 'Project 6',
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
            images: ['https://wallpaperaccess.com/full/1758755.jpg',
                'https://wallpaperaccess.com/full/1758750.jpg'
            ],
            title: 'Project 6',
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
            images: ['https://wallpaperaccess.com/full/1758755.jpg',
                'https://wallpaperaccess.com/full/1758750.jpg'
            ],
            title: 'Project 6',
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
            images: ['https://wallpaperaccess.com/full/1758755.jpg',
                'https://wallpaperaccess.com/full/1758750.jpg'
            ],
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