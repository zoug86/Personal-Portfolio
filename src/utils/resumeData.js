import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { AssignmentOutlined, YouTube, Language, ForumOutlined, GroupAddOutlined, HowToRegOutlined } from '@material-ui/icons';

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
    about: "I'm a computer and software engineer who constantly seeks out innovative solutions to everyday problems. Before my current position, I was a junior software engineer with the Tunisian Navy. While working there, I committed to ship system development, by developing several software systems to help improve ships operability. My previous experience along with my graduate research have honed my analytical thinking and collaboration skills.\n\nTwo years ago, I have fallen in love with web development and I am now a self-taught full stack developer who enjoys making full websites using a variety of technical tools. I love spending time debugging code, reading about new technologies and developing new gigs. I am currently developing a Node JS API that provides JSON COVID data related to Canada. This API is free and public and is rendered with POSTMAN.",
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
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Armoiries_Forces_arm%C3%A9es_tunisiennes.svg/1200px-Armoiries_Forces_arm%C3%A9es_tunisiennes.svg.png",
            company: "Tunisian Naval Electronics Division",
            date: "2015 - 2017",
            description: "•	Developed a Tracking Software using TLD algorithm to enhance weapon systems by adding the capacity of auto- aiming (.Net/C#, DSP). \n•	Designed a smart ship engine surveillance system where Temperature and pressure are collected from the engine sensors using an Arduino board and communicated via TCP / IP connection to a Web App that ensures treating and displaying the data. (SPA, C++, Node - Red, JavaScript, SQL).",
        },
        {
            title: "Communications Officer",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Armoiries_Forces_arm%C3%A9es_tunisiennes.svg/1200px-Armoiries_Forces_arm%C3%A9es_tunisiennes.svg.png",
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
            logo: "https://upload.wikimedia.org/wikipedia/commons/d/dd/USNA_Gold_Seal.png",
            date: "2007 - 2011",
            degree: "BSc in Electrical Engineering",
            description: "GPA: 3.55/4 - Graduated with merit - Tunisian Military Scholarship Recipient."
        }
    ],

    services: [
        {
            title: 'Effective Communication',
            description: 'Clear, confident and friendly when communicating with others',
            icon: <ForumOutlined />
        },
        {
            title: 'Problem Solving',
            description: 'Handle difficult or unexpected situations in the workplace as well as complex business challenges',
            icon: <AssignmentOutlined />
        },
        {
            title: 'Teamwork',
            description: 'Working well with clients, colleagues and managers',
            icon: <GroupAddOutlined />
        },
        {
            title: 'Adaptability',
            description: 'Fast coping with changing environments and work processes',
            icon: <HowToRegOutlined />
        }
    ],

    skills: [
        {
            title: 'FRONT_END',
            description: [
                "HTML & CSS",
                "JavaScript",
                "React & Next JS",
                "Tailwind",
                "Bootstrap",
                "Material UI"
            ]

        },
        {
            title: 'BACK_END',
            description: [
                "Node JS",
                "Express JS",
            ]

        },
        {
            title: 'DATABASES',
            description: [
                "MySQL",
                "MongoDB",
                "Strapi"
            ]

        },
        {
            title: 'OTHER',
            description: [
                "Git & Github",
                "Heroku",
                "Netlify",
                "Vercel",
                "Digital Ocean",
                "Docker",
                "Postman"
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
            tag: 'Frontend',
            images: [
                'https://lh3.googleusercontent.com/lx3zdWIzidZbi6IrXw5iRnUSf9rmqkEuRya8F1_5PgddFGHXss02q1JgoOfoHC64uBiLHsrbNDqdsCqTHQjf5B7eJ6jBq49w-H0d1aU-Uddhg_VS58gwWuA0Rol7BxcKuhKhGcP5zRzYJNR0AyTGDMC-7AadagJbdKvZd4OoGRFEOB2FhfvGeg3Zz3Kf5kqh8cX1avikkX2O2R2kiI0d4KL-K0kHGoytv90lGoEYCAyV7KwptQpKYMjJdAojPhErMNdIyUSgpeC4WnoCdIPBvzmVIVTlnDDrMAGZ3i1qUiysRdL8pMTtctnZnY_tbtkMQ2Aneq9d7_bWvzZZgXTqlnCSWjerMWMn2nXQAeDFacqUx0ecrn2RM0jBPN7X_PNJH0ixpEfNG09jGKkyr2fvQabtjTm1xxMlUIoXmizV_a9DLfEtdgY3x0nRVDoEGBZP5SFs3sXM19O_oTaCXfHf-xRMUK6gTMzc0qcxja_fdmXVqj9tuOhYPdvr-HxB7tu21DC5XqrstWJ8e1XOfeGTzKNvmdYs5yDlpx9Zy9BohA_aUr9Won4qzEMIHtyfkAKo6ZvE87cPKWOIp1jsV5pDCTYHTSNSRlPZdEt8WvGrNzEFu4rjQqWRBPjMu5E076W_FdORFy81RRO7GsYP1QEv4rHR8qDR5AKV7TF5TQA5fxidg2B_QXjK-Wndc_alw-0UgF0qVb6e_8tkDUnlw3lAGQY=w1894-h947-no?authuser=0',
                'https://lh3.googleusercontent.com/nBPbjE8xIlhuPgsw33pjWw0r6Qnq2hMIjbR2m1PSU-SLVdG0uD74kSYpFoqZ7KUTapOLiX4TuGkR0fB2sS34zZT4mzTnzZKl0AiAKu7RlGwSsMO9C3iNRxMpvkUfcOz9fXsvsw_suzn_EC90aweWxahcRVO5jVsMwezyZpm9GQ5R0BKDJbNLNC_h8KOYvGJuGjG4P3Vpip40IYiVHnuqEk6YWfh5UAVJP9QnGgEyw3Pz4O7fSWXeHPuC_bwEY-HIIhYbyvIUWpPeVqZ4YaQCavArGhXdC-36XjBR8hhtKQ1IQS6uI0pvGnsBAHRxgMysiwp0EGbp69u8mYJM7iM5pKRm_C0WnSsW5YtHINry3gmRoIxor8W0XT2vGPVsENuOEqgCAVSwE58NFw63-ueuQCwQQJ9oEqvLq2xmZYv-07UKF9OLzMkvoJOlPJTzy-1ak12EIe1kQsHb98zlmOaqSPMV82tZSfio23luTtXjEssBh8ybQYLHIyTmW104dH-tBup3SP5jnC8Mfqxmk0vMA7STT1er1eKqdt1rJiRWh6_tqOaG3LMAwQu-8xN9oIXxC5tSi1SXMi-yiTioB-cQb591kiuSw5ZZEvoXqjcUCgUYThYdZSU-jnuDJvXI6OlhBpOGTYnPR9wYcSEEcg0LuPpCuVLH4CETNko2d4WSteps_4PV-jSWNIuOKloEvWFYdKg5N0Hu0978FjyXOTtChaE=w1896-h935-no?authuser=0',
                'https://lh3.googleusercontent.com/uQPmt6IsT3vTRZGAPjx8NkJ6kyVIC-yCQqHCinfFeJ0BqjxhhHamjnaqyDbZdkOImf-e8gJd5GO5TY2FtGqZdoJEHJ4I5tz-yhnJli9MJ64sCBDi-EVV-qoGJSMv307bmpUsbYVz8_qMugc6qRKe2HRIMbOEaOCs28wwjAUP-lFnLqWpWoTfZnUXqNyHOFjB58GPfBDWU_hSorR-EAZ1FNi3y1SSAQ3nzU5nKXW4TrR4o9aqDehQj0eFWMQFf8daJf0cf2wwy93D_jPV3Th2gw-xn07jUe-GK3OOh9GDAprhEIMxffKw-yDfniWGkkkMTsXwbfYmTOr3yR4MZTYbXQjEPrvsa4b4eg_o5mseG5g6n3E8YK1JIbIFE_NGUCuUBIgJ-CufNqEiBsAb-_jpmmAE2rT-aZefYR9w_vlLrHK0z9vtC3-Qe7gfEYMLa0qUo0Af_kHUe1YcjRGlW9Z_x72gGIp0kwkWdVwpCteSY5v5FoMb2BwpXV60cP7lKYuClVzpoIt_nFcsYXXPDRu21dxLqq-ud1VTwAv8ZZ89W8g38sceisYdAzj1dlW8Q-9QhSQlEQSEyV0YwEueixCpDyaJR8tf_lB44n_6_qgqhh1vQg9GpydhNt1RlYeN4jeyfH_GsvqK1_0aSW9Shm7dc0-nsxBbssky6RXMceKkevgxLBUJDJ__MmZUhoaY8cXJnc4h-dmtnbpXrGEbSZ5tgTc=w1888-h947-no?authuser=0'
            ],
            title: 'Restaurant App',
            caption: 'A front-end website.',
            description: 'A restaurant responsive website built with HTML, CSS, and Javascript.',
            links: [
                { link: 'https://www.google.com', icon: <YouTube /> },
                { link: 'https://github.com/zoug86/restaurant-website', icon: <GitHubIcon /> },
                { link: 'https://zoug86.github.io/restaurant-website/', icon: <Language /> }
            ],
        },
        {
            tag: 'Frontend',
            images: [
                'https://lh3.googleusercontent.com/499zmxkRcrmkld2SZdu1kIvHM-Aws9JQW-WUqVbYgBVgg8ABODcMqZXBsAt3yijn1F-Zn9y13ZtDD-OFE3dhKsF98d4tqR9OYW0MX53AwuDAoVBwqlgksYJWifnJh0RASQX4EkxK4PdFib1LjIFbsJxG1lwEOPpydv8SG1zf6ahM3TcUbCtMaf6-niKlxqB2zSHbKd5_QI3Fd-QxGzoaSuJHr_bv6r5zTOLGbVtm24EpWYoY52ZLX8YjjeeCQGKrx7HIIH4niWebtAEHQiaqyT4UcL3ekP2ToADhSWpYVTUUvYcHQY_qWlsQBtUVuZe1FDkwmC9s99jsDZ7DHNqvTqLbxuRe7Q_uCaFNj4nHoTG_fPpiz-cMKZenC6eF5wSeMfG5ITIdZDANSZBcCtrm8KUFpC4KS35HjzemmFHs7r_wuqEJtpX449jPtFiz5SZlLigT7MZ_MDt7icHfY2vWQakof20VgzsPRglOAXYdVvRyobFqzPheSpAX90ZNV-1JpgvpvkrbvhWvz2GxUcq9qBMyzRnsZYzmA9gdanxXMjFT3dBkcwMF9fidRntK52-IwAipIAEbiMStOIDLEglj1hNq74EiHfMduBQzB85WdWeFIYL-gYsEPqT7znp49W_lmTDPCmI7wFegVb-HRxm-wtI31UzoT5r0RRHgNsaDistFzcmjxfN6FnRjJSHKyS_lk35nqJm9mGTmntWoZnRvpxk=w1896-h946-no?authuser=0',
                'https://lh3.googleusercontent.com/1BLAkBN310c85ql_QK7DawdakaVr_bzEmTiCkce52ufYPb57IXxqJO3iwICulx6GBj_B7nkAhZFx435muoGGZPonD5jobW6JZs5g3nh7liKH35GNklHc5upenFVWTfnpCsQO8JAh2sKZOXROvr33ZvbnomY5_YF1Jo49EwiOVkyf2voO9tzaJHb_R1-6fOcgG7uJfq15OqwRKQDYF2yGNaM7qSZM7R8eeN8OnwrPtHwoZ-L5SsLj8IiGcfQxjyHtc3wOusUX5wTeW7mKStpHgnolnIReVmIJuMMpAIULJXy4CLOFSieBDk7EqvGfL85Xz4CffHic2Ozu0DUn2T4_Z4w37gCAz3-UKKo6wLx103XKNURp7LVmemxEsFcSaJeOhPGRYaCmNTjurJgn8QhJJ-fygLEfZ6Tw2V4bomoMvELh08sxzFlAgJ980qLuEBzjzEnW1lvD5yOAUGIbLfRvXfg5Jf0BRMBtJ13-wdJBoMR8Y-G9-RIo6iZXsQdqSnxMm4HHFY_TEoIMHALNogzYm61WwBtrZFt0LHZzQZG2--38XYa6_uij52Dr8qWJNjXydVphNQWPI35WxKm9ZXzuy4es9b98z3gd2T1syWNOOC4wyw7bflSAMkyRGLIOpy4Y-oGZ-ab1b14XUcGsKsTXcLAbuk6fAIBTFqDJrUeobEhJprDgbxMFfSBBBGvPvcHcX-qfVIK1s03uN_Sfw6VbV6A=w1896-h943-no?authuser=0',
                'https://lh3.googleusercontent.com/_rRpRQWkF67kZi9YMgcAh-MtZdJ9m05wn8tMMbGld4qICyeQFaEri18N9sO4kkfO7-hrjXxRrPpviXlBmwxi5Es4bdj-75_gVrb-DbLaroAmR4yRyEhb_0tEIARfom9_YVht-equO-4jF09p1QdZRHm5Cm1UnJ7T8nx_QENRgddQ5YrC1rtaiq5os4ezxEcj_BdI4ekHL2cEFLoyiaczBLfApqIxmMMaXdsvh-kRk1_bv4GZdzk5HQiKrgS0cwBbOeWy5maEXNIO8ShG33J3tvGSteesOTQxPj7cWeeTzspciTvdM0u_ibwA1Suc3LnIy2ou7Zph6swCNnvCmdKvsdXa-PCdpIDE4B95cMcUsgFlFfhSIF8qa6Bhq41fPgef8HFqOyAZ8x2QgxX20eCk2i2olbQzFYEsWQA-BXHIty4JM54d9zdiJPVPYsmCOnQFhHq6B0ERm9hM8Qr-D-u4l3zQKCUPttPuBDO25siuoX4cROwhOe2D_bkj5sYqCXoMzkgDseN-Rd8RIpV-yoIBgqWfq2SkZoctGzUgHY6NQ6PCF_l2PEuikgWH2tsdqgpzuOMmRhZ7r4KYkqrwwazvJEuOizwa04sw_M87E0_ObwFglcoSQkXb963AST3Msa3GFvKD-pJgSfkUCeeZ4G0Zu5tZVChG2NcTrGvOgo5L8aAxhTngS5rp2dZ4PctJ9o8KABPUjQSMY1oHT3PktEKRDiY=w1894-h943-no?authuser=0',
                'https://lh3.googleusercontent.com/Vr5_o7NEx7AHbFyaEd13uIC0cZ6RvNtIVzYJwVqfmHBNhWp27LPrTsSBoU3zNPBaTo44MBMsnY8NCUnEEnLe-fXk5gAJLSZn3kRB-lxuChnEP0FAHCIWdcwl36dd99QALN2AEZUuRMkSeXxnxq2BgKk9gnzij9a4fgBjybWVOv5GMU2te4NiPIPusvqI_Gi2Ta1QhVJMGdgfDbCxpj8NrIGbaMT4wWTum6lxqIE_o_oYttFbNUeyCrc3HtETkOWnSCzEgp1ECzYztcHViTCfKX2QJOQko4k2_SgP5A40DtPCQVQEK3LomCfnV65qyvN5qQHIjC2KV4FyBKGveZSKX634zclbsG4i80ZUGESjmaG7r05wBpWApxxnLfN_gl9vW2t5fhwJYxHhvAAAkUG6gBdr1C4q0vut-GDSCfPKfaOix8Fp1f1D41mI5coqppRlhe8s4d52EY6Pf1Ri8U1y0o-uB3RriTAmxosPIZ9dNFCApP4ob216FtADG579LzClP-uO1eByhYDA80NamhokoC6Bg80UGLT2-81FVPBKQrCLN5lc1S-t_t92FHTd-knmZY2BiY2SUKlN8EMlX5PNUihyCdYqnEdz4gIfZ_t1qdg_3IEaIPzMn0p1QjtoipLw7ZurcwigV_OS4xafEmo0SffriMyAvz6R1WL_fE7lEpEQEcqXU-Tg2iPxYzPUGXkASqAlllF8ZF5FAsgM7zyxZaY=w1898-h943-no?authuser=0',
                'https://lh3.googleusercontent.com/W0yds6O4DLZP8BWhQnWpWaRlk9bUK8TcIvuVt4I9nQMVgG9Gt2WkfjFphrqmUZIuMJpx9JvSBMyWkYhlse1slEn-KDiyQiVq7O_v5R2mOoHOCXMd20FHfVuXbyyB9waORSIFtHxVdIFpIMLqi-u7jBagh9mjjfrT_UBCcTJEasIGBQ3hFCpl84ZYVSH6HhK5USiMvnSo3QB6UbEIHI9no_aBi5WEtq_DSsbYJXBCs_n9sPvncIFgw2kgutZR472oEVSF4RtInTxaafBDV16toYfIxOVUYTayQjAPl7sZJbhRMhnYASagRojVu54SaXhf32T7Wr59ptYB3mSfPwhvTQxgUJ9QeNIFjwucpvdtILZWnrnx-G91RL8vSAcWD08boETTQPDIWemIT4pICiYG5h4QJS8mgYIbnYzGc2JsWyquOPi0KrQmrOGet4nIQT-XqrUZNjbx2BQ4FAkAKDR0unoknQWOJPiTD1kecadmEhfFH_XRM3_Bjzd49N0R4qdx2bMh6qdkEdxpm6P2i84LeBDzxf5eONWzL70J_G_27LRSOLqGjxwnaH3h30puEINHQ3wsT21TgV1WRbu4j7guhN3426p9Mjw2uEOwX5EPnTeHVRNVbXdJXWZQQq0LYmX45FIE2LxHssyvXeD9uYfdR-5QrzYjzrusVX3jrfbrPlDIFicJwiJey_S-BQP4IyglZXECAExUw6WBxnOuamvoy5k=w1901-h944-no?authuser=0'
            ],
            title: 'Creative Design App',
            caption: 'A front-end website template.',
            description: 'A creative and responsive website design done in HTML, CSS, and JavaScript.',
            links: [
                { link: 'https://www.google.com', icon: <YouTube /> },
                { link: 'https://github.com/zoug86/WebsiteCreativeDesign', icon: <GitHubIcon /> },
                { link: 'https://zoug86.github.io/WebsiteCreativeDesign/', icon: <Language /> }
            ],
        },
        {
            tag: 'API',
            images: [
                'https://lh3.googleusercontent.com/n-Eds7iI10mCHYVmjoqZtC-WeEm7EHJicJTULq8dEIoWTlfjKkJ_sidu2O9qUO_6hMop-N13bFL-QV8FK6oIJ-fyOoQPW7stOxkKSYazRktWiYwDfX36VJywm1mwWSWzxfPzG65PQEHWerzPX_QkINi1X41Nq5LT8xkPNScdYAp8SStmRKyrHOrdOCAejrnyYeeBy5lPwC8ajUjWKM_E3kJGgNNHsHOWErYs73jBD4MsfBWJMZcjQMrQx7Lrkks1DLSYD13YZdx6IPg6ZVpWQiyvp27pr6ooV1xBtVjjnt-hPVv7T79Op203tQ8G4D1wghsKB7PYV1vh-hiZLg7bAGKdjoIgD_CT_xiOukOMPwMUgew2ZtyOMhNOYBS2Ebd_RNsDK0g28i0wCflmrppfsg4FGtQaXpuQn8Zv6F3gpHfPhA5ybJK6Hx_QuIMUeOOy1BdPEAYA_NcsUhTlH3QsxuA8NOxPGby6SgrS3sjZ-8heo1UFzCD8rMCOPMlwkK-irygtIVARPiD12uojARPli_E4gHJw2Tz9gW0gkgkMktNhlJPtYmY--w2EZg7hoUQvyIQBzY9P_yTVDt9gZ9bWgvyboDDBFgfcjrV1fRETx-RIGdDamIE5OvL9XnsXAhIZzxODDFptMH0rMZMsKiB2LdQaUkg7P00QISMSEqnj4gfgG7baOF1cWYQiwvhz0Z9LoNHwMqVhayjvtE3dTfIrsYU=w1898-h945-no?authuser=0',
                'https://lh3.googleusercontent.com/KJiau3_lkY3ZexEW57QUVLx3TnU0VymH9UOodYSIieyM5BjvoLZmiiBkBBlR2H4R-n-MzJSCREmNJX0GFHe_NuO4kQQav3MjWe8CMX1GrN-KI5bqDVemsnnffbrLi23lls0CIBXwKuF092Uowy3K1vjJhTYwXHl-S1L6n-AEdTJshzHrP8Y1CGMfKrOfxTNoI8p-LT5_QgLeFAzWBb5IZt7VjiL2IxN0d3sgBI0Z7bK0Jlm_g70GcsYTpxPwPFPOlC4g0u_7vXmgz9PQtG1G71ab9Bv8yBmklGETRSvPkYs8Iz48fKxUmkYUOW4xV9IR1_goLTe9Y_cd7b7hs6l9mjt7ovNbyt3WcS61KkQJMUxmtD1V4ZpxBJQOarZNJmoM_vT2spuMPifci2t-EAEnDGGQLawX_ibMXcjPk-VGAVcPtk7oHMVVWsg0uDxo4UVZQuMy1uRQvG6R32aGqP7y8hlaoyZhR4vnO_62_PWyTae7DMSsZ8GileTCtZAfgfdKc0bvhxEssvqazDwynoo7pCkum8z0sYqaoeaDFeBfIXKzOryy7tL4KIKU6vdnqvSdq3VswSxi9jSHj0tK5alPype4pEtbbsgloeKAj4HRWD-olD9KMHMznGa6CYBYpoj-OKqfusyH8D4LkQcAUETuCNWshIo79lvCV7UrNDjHgGOd9XejMjPI3-lUjdzZLySk2LyWsuUMI8Fro_ovVu2NXlo=w1899-h946-no?authuser=0',
                'https://lh3.googleusercontent.com/IXJLmE--r3ThJQns7uXcI1Zbw_ZOzUL97KWKirhmr2H47qs_cj5lyjAMC_3XCLWN0kcesjDsRJ8ndGd9QVIYymgTyI6kbt2rHzIKXAV-roGoLp4jm_7FuQUUnJsNk__h9IvNb_MTLoDfo1tlfWE5IrZRVV4d80ytI_jX8pr4Pk8Dz28fKtC1fCJaURJ0VesKoXydbKpkj8COMmTzlxhD8xwJrsQyqgPXzL0axE02vgMLkAhthH5pOLBr4e1xMcAabVluMpveCsXrbZRF9HqVRasz9_YBTw1CaaCBZQOp_UGdjlCphWMbO2V-5TTvKKlb3Iuz5NyJv9kbkeSrVKyrquFLdkKBxDXRstFjoZWx90vLh52BeuKIoe97HRg9_gh0P49w2aG5bGwA5OWbGi7hGin0B9PFkmKKqj-SMF2ZhxQ37IunTAZNRfnlaM5mLMfHoZ9BltUPJffsfaFhGfyJljR__Knji2nebzUc-b8cQBz6rexTjDcec2jScvd7kQnZHAe4qsJwviuifTslQEXZNN9GDa6SuGTEKKB9ExSwuCmFvZh6xdGpQaOfu1XMPRiRs3LNTOOMNKeM1mluBpkJ0x3qpJJvl0MngXeXDI9_EZthm8SwFdNhATqBa0Dn5BNnDhwo9ai7OKcTDiszjwPRnN1d19kajATiu6PYxATOkVEIgiB5MYkVve4izWkhLD9oQnmcAWU2r_8lYznu0mchvsU=w1895-h937-no?authuser=0',
            ],
            title: 'Campgrounds API',
            caption: 'A public JSON API .',
            description: 'A JSON API cretaed with Node.js and JSON-server and provides a comprehensive list of all North American camp sites.',
            links: [
                { link: 'https://www.google.com', icon: <YouTube /> },
                { link: 'https://github.com/zoug86/campgrounds_api', icon: <GitHubIcon /> },
                { link: 'https://api-campgrounds.herokuapp.com/', icon: <Language /> }
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

    ]
}

export default resumeData;