import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import { AssignmentOutlined, /*YouTube*/ Language, ForumOutlined, GroupAddOutlined, HowToRegOutlined } from '@material-ui/icons';

const resumeData = {
    name: "Houssem Marzougui",
    title: " React Developer",
    email_1: "marzouguih86@gmail.com",
    email_2: "houssem.marzougui@japrtech.com",
    address: "3837 Midgard Place, Victoria, BC",
    phone: "+1 778-318-7601",
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
        Github_1: {
            link: "https://github.com/zoug86",
            text: "github",
            icon: <GitHubIcon />
        },
        Github_2: {
            link: "https://github.com/usna11",
            text: "github",
            icon: <GitHubIcon />
        },
        Blog: {
            link: "https://code-fever-blog-zoug86.vercel.app/",
            text: "blog",
            icon: <LocalLibraryIcon />
        },
    },
    about: "Greetings 😃, and thank you for your interest in getting to know more about me! I am a dedicated Frontend Developer with a passion for discovering creative solutions to everyday challenges. In my present role, I am actively engaged in crafting and deploying inventive solutions for a healthcare web application, prioritizing both performance and quality. My past experiences, coupled with my graduate research, have finely tuned my analytical thinking and collaborative abilities. I am currently in search of a full-time position within an engineering and professional innovation setting, where I can contribute meaningfully, engage in team-oriented projects, tackle immediate challenges, and explore avenues for career advancement.",
    experiences: [
        {
            title: "React Developer",
            logo: "https://www.japrtech.com/assets/img/logo.png",
            company: "JAPR Technologies",
            date: "2022 - Present",
            description: "• Developed new UI features and improved code coverage for a healthcare application (myaidin.com) that serves thousands of users daily, using React (classes and hooks based) and Redux. \n• Brainstormed new automated unit and integration test strategies and consistently increased test coverage to ensure 100% quality results using Jest, React testing, and Cypress libraries.",
        },
        {
            title: "Freelance Web Developer",
            logo: "https://cdn.dribbble.com/users/1890753/screenshots/3907871/freelance-dribble.jpg?compress=1&resize=400x300",
            company: "",
            date: "2020 - 2022",
            description: "• Developed and designed several personal and non-personal web sites that range from client-side static pages to full stack web applications - see Portfolio tab for complete projects list."
        },
        {
            title: "Remote Moderator",
            logo: "https://www.wayup.com/cdn/company_logo/XkdurYpgQf_20140918.jpg",
            company: "OneClass",
            date: "2018 - 2022",
            description: "• Supervise and moderate platform educators to ensure highest quality service to students in North America in different computer science and engineering courses."
        },
        {
            title: "Engineering Technical Analyst",
            date: "2019",
            logo: "https://media.tenor.com/images/76cfc2c79b7d2be1f9a8c291b558b852/tenor.png",
            company: "Deloitte",
            description: "• Produced and partially managed Scientific Research and Experimental Development (SR&ED) technical reports for clients in many industries including TMT and Manufacturing in English and French in a rapid and challenging work environment."
        },
        {
            title: "Research and Teaching Assistant",
            logo: "https://media.glassdoor.com/sqll/146432/university-of-victoria-squarelogo.png",
            company: "University of Victoria",
            date: "2017 - 2020",
            description: "• Implemented and simulated medical ultrasound imaging algorithms in Matlab using adaptive and conventional plane wave compounding techniques that reduced computational complexity and maintained similar image quality.",
            publication: "https://ieeexplore.ieee.org/document/8925560"

        },
        {
            title: "Software Engineer",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Armoiries_Forces_arm%C3%A9es_tunisiennes.svg/1200px-Armoiries_Forces_arm%C3%A9es_tunisiennes.svg.png",
            company: "Tunisian Naval Electronics Division",
            date: "2016 - 2017",
            description: "•	Developed a technical report and messaging application to help mechanical engineers on warships get instant feedback on different mechanical and electrical complicated issues – built with JS, Node.js, Socket.io and MongoDB. \n•	Developed a web application that allows logistics officers instant material purchase and stock availability check – built with React.js, Node.js and PostgreSQL.",
        },
        {
            title: "Communications Officer",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Armoiries_Forces_arm%C3%A9es_tunisiennes.svg/1200px-Armoiries_Forces_arm%C3%A9es_tunisiennes.svg.png",
            company: "Tunisian Navy",
            date: "2011 - 2016",
            description: "• Developed and supervised maintenance planning for all communication equipments onboard naval units to ensure full operational status of different satellite and terrestrial communication systems.."
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
                "React.js, Next.js",
                "Redux",
                "Tailwind",
                "Bootstrap",
                "Material UI",
                "Jest",
                "Enzyme"
            ]

        },
        {
            title: 'BACK_END',
            description: [
                "Ruby on Rails",
                "Node.js",
                "Express.js",
                "Mocha",
                "Chai",
            ]

        },
        {
            title: 'DATABASES',
            description: [
                "PostgreSQL",
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
                "Firebase",
                "Docker (basic)",
                "Postman",
                "Circleci",
            ]

        }
    ],
    projects: [
        {
            tag: 'MERN',
            images: ['https://lh3.googleusercontent.com/9nCuVxXyhpahPfbz1iNC8Es79yWUH4VU5IPlAz8klcheFQH_Yw4VEx4cJf8oRjuZEAGnHWUx5ouAssBKHbAtMrW3WtXPY6Kk7g3t9eSeLCPQiK_XKOX9EaVoa_Fy18U9tWEEEIEQoSL1mBhMnCA-1DAqH1FFaqiYZgkvWn5iUQOGnJBHyyQ8PMtpK5MSTD44-CX69Ft233I7eJRepG5pwW0z0apA0S1BzTaAbiojXDPw-bQIMqt-OvtTnnbY7jNLL9nvMb88DHnPe_V58nVQ0BmjuJs2EfSwYkoxmPyNvvqxxp2zN_tG84-J9k4ROmsI6aFf24OPRmOzEPVJVqlQTZva58ofJ-MyA5PAGTJh-0_BL95Rj4tVGlI3W-KSThHIGpUR87XVVcWH5fvugv9eWS9pPVD6bSuZy5NaDelQlXwcrYEd8aDurZxWZKPkPhsNAmDJQaeZkgmrt5sTZgQeZVhzH1aydsrTTLvlm7Nmc1pzSb2ZOtrWfuZuuHyW3uyyKhryrQXzKHfh5qp-Wt6HjY5yuFa1Nr-4iv214MAzCKbEFTNXyHXkp3BPLm7T_c5pfOgqnX4ah96Wkr5VsscSeKT6PD8NRbYx_5kqB9b8YiKPJfD8cmP45FE5Dle2mj4AseFNghU_0oiZam6TP6DrtRNzkpVCJ6SLWIm-5sngSdcbKjk9vEaAewZNU18UBQ4s-dHL-EtdJrVwfBNumcQZ7j0=w1684-h947-no?authuser=0',
                'https://lh3.googleusercontent.com/ueWxmREe-KyQEt_bKTd04imtmUtzM_DWD0CaPNY5kGd7INYbxqJm3wMnw3ApclSwHG1uanBeWR3axAEaXggoZwxQ6wuf9w1W8tV9NcUjTDiiZ1AW_P0bgvodAR-TMW9e_9aiCVXxEZ2DQuKjUA48ZEoN1wAq0i2W6Fsxk98oI8wdVMUkuPvK2xs32qeR_VG62tvNZpksfXPr1o6v7CBMncFDWo_CGoQ59K5lcHMOpKnnaq1ofTvUzDcMy0B1-cTF9T0LiFkhuENjheWOPDkxNAES52tOfwlnBeongFdrWepDcNf7MmXuI6qxnjWBSNOxgGqiIgQ8l0an0fFIbrqPxXbqShlLt43ur8aLiqZUXyyuKOqQgJ1F6lpRNHvEnlE8djJGDDB3SNjcQ3MHQ7iHDnVXyO8fO8KYECVp0x2MvQYFj-G944P0F1PGABEBN30pTfEb826UkR0F65XD8rXib_9xqA01L1mTnzMyQ6NUlTPfQu67bG3HEBLhs6LuPCg6Az13TVjWanqDTc3dD4JjxWJiAP_w3cKiaSWLlCvYz9HgicCeLnoxfPbaqFBxqFJpuAHCJd74lcgJP8J6IQC8IDr3VEUmu2Xf0UTDwQ1hlu0L0VkeTREPjptmlck64d43oTFA8CdXGm_zdFjXNUhh6NtwD-JT1s3-93dHQSnUfk2xZDj5I-PuVsL0qrefaxAUdM7AdlVyAGsJUUtQT2VbKFQ=w1684-h947-no?authuser=0',
                'https://lh3.googleusercontent.com/llZqQ3fkw9a-gzIcH6ZwhafJYwnP4IByVlcg_y2-476BsNSdteqL3F51r2ASyaF7LeB6WAC7WUU_WUcleMAaSUzfcRhEQHoUEPDy6DfaNVi9_rAK0OKi5AlhmAbT-7ohXPiTJpXYSaqAjOWmDelOHr0GXtR19iu6j1EKJmyLdLTo1FWvJkj-safx_4iZqq5kd5Gxh2UWUMmRofSvV31Z4gryEShRSxxpKjlTQVH_5Q1lZyL0vLt88XT_kzKvM8KiLpzwHkAOvHiznKmOWr1T_qgXALxnxlq_7pNbJC27RnsNXCTPkpXVFsSiEbW67N3zjfrTPTdYf0Z3frWl6qwKbIr7EkFgdxrto-Z16xeviz3pZAc13d4p_dXB0g6H-XDiP2JpA-UAd6gQ4ElRExCTjTr02qNCF77Wv2Xr1YqBcW0AoeBBZJM1-nmcvveueeRHbSfEt_tB72o9127xPKw3O3MZAdIsOyTAzKNGBmZN2LZ4ehgt-HFwMzWid6Els8744PiDZEBXhMwjAWhZj-ibc2GIZ2r4TtSjWbBBKQXDWMANMf8D_JXGzJptW_UEfeo3IElz4R-cA0Jy_Axg7AT5H2c5B8S3LwsUXjXZACSGQ2Gmyee0b6wgI3J7yccRqOQnSB62dcBSLSAnjmDIK0-K_I5qyS0g79lVO7WAsE6-bcBZyUqmJRWpnf22TREr3qDtiOUeRN779P4Of2yQOH8KOUE=w1684-h947-no?authuser=0',
                'https://lh3.googleusercontent.com/xDPY3bI-dudgg_B3RHHfWKaGQdc-Ln3tP286p3fLnTtY7RWCIVscbW7GpuBv2wFEEPxh24dVg_YeQ9ljKDMgS9kdeTAXUSqEu7yolF5mV_DzhJSmFlPkyWSZPpViGMY8x_rZXharR8ISLAYILNdBaXj3VAGbammsYTlzItZ5Txre6rc6dyF_-A76wr8or-abqTCqtxlk7NYGDwAXbd6CA-ja2jQ8ACTXZYohaqYT-OOg6ZeSrGjVc-wYC7Fv4FtXNIADAOEQ6X5kt4gF13a8Sfhc0J9hnDjMxUuFiXNdcl9P7QyytGcjqlXJSeOo-xUG_FWhjEY9vgSOViwa5jjRUZ3ObloudkCG62PIbaThpZiVoTiC03IYqDJWVEgUrze1msvOx27O9O8uXiz-vERS7_aPtMF1vCtoCrRa0QjjPQ8V3g_mtLG_YBucYlvuGVygKit_8mlQt5-2qMKWpZLzviR_Feoe5Vk_It9IjNJN0ssq5jvIyilfjNNJptNaP6FsSAy7QST-wbW1bS4Zd-rcgH9zoLXq4JbW1VMwIMX6HEc7IuhNfkx7ZiPPYJCcbEuJ9lZdByEmlU7e2OatWMzJjCpxlvyH4Nk9Pb-g8bWkNQsbKnyIkwOhMnvx7mxMwY2zRbvCVsnjxzHhXM1MfB48nPycN8BZ4ktlonD56OEFXwhnTwBHSFGxFLCfCVmMkJSBUczOKLQNxEpcqsT28uZGGfw=w1684-h947-no?authuser=0',
                'https://lh3.googleusercontent.com/twbYOOKKqFSCfmHozI6sL3kxvpzudTORM_FIeLnKzF583A6-QeqCioXb41x7RdsQ0tvtLiP5hKf2HpjzzvrX3Xghi5IKUYny-ENhBA7PgXrANvm74zIAJ35x1GxKrThsm5nkKTjEpGX-054PldRdU1T_8xuGjfbsyXO1F1cbJdmabS7YUfvsHhTO3bm_ryksLdeIWZO0h4vF8p5H_5lpy-qAfRzlCui6UXQkbuqe_aalp5UbfCbmd0egogDDKw7OHPEmD9L4LYdXR-2TAi_jAPBEf6WooQHNd9brumgT5A16HIrMVq3vT6LjUPTNCc8gdwwfVSE6ZSQfS9WM380MQj_YGXdcdGj5pLnWQWgIE4HS2vDvw6M_JNshFESaR_jv7TwnWh9yydbWF5GGB7tat8eNzlrYkqj0PPS-5Hj-50pgSR33iKDu0zXWAfdNC5oyTjXOQ_kDA5B9-64fIvQxfzNg7LYXbg8wlKditt6zW0SmXoptLQ3tIix-ekCMEn-URwGIHuA_cS-GRIIqjtdzVsF-9nY2bNgsrNSojc8wwsPWKyHUXECn-tU4_SNAPIWg-2ifCp7z27uyy96sZuJWMGVIfYT_fYCcEtKGqhYySb_iIvmTtskw2oloyl7Ha_1GGU37E4cpGGz5k8BeLY_3oY3TVwTQ0F4-YyEQNqfNaVpjdYBOO48TM9c3ON_GLW2XvUQnj6jRrTM67lALUORJasU=w1684-h947-no?authuser=0',
                'https://lh3.googleusercontent.com/fzphyhmABPZd-1jtmzs48laQyC3DLO0a6glnJhBjof9Jq8C8Mht3lxIZSLSBe03USwB4mUg7in3VGCcPkSFnETKtusBcjUnuz0z1SeEvBMA49OiZOiR8Lqllhu30V3LwI0OvhwlMSQ7KjE0CXJu--JEL-eeCYYXoDTmIF_3UTALdBqOMVZQxFvCankiB63VXOo3FQ8HGrptCNMnJnWmCKQPqlyuekTa_d_Jm2Z4lPWV3EPTPY5D670k49xbDx1KTSU91nFQcQ2xuWU0mkELMLNjfNsFv9D-XyQzQKuoLryiLx0do3nR854Zwid3o-Aro6aEGEPd4am7PX_ORQ4570TZhCPzD_SPmEnakRfepsJmf1wnSVc2kHGdu9BqrYOXa0i2XMSFcOuipsXJ2usPmmP2GWeSPZyUHxuOJIOKtcokscZ0kbHDDlyMK3vsFqvmojWyN3ulco_79YmghUj0jHkbD_ySKEoaFcW9XixTfjw9yOjsS8PXY6dSYX2M_wuGS1ngsCEHklvmTN9BRKzQ1OMapKYzP59gX8o_rCkqx3vzVFgn7v-hYK2Kwr1d1WSR7wtyX1CVDnmo0GOrS6rJntIVXxOfTZR_HYbD8rWqdbiv1qKkq8vEbdafXTkbLp5kjdbwwlxNYh8L9E9p_Jb-IwGauNJVB9nd5n98XNeVyImQ9oVjURzAK3ISgc1pGjTlx3RPEmi1iMPG_yN8edVfVir8=w1684-h947-no?authuser=0',
                'https://lh3.googleusercontent.com/1lsdYCcKmLoikykrCpAVMxwf1Y-izpTm_NCAOGTOCiSmKrZe94ujHjBs9BDhx5FecY7IyFfLZQBqzuJwf4SFsj7qZgvWOAPOvzpK7f_qO5Lq-5DXV_nkhemjUz-Qt34AXR4E8f771PKGDKMmSYdwDeUEbq59wQgDYGJYUUtX1Cbe-EsH_W3rJF1x98rSaHcQY6ioOqbqs8T4FeWEi0bhCQVRwFfo8-wpvDIuod4WDMjYMHhR5V7jWqPddv5xnm42e892N1sU-E2m03yayXTPad-eCVxFDeuVV9lSCaMS7Aga9YcXMz72SiaWdTOQfSPDe-Y1aJcprVUQAWh6r8-4ZXWImGvgUi9dc7oK_aDrPo8KwlL4muK7L4g4xSxK_lpxQaT-ugsQrvMD-Po8XORc2MM6YSNvHglgD0f5pXbhZN24n2CCBX8c097wuqWyZzffcyTV4SxxvKOxNewgQaDuDYFnB3p0TU3p70uuyXUzPkAvyKvgCbSzH8vuw7Hsf5uIaBQ7_5O9CEERhgazkfVQERXbKxYpKp59euF-ff_Rf1TCBpD1slPLrLWst1jltyXgydX1h_5gtaJp1URKUB85lSpNTlXrWWRp6stL4iWw1oMN-w3ghdTUWY3fIrauhbWBBIG4UVDUyxDda2OVWzuEBN0awufp5NCT3jlVAhEBfMiE8qFNv26VKzB31Kdx910ZXCmW3RHkbMjxSTiH-4bBQsA=w1684-h947-no?authuser=0',
                'https://lh3.googleusercontent.com/GEFiNlbIeWtDsYBpSXRF3gHrhZtp4OhFlhmXfJWTTjfzWqS37mbQbtkIsBS4aObeZ2NPDAJA9_Jl8YlWAj0OoHFftfOZpf_cWY83xPLFqJZMaj4otjlRa-_LotGjYYxRW3a-OQ-a0eJDA-4CWuYPTqcei0VYpha10IfVqSMzQQ9842eQMjIdUA78co1eVx9J4OIEblez2Y6A02BxKN2S_NiqzAhwiA0uyRWph6VjiGWg39JGBov9c0mh27RnUil4H5UcUjOqVujhYLPmuVu7PeFpE4emE5OcohZTvt6D6PYyscCS38TLsFGtpth9xxRvT8-H5b403JSZyeAfJWUh_g9m8VxQoe_Q64k_Dh_7pPu_HUlhZtlgOgwpjZsUVE5FYPx_syDQ_did0ktSNkED0yDgmXan8vX6opqXwf2GRuS0tgSy7eJtpSoDtciSEu1FTIqRizNDudiSjiHBRZ4XIzfb_8f82VkC_iIQetBAiZbagEcXooBVqHCPKyV0RoFSSH4-XtaYZNbLlv_vuTcMEhpmOimymEo6s3epAjyyqReYsOKbiSnXFnacgR9oQW_FBtCo-q2oNggx4AFGftKnW3zhieruiLYSIp-3Zw1DiirQnpTptFd-owgRN94m45XJtjLw_r8XCdyYG7Y4LseHcZDJbAknw4xV0wJaeaFOZUgu_dKF7idVbu4N-8_IM6AVjD-f8RAwDWWHL7ix9u1_qqA=w1684-h947-no?authuser=0',
                'https://lh3.googleusercontent.com/r3wnitgq2RTANLePimLwIkOehYLRlz9vVyGhT80sE1kujxkBMD1RAW31qNF2aIbM_1Br388pPVaNQhO65pUQ_p9p4SAjnHChr-V0uGArL8FHNmu-sZEJ5au2tIN9TiJ_setBSjAhmHEA3iQfQaBkhDNhEH3C3gfCQod8i0GJ_TIkkPVVb_U6Soz5ahkGTZSLgp87_7xFn6wn2E7yhcRmC0DEz8Ar-B0aC28LmShvRZW_V0gRv7Vlq0VFiYPcrUwnToOYvtRM5-x3Ykuu-0xjuJuE6IjVEpJ412ebsy4Rg9lRlR0gT7goIq62Drl6Wbg8qjFDCGc6wZSwTUjkcCi5WPoL4WJL7FubEbvMV6GHfBbcU0DTCT4Bc4LbVghLqK34zow5nNgEW6CQ-F7pxdOKw5kDtxidQ6UGKGWtmcgCIb7dxE_4Ib-PtW4Jo4sNpX1HSyVl2VsrGVeYf3DT3HJq2T9tptavgS1Yw1Q_ueHyYSTvysPSkg8xhSa50O0gHgkpxOOIOOf0ofHE2g1rhAUgBoq_nVnbvadW1Gd4Wfw9Igjy69eQsNVABnGTFga8DlnhBi9zmh5EdNv5XjMpNZNolXokM_7vERvBsNdH9izRZKp7LYjxP3mC2QanUv9Y8zf5jwhvOVL_rbOiGfyMs3eEmqEh9yDuBvO39_jCPDNvOJdFtK8BLllOb0A0CmmhvEzzw6FTgdgoTCLcaHo75mz8m0w=w1684-h947-no?authuser=0',
                'https://lh3.googleusercontent.com/PRdIA5tMAnsCCT3Eftk5qcX_Syl-S2MLmfrmGuN9-AysS1mrfU-Qs-5ofx-bR72Iebviq4wnB37kDV8BrUyPhaja72j7w6WCiKJ1_kqMxKyfwWrpC5y_agbDSNBw3TADPJi3Umn7naJ34MZ44sN3RJcIeLDa7dfLXIyTM6JzFmVPwQ7WM_e9wi-Qo6J_eKfk4I2AM0qMiKsVReBWYQL0EssVyyaNvFnGPipyQCd9xICbIjbjGLqC6LN199FZWvFq9K3ZrS06BE5kqn-LkPKfNu7nwldHoYVOT35dy72krMObC-3sB5hOAWvxv8s9OkqDg_4YEolnutIgEfYE3F48Teh5jAJBhItL_d9IgnV8yA4nSbhLBrSsPoGFaaQGhDU0x84xBirr9HiWaqgMsmb02vS4nTs-Q6voBCmgMwn6xK3gAjeVOovmj-iO_WOknZ_hcgOYj9lqJHC0FcHDxKAvm1RNd0F_R5HxOzsHn5oz0BrrK_HOvGa3li9eX8TMVK5T31hHLrFWL8qC-47hQzs9DWVeOiZClfjPihgs_EtF2cynj5PDja92T9WCuI9GjaQdoOy-g2P1ZnnxXAGNVRDwincpKAyGsgD77wRJHqAFqy0Jhur3lBHGiAGKTr4lhVmVGX7HM3FngQ6y6bAjBgOEjMg7XPxQvAomr85PxseyC7K854QCoh5ppIOwrsBmYENBXJ6IbZbzGLRMln7orORWGAM=w1684-h947-no?authuser=0',
                'https://lh3.googleusercontent.com/MhsVx_3TVdPvyikIShnSS2Uu9GtkJGIXOkAJhG3pWliGFvcUR433Ixv70fXaiWnaBFaZzGcbSLYzpZFZ36iLEXSl9vNh3swtfOchcX-TOembAAWE-0KxuLZumCeAl5s5Ayx_wLb1gDCrR4voGVmFqkE2UFgsYrZq5QpYj5R0DmVOL7kMOgyubuDjxID_0lTpMitb-lhauWfUWQiQ_b8Vy2cfL_2dlxYq_bol4OsVxBgb9000QIwbjB0NQFkGkY56I81JW_c9pHa8Uv4CIJY-0Wxq1JLL7tb-f-KqCi66DZ9y5PJ6Bhna7si_6Ap0OAHn8W8oy60Qmf7XlVC65trL9YjjxCbjtGo3bUfg3qH0O0BSCnioSLlVXN_NkE9lYMN093pgJ6bcAnpoEeQA3Hd15uw7I9nKo2s0OxmrlOnFpBCyTVL1De6CVaZ9Zb9204DtNah5jidXoxANpOHCXZKAfJ6Yj5j8OQG7i1K0bpyz9caZfFd3LeNSUaoVKPU5qs2FvqQzVr80pYcAojxOhDrHljN0Bye4aM-NFpgkjLTSc6HlgdaAZllq5pHQuI4SiW2aDKJmyz3bEPrdQHbLNNF2En1y63J17SnBq8b7KgRgVsrA4kLxJWHe_9gCn_F7wJT84s1C15ox_sjDsCGt6I6YFTrXjgohcNhSYLZSNyBlEuwyKluZ149Ftky4x6uZ0M-WcQtFqotXROBKsNzdvgiVAjo=w1684-h947-no?authuser=0',
                'https://lh3.googleusercontent.com/2eTjF23FHI-bsSceXtgzwnxazx5dHaP8yp8QLQuLYPtvADQzoOjYaYxn0JsK8EN94u1b6qyIy6LZTRir-eATTMuNm6c0RSpdL34j_kLqJnWr6siJrYbjHUVRR67bGOT5mfLHQU_U2VBIBpbvvF623o423PBEEsJNyINvhiiU-B8ZESk2dO9-NQcwK9Hdly9wRq11WM3hgYHUg4OEOZLvsrDYGw35-bzOm1YMGaPz_wwlsbbhzvkt_9L8Krx5AChFnBXL9B5gH8aaCpsGBSkETZxP8ltr8wydNiMX2AWsTf45StLSZvGuez3rzJnv8wmYbO2_Wyxn2_QSUwL-RqH_1IrF0UlYOr1ynb2tOa3ieVIsp9avZkwgIruAPFp7rl2p27-VwjLY9OcRRmM3c8a3m0-chX2iT9tIaYSS4OD0BSnE_12aC9yDLLiofWNpJfWl-fkdBP3gnMZsS6KiHbtTAR7wxr13bBbKh9JMzscjhPzS5qjckxGF9GIG7ylkWJyiFALH8op3we9GRYLHoKCPnDpXyL3PsFs5DjsGj48vzg2RWUJUoZZx1FuHdUNpZsgd3DMXg3xCoZYZEPb7xUl-VTRZBGbL0MBUJp8BYk2CcoZR4j90X4dsucYeFLIdmvhpJ_ENr3xdN6_jXGbjbB--B0DlEoQ2d5hTkxSbbtAKI-3nVp1-YnAtO7xcG5ZRmrgYpE1fQyjbx58qKxHkfnRYi4Q=w1684-h947-no?authuser=0',
                'https://lh3.googleusercontent.com/46sBD2MfTxAp0yRZyZgMP1abBC148IkjvDpnN1bJAjGOq_kHXn4geI9e4yXeN3slKWRpYRcqOAKKjacyphM6qmBLyyNSgI5Vzs-MwexNXlUQZfRcc33PT7Z1v8C8n59vDigw9Y-vm7QMuFgm7-G4pgrxtEksQyfLzzywMhYP4Bq51-8_xqs8zf6q9yAxk6M8EWbAiuAIWDD6PzXB-lnN_SKpQXa2XD5DOKMA7ty34q4abOTwUVKFNHC1UeFC42AeGLhcumsbFXNuFZrsOK4Q6uuNnyLr6MTvwOYZb7ysI_PZZWA-60IyEo3yG26DB3PHL3H8NR8jgKFqw60w2qNgBQl5-qAWvmXdClCYCT7WnxjlatSRStRVFbp94w4doFStsv2OaaPY-4CnRIN5e_XkXg4gF3ZZXxQP8j3OuERZEUKzCh8w7QWQtmIHZZbdKLdoX3bYdEHcGgjz3yk2iO6zPFfT2ePprZfqqn7iUb0FsbfG3TEKaxxSqFWx2TB74rpuSZIZ4hcjxHBBdGebXbFL1FxVftgvhctIhcFr9tmEzmSHDiyMMmF_GPqqrKFdSDRDlGhRVWly4qa5lTHnlQhayHUgJ-fcUVm5S6xohMRd1ttcfA9Nzr56PRTjFHn0rOQMg-I9-rcR0KCuwvqiyHe_4jAeq-2n04hm-lWX1aVFGIqvxCKq-Vg_rfRrTCWXnAc2-Oh4fcZ2QiPLsnroeADODX8=w1684-h947-no?authuser=0',
                'https://lh3.googleusercontent.com/oy08UHf_lQQP20dnWYRvl8e9UMQ_a7byYDoxJJ003ImdHOoq4nP1PzgTtCnxYzM5b9x6Rfz9dRmmmzWoGtCiL2K6wEaWqwYSf3v3u985QVUipCKkwSxipZIsZAuilva5HS7n6nojcQHLO0tH6aOCpLzDu0ql_M9nBwmqf8AQmJJrwYdOM-5sgSRPfiWY8loK_m3II1L6hhqy2vm1pV-PlbFXmo6XTqfj9tbTNQqrB1JwNHv2I_CK2Lwwk2w2GPjYvPyRJrP2OJ47Z8M6EQpG_YnXLMgeRpGLJHlW2qzLD5oIcZpTqZwijK9XCkHrkJHEpHQ1m3vRNYuRMib3lNd7YTkenTs6f2AW2YqIj4KTkZ05XzqeMqJhRANS0uzw9ub-2JlSJSIykySvC12V1YbeYUPynL9DKRnFHeShqeR2ztV6DqJeFWjxTxFdU3q9EKGjV995OdNG28YJE3jCZKMo7c0sdoG4tg80enGTNL7vEh7x28xXa4C_5i7DWH0WfQquZP0F_O11dQBKJr2wFoYMvtRhy0ma50W5rjxhiGuZbsn-9YEABw3QZSvWjbPUbGSsAZmAgm-nUbI5b4feUFNdCwq_ZPQlxubUkIf6apu00pl20yiWwUWjqRrzsydiXSoVG_GNtH-wTr_7jHcQgdTrGTiiokw2CC-etnDPSkQslvytyJGjr_vwdEpKWTIIj9c3SRB4482HIzegCeVF03qXAe0=w1684-h947-no?authuser=0',
                'https://lh3.googleusercontent.com/xm4ooFiPqp7NymwLx0iFKmxHKnYsyAYcTloMdqspy1Rfjqp0S0v_m8yupTGJDdqFlLLCZyJP88eFTDHiXJt3sdXoesjuZfkZDOTt00UqBWYiwpB5kDuyfvpY0gI-wqruNkSZq0vMqcW_MMibkQFJkVOj9PPcAw0WMO9DND9t5Tf4tUtfGP-FOutLWs8JQLx2j7zUf-Rheh6Loz7XLNlpb9K15yNwlyQiILOZOjGg3wzJsqn1vOULyH4ctdYE41mNrfnJ-XztqomgqhhKnF9BAYLRXjk_sv4WP7eWhptTRFlpi7wvGgCmxTCz9xc2sB3c36e1d1CMtJSrWdNACQHZauwAUDEyenmK9YrJ5HmF56lJatLjH4yJWDdKrTkJh-KFdl89sxNWDtXi4LDUfW2LBzTlxe2YPjQoHNsH3_kofrYzo8xChYLdm9OtriMWfwr1Cpm3RW7R-7GOyMnywoqrOUREOB3cKUkn_ZYiec607ju7NImYtNuUbv4Ad70uKs68OjbHB0ilaOuMRDqS6BU_kVI7hMd5EdTYuDOqUJ2AxPBFnjmBvKb1biqgAxIOj6M6w0YYDV2IEozOj5i1_b3PzGT95-pUyyDB9i_EFGJy9M44WvvHxWUTq9Ryogg5jBy44nRS9gp4HN3BbQuU3chEPX5znxQ8ljfaKy8wyXYwztKtVbrMsg_PjDvXfqeIZk57v4KUxBg2LpY6Dbni6CzD0p0=w1684-h947-no?authuser=0',
                'https://lh3.googleusercontent.com/to8LFloHbzt7en2FKVsN-DTv7aBEqXFSDAYx68L1ntnYfkFeZpK1HZa9A2HPLfVAGVIiowQMd9PVzRGDllSe0h0l0jN8Q-NKLZGSXNFPV-dJlLdFRUbdScesijeclIUtexMxeB9buQKNUNXl7V2kVxXDz44rLI26MCVIu7a4NnwHJtXpfeS4_6GvcQoP6Ypj5nIKPobHiD-QPemwVafMk1b4Vowdlt5UA19moxfpIVzG1IPqr0DiiSmj9Dpuofa2_ECI-Rh3PBsu2BX79t8h4JE9yU6eG954qQ3O-r5dBctlPReIshuQ8RL5ytgMuuVw045SwyqzcQr0QryID1up1S20HI4U-M_LCw5UbgcWmv4fmVZluWbtAFBCuZPFXwo2bCd9Rg5o5ubjkyUzhV5fEs_ZPnokFD__JT_BjThJn59Kqdg9QzpMuNseSOn0jpYjIvdPrZMhHO7BFiiGbZr-o3ocDcG59wjFyOMY0LNS26kJF_WhA7sR36Ly670453J2umQHRD1oTT-eq-AFZyrhrZ_BuZFlBJMjyDl7wWz76nCF9-l8VuwW9opG_2Q_jqJCcoyi5bKi3X2GxmQqhPu20zcoyQVqKyQXRyOG_Q2tz1QgKSuEQaoPuW21f14aw5bepAd2bVz2B-HdhzyBWm84oist5q0syUDn203EAGLOmzZEUQ_bBBz5vtbnDA4cse62e7EeH_ewNw7TRvvrJo1VH5o=w1684-h947-no?authuser=0g',
                'https://lh3.googleusercontent.com/qs2klZYK7SdFb9ZtOqDta2F4d8sWGghYvB4XDwS09Qq_NikvIj4Xjm1Q6mneytpUo-opUKlpvn8QyliHCKi2IkHn7TZXOnj1FY7kz_cswU3Tnya0pbDx30vqlwczCglA_BFASPybo43itYnvpUGwJLSUp1l3gULQMzsHnFqV8ldb-DYF98ewNsvsc9ohqoJkRSqGW1t_K171kXEXJaa7RKb8GLLem_t__JeGIqhUq5raVPqc2bajfvZn4FyEJFmlNcXMsC5R1IilY0dr3svzvdtXHQjZmWSZdYp-nA50dB7gxmqRgxpJ4nRqGPQhFMJNUVR2jFXSDVXPiH_29PeoBAtAwCW_1AFOp1oI5D0dU90_EbeGcRonOyCi67wAcsZ9roJFftzW0MCXHIgKEcE6s_2UykD3jQY68GIFqrdyKsTX7ggVe1X2zFW1aA59cFLQjU4cYYmpzvNtkCs8zND1zN8HGzrII4_s_2UK92-4VKh99nkos37-IwJpy9qADMfdxG6Y48mAaDr4u6UZYzhpSdyp2rK0FfC4RI4M0gnBAMtww2Gf82ti3jnZajg9EpdQwZbr2-xtOddl6gzwohWnq8HCPON_563NJ1bGKFojkCZVG3pGo5etvcUNxQm92aR7Pd5tpaHCymILf9eQsw1UBHcrVCxzLmoUp64dAiN7WbFfK7l4vE3zFnV_Udy-AtURgDieUCzAoxtj0Bu13fMlIDE=w1684-h947-no?authuser=0',
                'https://lh3.googleusercontent.com/EFSAyI540rt5qxnceblG8M6qqSCsRPRmnQX716iC_lsffpm3HJgb0oCwXQcxbqUL5G6FNx4DZyv2Yu4RGTuynLOB-IfKp0VtJXQ2EEtCdKYR0AKBgD0YUwXChYt-Xrqm9YN9XORTwjAEBjJa6edQrsgfKHfFRBeZfSFYFEgtIMQVgcfLqQ4iRXive3dniWSUADQWEQ0JR30D1koZN_DVw-Va-dc0Uf7Nr1dX14mcEmzUJ9_pskEil5hm-YyqDolcDGxDvasT2solXkhf4On3RTHqvM2bBahfJOEqDDb-ny3IM-77Z2ToTkFm-tWCuvs3xBExVo__pQ0lzmnUX7iGiTCXFeLccxAaaVVGVbiG28ctd91ttKm__-xq-3XoXXp4_kk9KPLIUjfocee3JrRUv5y2Pxv_wPHnISBEyk7-WSNvmr2KlluNll4htcgub3cnJpO84diyIjR9IZsx1ZfLhz-9Zl3ar6e216YeUxpt_qPViIoY03DUJ7yrPNrKbCn2zpCohEI6K6GznuTq2mRu4ScGgcmbNvqxtFPYpapWG3L3U5CtDe5m62N6xM6fhPMBLHqfaEZIrDCJYlNuGeRfpn0R-GeXxxCGKItVF0RPbiHNtVER4_SVgl8EYCuZcIHzw5S9wVSM2mVUUrC1TOahXrPzENxsSyZ_H-hJHHdYZ3BU5-pLAuC9qMip22yZZc4a7PLBJmCqmHwSB3K5CrE2X-I=w1684-h947-no?authuser=0',
                'https://lh3.googleusercontent.com/Kk8JrHhroKQjevIruW-RhT-Si4wGqAEGWvKqOykk7aaguwdyRx65rLzCxfvf8mieP696c0hwdye1KeqkuP0iGhDgdGBfDqPk6ucczjDoWGt8R9WDfxy1j9QRPJEip0OVb3Em6IrCmadKvjv96BY-n7J3qtFVKNdjyd1_DGL9HU_TLVL7xniZM2o2HJe-LzuLaUBJ8ViSN_ll1hv_CM87BNCXMudbDgAcp0kBd7oQQ1lyc6nB6ARWY4ry6SOfsVLC1VbBj2HH_vXOUTQzfdUCKT_ba5kWHrLqt6aoDN_L1O2f39CcxnqXRgealasuLH8VianN0xZCZ-lP1jrx2r2kkhm8EuZzC0gSEAhE3vSAKsD4C-4nQQy3QyJHmVvXmK-okFARhtQrCBP-yyeqddLJ6f9GkiS3fWxlxuFtAzCOiZM7-PjeMjAJQqy42hhCU5Ta1LdNsNWwCD8nHiN4OR_LQTDYuhChqsOwdLeQNxK-156ZrwbSh4Goi_klEWXZ0-Yk2LyiHUSC9CyIg_jbILye8JRfiGPqUV4mUYE6vQLrZvMmxQErp-V5WkMutyPfD-aqRQpZeIgke9h7corNekbsIc34vTfkDXl9sWDyJMsdVQe5VGaVu1Z9Zi1b7bSZquDGbXuiIVSyqNPwzfnNEpw9G1BabxGwcPNBZW93gPlFbPr72Du7Y9G-jPRBDcXrIGn3FvrUX6LxH2pqWPpnw-WEEC0=w1684-h947-no?authuser=0'

            ],
            title: 'DIGTHRIFTING',
            caption: 'E-commerce MERN App.',
            description: 'A MERN e-commerce application for cheap electronics: We have the best prices! Main features: Shopping Cart, Admin panel, Login, Logout, Full payment process, Search products, Reviews, PayPal payment, etc.',
            features: 'Frontend: React (Router, Redux), Bootstrap, Axios. Backend: Node.js, REST API, JWT, MongoDB.',
            links: [
                //{ link: 'https://www.google.com', icon: <YouTube /> },
                { link: 'https://github.com/zoug86/DigiThrifting', icon: <GitHubIcon />, text: 'Github Repo' },
                { link: 'https://digithrifting.herokuapp.com/', icon: <Language />, text: 'Live Demo' }
            ],
        },
        {
            tag: 'FullStack',
            images: ['https://lh3.googleusercontent.com/zrssZtwpCoHcUc1HgaQbppjVQijJx_sQp3cpwfxURh4YeHbAB0aDWO8JUYAT37YiFRsvwLws80Cf7TRdGx5mQQqHKM5dtpbvJGRc-2ePeQKOOsv8VChjj92aItYwOcsq7yTnmRUW3dVkMpTnlMkCwUGamrm0XOIwZN5STAG32FZmyW_M4fdDV20DjcXwiJLRKn0BeZNm8dsWrhQiog1gWTDKooTYSkEMTkVFLhUauPXC1yyyDotgyAabJFxZtZeIRyQk9B3HqWcGWvWYWX4mhNvtdx1UYbLa3pGeGkwCtpUot_MoZ7lI8rNd26KGRd63jn_P5wHub14z2K8_8sQ5G35Xonlc_rWMw7W4Fd3S5fSF3uPgDp6ZFqOTmInD5UL1UKqpxKXh4hQuFB4pTgl94fp8fwIGsOorbakkOtoCAYn1x8Mbk4Pgkr8ccruJ4ExF5J8Dc2zr3JbNakBZSSgYkA8dLymiy-HOYfYk8RVedxYXeGhAO9RygF3ZpscZxmE76sB1ghg4FhfSC6Bu7AwF_h-DeL7vI2HOlnmh9OYhBLvnqkACLtlaCX72qTSwwP-57SXZ4ermkYdNaTnRH4jltaUCwvsLuLus8ke_kK2U1scLR-1UNUVoUxBjSxzTDGS2dsPUWpov3X0z8xhddtWUhtTN4Y0vki8t5MmbPBwUXKqMPzZ0Eyw0l3euxNj_-NTL5l6wA5kyZ7DdrG1alLeOY8k=w1684-h947-no?authuser=0',
                'https://lh3.googleusercontent.com/rqizyLUy20s3mrHkzqc9-tvhlFhJ2UL4780rwJ_JxQ0TNDcj8CPsvvpmiDjVxkGRdRPTPK2FCkhQ3148MvuWNPDa0mQjMWfRwKBaXl39nT51xOWo8PGSaLA3YxqpHa2KhlmTu6u3aihksSpGdZE0_K4IMRGWEnuVgtRTMlhOhYaiXb5T4Hr3_2pBaF6wyIfzdFmZocjR2F9m2DEN-deX8kcEllnmRsNUi0FGoQqIsmtPPrS-a-MhOIdmIGcjXeQI8uWsZX2XWaztFuufTm-tRgNGk892ygekoHf0tbIDFlVFlRj5v_XuQ3LfHF5UU2yhO_33xOqZZNbAbqXcYCKqqSPR4qtnGVVItGnRDwwK26BnjpACLOy6RmPkGEkri84D3C3Hg85bMAzU8m8Ic0WYCq4tueuAjztwQHkn49LghnywQRfLcq__ckt5Et9cQ30BDp-m8-iNeo5HJhHuZJRmaqY2sJYj39aJvKKyib5yqVepGrWDKY_PVTYL9pRJJSepd9bTHygExfKns5J8nhkfTuQ-GqA0r-xyBImP9xy1fKsHjob88brx6Rz3fD7aP64UDjELfrdabzWZtDtw2v5Gr89XYd15HwFfiPBcY_uPrAb9j82iYr0g8Y8e4A5QzDCxaT63YEgVq4gdAZmeCMaSKyfUqBPxmCKThvouUT0ejrntAoRoBqda9214NgXWt-KspC0DgO703h0stnz4OP4316M=w1684-h947-no?authuser=0',
                'https://lh3.googleusercontent.com/4jKVj0uwabUZSI768lki1z8Y2DvRVjb_sGLO1DRw0raxTJ3F-om0KNCfTHuhEuOYkRzJxJXNKTTbk7-4rUuvgtwYI1uxXdQuxudS_pKQJFQA0dj7CGT0z4Rj1jsPelhK_10pcSema_YT1uUT5dojF4W59VksTU9x89oqwUEGPaoQzWomd0z9QTOjkI8lOkGS1OkfY-w-n8eu2lX_vJmi2YhwKgjFR4z_82O2KnUCU_MVgWRk4lptiiGHW6ca6IioSVMvDzZ2z1VhvIqSWyUR8nRnYq9u8Rdm6paMN-a_N7xNaVb4qufKKSicH3Z9j-wPYuWkMYV3hKVcRRZaF9eZ7BMGngf7ewEsxu_gkQFtWsb_MrSYdjtWKOhp9_qQ8xL95XLgdz-5Oat6AhNktK_AaF9qf_7vksXuAr2ddK5axH361HNl7uxr1B3EBaiA1YQet6S0anoaQ1pi_jbMfAGEhXdC0DBgjGWXfp9hf3v-udfpMtWiWal_VVPQHCAxZd_wD5IRwfG9YMS5J6BXKNnvmN9wbQhZUwg9CHCmTX-TrCAdIgR5sn1oGI2tLWRHhvI1IVWlXUUUoFzLcN2RKp2in29U-eUB35SLMHItAxD4Z-vUtxnIwUhBKCOM4gB_yq2WeHqjn6Hlsls4PXLM1_vrn9DH5CNydYeBErqG9gLvcsSxeNg3Kvj8Ypdb5NAG1OQ6zJID-peiFSET3X_c2q_JFwQ=w1684-h947-no?authuser=0',
                'https://lh3.googleusercontent.com/4AMzo08v1W9DoJdtBgf6o0ZRoFDGgJJDQ-wIbnpSqA_-o2xEYMCO9Uf8Vye5dEDv-V6xVxLSTTALq4kJO3hI-YHkbFAvENz7NdZZNhrJ1GH70M15DqBblhI931v9veQGEzsxQeKFGusYE6aqJlAuvNJ3ap6_yf0VvQWSSOLUQCRIMsDKFePoT5r7xOUlF2Ejsg0q9CSAYSevtKON20nzweon_-BuC-M5xR9ghTk-LV7SmUln9tzc8mF1pSvmydtcK1FwdgcxTmUXtSTqSGr7umzpn9ziDoi7R-VWCOXRP1fRkOZa6CIUXyH8HlWLeFvvFWLpSsWjxZWrTMP1tw-vKXn8LH8xRs1eA-DuYggU4wzr2TnE5U88-nk8du7MNM0LMADioOPR6gxFD1Y-pqCYvlTzWZtG2KQ7lKwPvibe0ct18uV4rVrtUqPayOp-bJFiQEza1MMYQ5AFK7xypnFiu-KfSGxkA3dJA_0a8JDvKWNVQdaLGhvBvfSMVvZoYDX3dkes1hVN1THJYz1aD8lp_ypRhPhnk02cyM8OkB1sepmXl51e4k16_vyd3csb4xaMG1JCyBJWrdec7F_2o0oAIVL9h96FzJc6hiIS6nG2DS87bv7fA6-XL2nMgsrbx4dqCDbqicRfLNXbmgWt9vlRWCu4y969Se1s6a-gglO6u8Pm47JM3o-EiW5s8SlTt5rgut13iG1Le2JPnVB9hLTDbsI=w1684-h947-no?authuser=0',
                'https://lh3.googleusercontent.com/9AWyAVTCthTKJH7gkQEV40Xy4NlB6Vink21JwA1ouHRBRbw0oWW-znLPx29sELUU_zLfbhh9BQDsdtx9SX6otBZqDa0xMlrC0aqy5M5YQueDHDvf-CndppAGpjCaaY-tyLiVOgYg5gPI1FCvJ8cU2_gV0kIt-nUPPTUUs-i5IYJ_JCa-COcrNg0vCwJZupkXMKKZz0GuB2di65Wdtvk4h89HbWLpldLfAPzwkkDsb9MYqnbjoDzcXjYptBFSC-G3sdFcv3jnulw-RVxBE6j-jLMtuuKVS-BlZ7YUF65IyowSZm8f1P3yTf-c7YetU3aSUDciLGrPOdmxWcXVkaWBw7CpYR419Up7ZszklfGpg6qGv8B4wBOzdv1HUi3w1G6a9t1q7PtWstoNdqBnStjgJgJMknzFyDZZaoAHvQ_p1Q8NgVE1r-wL7RIn_mkf_18qTxJdW5bXWO3xH-2ZQkeThzkXeC6rJSMCpr_Y14OadWgm2K2PFGf3nAUUQ20-eM11s6_xoC6d28gIW_jZGDKs7b1VN6h9nQdbtCw5V7URPDN9dn__jgKzk3e7B0FVCRp7CQJEQ3GsaYiRh5EdTsOEADZyxw6ei-wTT8AvQ2jL7GewoR0Go_023tLZka1BaLw9wnKHTDXF6ZrJBE25UDwSnWauLoIFhB9a2XEO3kTMdpFtYbdJKeK3l7-X0Z_dId30CNBonSM0744stbKVdbfzkqc=w1684-h947-no?authuser=0',
                'https://lh3.googleusercontent.com/gfX6altrsKz0unPyoSHzfYzA_pavNl3wxe4LopNxWjW6ujwtmaFO0PCHuuVOmDwlD1gTpD_8jUiUrxbfNoKfPwMlUbUyfbqyN1LAw2IVBjKc194sa3M-bUeL70DbQLtPuPwxHfrn7FUe0yneSHyG0985yNvTrfTifH0I7CnG2tIbPlMzOFiVPmvGKKB270FdYUc-zY7FbhNri4f_xo0pAAcqEA3knfRvgZEMb5h0FmJyiGkzr7uBKPunRiaNawIgps5d3fCreH75K_ojXespKxMjOPKKd7l5PxrCcm4C40mEAe6wRyMv8Bq3AgL2TuFTjCCMW4IxR3K0LnQWR72rSNjKv7gA8fbbU12sBngbPkPw7WzRXdRMITQYUADn2SlxplTEFn8jjcKc-LHf9J3r_RmVdUzo0sbF7bOWK17sR5hsvEvMSh2QPNZlc7ikssI44suACW2lLdeoHU2BVgJKT0FGhruSBYJjb425fVdCaVju9gjf8fCKHWfBj677gL8nzABudeIDXb45jDNjIAFvIGL6Q-Bh21E-WZtuNN2xp_Q7bKGmW1yOXtMgjzoGHODnBz6vdjQ2FACWDr30-NjKQrftHaVFuFpjR6sLA6oDEtKArnZcQxsXVNqzlII1UQUpMhODJdw0VhI6a7_2Txw0hsSKaZgjWz026taNVfBL7nbr9CfijB_UK4JEPkZV_nhBbg_zsHdiR7OcUZq7IuPB7do=w1684-h947-no?authuser=0',
                'https://lh3.googleusercontent.com/JwDhD0HNKOdNWkJF0ZJr33aW__JV2QEu1jmkde7KLB1rvcldvbh8DAbC9bxpiJppE4hNBM9mrH6qlN_FwDJkNihEJxrX_z3TGVyCHDnZ0aWOAB0y5EiQethHprbEI9y_EwjUpxmL14kIlCTZu6w81s185bO0xE1ZdGL6L44YjUKpwbT12LvmQggF6UV_12Skf1Ov1IN_IQh1YCACqPWXH_2NZnsqRVR2S_ZynKaEscj8PD_eq-W0y2LS0kU2h616sL1tLN7k-t4K_3DrXhov7JunLHSBxkvK4NgHpIo7pc7uM6tZRJOhYeHIH18dqb9djPSyQ0uExp-bIa5wTOhf43SmgW8FaAnOXvP8hfvV5ONpjynhnB70A0Dz5_s_35_epU63liCBMRZ_yWHeKrwPu17Hsd6AomznV02pasmuvFBRiR09HkHew-gKMuF1HTkvNVGQO_GK71mHNJBLnuw0i9UBnxu1FBlfMgRH_z7XwCX9CyiM_A0qHj-1fhYuPvmtB7cpG7AqzPJc_8JP3qXstZB3Nz2OwmZp_5D9_EdbwYejd6nudL_QP8gyMxCh1j3zk1zUgH3VLnG9ehspXbzUtgVU0DjNKO66EZBPpp2Nh3MnN2MlidI3dV5HB29E5op7TYueqQYN7If8utYiH4XxVSK5c0v63pw-LUyufemZuujTJOVE0t5l-gU-M3rFfzESaWTaFLVpJaUBp1sS267qWyM=w1684-h947-no?authuser=0',
                'https://lh3.googleusercontent.com/t-17N43LTeQ5EtI1ck3Kbi2xa2Z_uVTQDeAev9IL0v0l32WogJ0shfKRfuuF6BHgkNSSPWst2tyoILCKrbh3e0ziQXO6NDwTlLy1GwUM2DYmcYdkzmXV_-OTPgQeuAfGFK20C9K665HkuJHAfowKBdudwWL_E1AlQoqRINOhJXdczqyompsu44Qj2EFHNR1n01xEQNqyupDhYbvsuLijifkBJ3bQYpeT85xCW-zAys0zb4qPW1pnmYHP8LtHp97rQ_wLZkg7SiAXB0bI9oQctPBkW9wt1YAIzBnQ1NPcVhuDClLufuKrHog39JRItQFFUXC03-8Z8HRREoxnQAb2km8WoloiJQpAfgxkDie5O5Efv0AYZl6G1A9-PTQcTJ0hUQOmxXI7_j8bT6ckJGAmnaIN3Op7twCt7tKszUqWIv5VJPO8wShH4O4lcBKUEjBjazKzm--xJOQFVu5-z1OrUQgC2_--OrYvRJ5TNJopfrRNKXq9X5CquPaifr88EGYkrRACm8R5O9IUTPfri7JqkviP9XyaHcNNwCtuvpxWX_f70vmrH1rDMcHUhQTq1ZvnfY2b4UDkyg0K4tIc5_ySmploF384K_t0FWs2YTl1y4gQxUvVDxxVxaCYI24Q9YuAfqmMgF0OyRuytJcbvwMmErgHWwLTXNu-zenLjmJmjHzW7kiysQrx3Vp62iGFxX374GhFr-etHpQUqmPslCSPfi0=w1684-h947-no?authuser=0',
                'https://lh3.googleusercontent.com/jZu7CH1FQyoZ9nW2HrscvSRbP9NkkdYX0GRYLzotzB6mivHfB2sDSdrReVVpayg2pqs6tl4H5gWR_viEl0WYn4nXOCFq-thUiHCNC0uErjn1fnHRdtyPuceyovx7CCb4Azp3nKAvn1u6j4PzVqi-LwBEENZ1rgCgxDa-jNS0xUMuWj4FeDYq3f5ZXaLqmpmzUhXMEDvWoe6RFsj8Oth2jRZ481ht7APH7tEyzmzGRYoHX4coCD3cNDkaE8vIUPYnBBFcGexnqwdvHCMJ9MGCZUYusprK3n-xOK9T3UxESx7YOJeKotOR4IttGteRyjOMyk1ra3l3j07GgXvrM-Ha4zD2BG-anNp6_T-p_IiSu_JzW0PMj2zP6rN0mXwm_Zr021ur7WUF6wCOdHCbQebLYaNeY2na0QarOOEA5lD1CXsKw3w84QC63KBFp18BP0ocMVFxQ078dOZb8WGstCquVRe7xfSHSz_95kXRcLG1_G32ySkzCq2DlTWOVM3-fd4PKEYKUqpadRe-MxLzckRyR0FiNjzree0rPH-L2WtI_woNCnu4669eCRHHLAjx-7dXydUjb_2rPScf2NU-9vn4tU2e4bFuk2IZxnIw9kS6MOV7ETQQOaWreegheEVct2_Wk_F0HCGRB-hgymV3NamGsVILd_ip6rwsU35wo8cxpLC7YMStXt0UK8iKzPGsKuRXpoedo1l259KxkEiZ3cavjfQ=w1684-h947-no?authuser=0',
                'https://lh3.googleusercontent.com/PS8R3l16WPDIGg6jjQ4yWmmkcXHe_wkzViglqvtWgnTHZKZVnt5rA8gYb8VL8ux0z45Z8-KEVlXqFFg0N0E0fuPer2vHrWNdN0d_jYpLI8ITc8N3_u5YKqZcEaMBrMBkrSDmiavcWskca7oF1mQIJLrqBrEq0ouPHEGsf4NobJuFD2I_5ar_HhuZClzq8m8FvX62LS1f6mimfnnbdLRLGeOaOmWT_p9_p6k-tJLqlO_9BY7bm-RzF3pKXQRp8OE6a9_OVzvx8yVZYTuisuoVtZMKcd6IMAYIxuvI64Fq86eJK096mbQEi5SkCG7qaIFOyTMd_c0YtG7g-noxm3cVSNvL0UnU9m78mXX8brYsTwm9LpMNb-Ido3JWWg4bqbF5Mi-Npm-3rApXsj8wsZW5AN-24t3o8_cgRvGXTQ-sivO-eYNFrikirYgKYXlV3GgGy4pJCKTtk1LSu7lAsiXFIqjQF_yZdtlpwrv9pfab8ihurBxKVx3xMNpnbJSwI2V6cGpNLeibc6HgSu09BPezwdlSRneeCJiSPpqlKytHrr-7hZnYJPaAIEovV1-CRPJvdPj9X0ApLPdv4efkfi81QhSSO4_swmlLdMNkfuqGd8wYWc8djlepr00H8i_CTv4nddNgMn_PLdDmVKUWKRBEC7E8sxxBhVKZG65obf7WwfjkvuqFFdQXISVK7er1VPPxleMrw5_HinZ1_5BbBwyvW_M=w1684-h947-no?authuser=0'

            ],
            title: 'DJ-Events',
            caption: 'A FullStack App.',
            description: 'Full-Stack website that allows users to check on upcoming DJ events uploaded by authenticated users.',
            features: 'Frontend: Next.js (use of Context API), authentication (JWT and cookies).  Backend: Strapi (MySQL based).',
            links: [
                //{ link: 'https://www.google.com', icon: <YouTube /> },
                { link: 'https://github.com/zoug86/DJ-EVENTS', icon: <GitHubIcon />, text: 'Github Repo' },
                { link: 'https://next-dj-events-2021.vercel.app/', icon: <Language />, text: 'Live Demo' }
            ],
        },
        {
            tag: 'Next.js',
            images: ['https://lh3.googleusercontent.com/WOZeEZxOeT8F6Qd1E0jiY3Gk6yU7yYyMZw8DrQcH8jX2-eG1CYBczS6WH-ftzf53mOJieOj-OZNpTeUrwzAzx-2TrI8mUYQCbsvmabIyJFymxdzygzx7P3x5_0K_84dm_uDj6FnO9eu_OuxX-qDMIB_p2EDrsrzGC78TaruoX6xgZO6HUJAIWXjd_UUTTKzCSA6MEPI2uakk1lwiDxQqrZjeaPl5gciROYM0GnuwcrW8rH4-Nkgbu8KgnhZcOcmCBB0ZvwaYSs29AVDDj-Gh0Q8zlybMqA4nJLdArBQacm86sqml7nxkEADIzbqfPicmxQMIyADp7Ty8kg4-Mx3hEjf4hVH1xxNI4I5Nr6mFCn88x6TvrXsBAnq1aqYzXbmRArfo4HuAdgk-MVscql63yELGdVenefBzG3MU8fRJAh4ZAdPCSQu6UJoTKf5kXfyYXaR-bpFC2Jw01jM0QmhUZky1r-hxb2A2hHx57z_LsBOj-yo-ibqpK2NtzT9i9oAaXAWcBLpO1IeGAh5MesNqhYsxKN_7hUjdzbnJGT_Q0GgAg2M_xbllg6DoMLFwJr3qOnvsjNDiJd97tOHxgFiTUv1zJXCq-4P3j4ElnZP3h9zRdh1yiHpYFkcydrC4RcifVXYcRPw4EwWOehrxHJTN1FTfiBe6kCY7PlXcab4AipudAVDiD0VFqmybkd2vqgNX4DCXd_qdcB2liI4sFJCAhZk=w1684-h947-no?authuser=0',
                'https://lh3.googleusercontent.com/c4XGIamWtQCcbnV-xoN1eOrpraRFLsLZeMOzzGx1S6JmcXD9dxplfIJ96nxH-mLAsqSkijZLEXeAumCAPyZfCuw_hyW0Xs2tVI2zJucW8abDZI3bCHxkNDHHP0NfMMyOYCNQ6A9lzSqQVX2DPZdwAlFXt2pRS4ep7o7lNr520YGFB17jcDuNXQgiFK6rIIlj2ANNlG7IBWvwy020uuzinFvUG4SpJykbeSblyGIztddpFRD1WGXZ0R_AvxBaqWdgNjaXEJhKiNQMNnnsIz5ImLB5VERHrj03mPLF-AV7zK4i3RFQPPOrP79ytJDdUHbAB__KcL_LM3Yi-yZaDO8SnkhmfNpcxX91MjjXlu8kBX-0roBgxK58FbYjeYYfRezQs_4y5qMF85LjGcknChYeEYmEEUnpBZIWbjTp_EzM10MaTffsPcKQXR1k5dQsWKYFV9e16YISJdH-GizTxxmovexYHTLpww_WQ5erm-WaQiUNJtYHkAjJjKizgpmxRclcbaLCc9wS3d_9XPGP8reumI7gq8XlgVNP4tCAMy6UpeMo3d33zrA0RNfNl7OGAYj_a-gbr2l0yBT_EA8fDMf2zHKh4NuCRAK8dKwaOTVKrDPh6kzMghzUPuT3FrR3DUfRsbkF5uXqOYHNgZ41Igsa1mH1L0gkxSAjritj_yYsTtqjlZ1TAcGRVX2GSOh7Uj4V_Ps_ptmFj_qJaVlJfBK2Fvo=w1684-h947-no?authuser=0',
                'https://lh3.googleusercontent.com/Hqm54vNCvKSOizX8B7UtJMKmcWUopy-m2iWVKytOGASVPPMGm0L61gJvLRxRxRcB2lk8NRUF-RYNW3Cw8AilUOdGUlNDxQURhUKbUpuOQ4sTDTwniRk1WrRs8o7NLGYMktrYLUYLfhFUVpGmV92kn-mltCvQGi7uCgn4Wb5Altf_VMzLSRhI2VXZmtXy0H3Z3f0fvpP18FphykmdXaOM-56jtfgxtx1mL7qnTmgzNdpcV8lh_gxIbVmcV3wMBi7c8nf0K9axawUwY_Zb8TcfAuKSYJS5TpQjpiu0s1rFjoPy4XPwpWMNBZYnqWMPmXcT7HTboRFLBUDKKfD5NNuL1AAQsoAHL9jmzRounXidb4BR8cR_4hGd9vNpPYtoKMIQn0Go978nN8NEO_1B24r4DY617Ckh5_EUl9rYRV8JB3ZrnAxtvtThx_ODQgmKlcd8twpmwXrzjH_pra4qd8oyJr4M74biLbE9x-U8aiv3LmMv5XiwGXXNlnGhRXnUqNt9WJPn4w0zo2rXB-kn5ExJqAZVtLH8nU8PvO3YIIESOJDfVwfbSuMz6xWVjwgzBxINZlUTvjp0nNYKIQZ09DIR-IYkwxfdM8-LM7-TITTgV_qh4qlrc2TupWxAm1i4PLq8lBvGbAlFz8P9FXVUbSI6lNeSmkzUm56xv7-Djl22fOewEsB2wjHvGATrRN7ICpuvnW9C6RUfFDe4q1NZXNF-JPM=w1684-h947-no?authuser=0',
                'https://lh3.googleusercontent.com/nI6fwgZYi5FSQu2iljB9nCPojGw-SO02HWUxkfQow6Z50OFOvnpTFOdCXP3HgDYL0vdbHZ5lxlw7wEhE3AbbCHIWEhBvCUkmLCEk1LMxgNWxvJAJNB8BkMP6XR-CqkBLzFgE8bviUBwtmvnFqh6CpMt_qEKLKQ2eeMHD1jmXHTvFPjxXBchGuy8s1AVTUONYpI3SvHmUMA8__7Z0wFL3zTbnw_amm1AR60L-zYW04MDIDfFuZLOhkpzW7501IveMCT1GBeghEoWXZ_R81R8cOa0fIwgyXXHl5u6ZZLcABZGs5Z9w_SN36sLHArKYlZEXn-G5NtA6dZzKJzN4D2H5Lyz1dQeq5fsS13Zp1b4GA1ySYhmnp1jAmiSZj2so0U7xfjvEJM4UC5gAO243X35fczml07SejMUPHt2fQhTpo9VGyo476vklfbIFR5sCmse93ET-jhEeCL39dWKIM1Gx9F-gpvUVKreEyTEc-DlHgFCndqNHI3pXJcO_nyPeAPIBfStnZHArsg9B3Itr7i7Fk9Y7Od62tBlsABWrs_qwJYQPZcvPcqp9N4kHOoJw9zeoVFuRf65_8hZAlFdfBBfnkoLC-T14Fb3e4G1y6yReX-IObEQ_IFsoXwQEzCEApOKPRz4m6tMzLyCvsgCU_M7VVCC3YpQh5n5AxD-KoyuQbNHNoCwfkMXO4FSzihuf0f5LR-GS2CtitORIHW1sN0B-rDk=w1684-h947-no?authuser=0',
                'https://lh3.googleusercontent.com/ijhk52WoQbKOd8SJPVLE-u-u5xoF_SBKb8NNNKFLnN09ppYT7XKjHYe5wybCA4qeb2mplHhQ7rMmroZT9LmJ-GnoSFwvs3yMkHKkyskn_yjBECysX9hPxgvAFPm_2-Abvc0qHVpLyausvSyYriITsn9YZICWgDkYX4OmRSsXfHMiBfO2Y6RBXfqRQr8tnbM7Of3uA2fYtkNHDsLRiDMZ9yQlHJtG5j_4IXUMC-HDs0TExfLQLCxqppWw-7YYX0AsPST8jORx4-gtx48gLoATTNhg70hQ8ENrpDxWaVGhzZN3AFt6snWpfDbP2KOU6GGrCj-lWo0nwDN8brtI6091lvDoYjoy5HcoOddbl0Zl2Wkxhdojg_rhxchJAslPuIqkFXG56HvWihdfbypiZnF8ZGry3-yLlAqOrIsQSR0MO_d0JPe2hcjn2FGFtVzrGWnTOI5i2Is9cz6crKGdvdmTA455BBYa7PGObkFEocH7hi4c0_0CtIBDsBCeCOX8NfSWLAk-8covPQdGRY4BffKrEKmjMGLvc3vV6XkfxX5qeM-dpTpfpcZC6Ge9tqN4EJSb0Qa28tEG86V04aq0k4eMyJnrl7-yGA39By-ev94GWiMah4oxNuPymVvqCLQwldC5XSkDiFyU5MKcw8f02cKYofFa_S-p8JjoY1rYTel-kZk6odBPWkPgfCEkfR0qyTGxcIFNd55PC5TvVZRGf2AMojw=w1684-h947-no?authuser=0'

            ],
            title: 'CodeFever Blog',
            caption: 'A Next.js Blog.',
            description: 'Personal Blog about programming and web development.',
            features: 'Next.js, Tailwind, Markdown files, Vercel.',
            links: [
                //{ link: 'https://www.google.com', icon: <YouTube /> },
                { link: 'https://github.com/zoug86/CodeFever-Blog', icon: <GitHubIcon />, text: 'Github Repo' },
                { link: 'https://code-fever-blog-zoug86.vercel.app/', icon: <Language />, text: 'Live Demo' }
            ],
        },
        {
            tag: 'API',
            images: ['https://lh3.googleusercontent.com/I_f2_H-L7pQOrzMp3qHenOJQlhaZX2hj-3E9qHlfK-eNj3gIR65UFrZLTLNJ7bKDnMOcwDEqfty0_1cESItJnNa8-Fur7L2hW5iTKgOwgOvjeVn_7DjaAol6XPFX2hRQSSjJwubx8vVMW00qg0GuzDHCd5NgFqIuxzmVo6lq29PtZfstANfzeLS3b2Cshyj7ASZ2hERYbjcqEsygCeazsIGt1AIAk-PWO2yWnSgRZHGhfMnSclBFiXjiRZbhAUMU19ZvER6D2eSlja3e8EljO0OzkkhW29mBK3uoTnCchqJv1Kaedx8pwdauM_j-FnlhekanNK0zUstaE5py_fgZL7P1q0LVliOOMuLVi3GYmJa6E40OVKqGWofQMEsHdQtq2SwkKXh2OpTNFE6oTwL97njqUbnhG_DG9omydxuxjpd66j6N9za62C286dzrm-VlAsdRxinHy8Ej8aozIWZMzOOLGCSrus80l4DQfbL-GxhuQ_3QpxlgpyoR59UGh3wgBGBZv4F6cdpZG0r4HhjSQzaYHimA4gqo_R1dWp3nlv_GHW9_3fA3D_3FPD_RxArHayQ2ttxzf_EinsU44GsHBlEcITRnqZAYYwaqCi6Z7wK_fFfkgRjeq902DJ_I6dtyBy8zhGXJnEKqm8LcD5o7AUlSK4kKzF-ZIFtRvF6P_LPzhxg1DkgJwXxi4lwiXZR0p-F4R71rMjD6n5MJXNWmeBE=w1684-h947-no?authuser=0',
                'https://lh3.googleusercontent.com/KPIgMBNanKJzrs4BsAz_f9BH9nRoXr9DdmwCHqe1UTLasPNLft0Att8prBkrinxcIwtdSMKnUueRluDMrPZNnTe_RK6mBxm4QQDG-v_VZIT4u8lcwVNpiU9k3vwA46zFIasWXukPrb_mGa9TEAg4OmehGKC4WIgBmFPNT0talCshVF43htHLa7fOhtQosyADRtfB5LkF4s_SgttaBKjgXYG5_OPc-NVOXilp04TCDuUwIQhoHZVXsfJQ78VDtd61dHxmbKLu4lvXvaaxS4u8fQjn02WYQ7MRl6tZLlDQLdeLwS1p-CMKrvg9G-sZsDFaXLeBm51QUXqsUwxP_D2fotCqsh0lvPgPR-nABUuzlfyFvkGaj0rZKxYP_W0kQDLVDGjUD9aWJelRr7BtjdRB2FtFypzb_NhUGulWcOh2D2O3s-gT5zzWLVg0nL-MA9D0Z9SOPi2khhTt2MGTQn3n-cEIpqqyAsFulbm8AQh2xe9H2qMM2GwU_DacSG_EbqjvcYja_6m_PtOy8zQbDtznpY6rZKymV0ZgPU9PfSMIIrl0kOIa7CSJAEGebUCVP6jP0zVJJcFHMA9hESh2f66-BJ1qd4ozQBDYpbOgAPmGT-gUOHMIdGMUG6VvwAyS3eAPRf_2XACbOXxACkAVuIbojvcVpp8NpEBpIK_pfBbDRPeHx3IJoGRzSeJs-X_8TJXGthDkDyG2_M8ZI_ZGh1HLxcU=w1684-h947-no?authuser=0',
                'https://lh3.googleusercontent.com/i_MTgNhw4qD20UZ3zkuW73qPYvvgrakaZ_1SQhojeeIs2X837oNIXOHZI0T4Rr8yMrVDwT_hOktlVBgnog4INDtr8qjSkCWSOAZH03jvQJYX0V7on7z_JPWlRfdMGPni7grxiXormN2hJhAKX9FBeOP0bq2igRREXsDb6LTuhFdMs3ipzBVbN4ArNXffwss2UO3JOR9oEtabRN7iY7w7HCgpJW21ZRzjEk5aumRQp2NHcF4I4t9JzCPTRHY6QGspiscBfwXDt-NlS010YmTuzpEVVXuCxiaMkKizubUfknH829LRCiBmPcZlYl3Qtqlm_e2Wfy6EH3WvTxXHobh3yQImTNuvKVocFLilVofQntDAHC_IM7XgTqiIP5CrS8IKO6uuhkSvOnvE5YorW3H1laQjPXobZ79O3PnReTbzTPYKLrhVmfkIjYBk5TwjvmtHRch4CjRrjqQuol400klvkuiujgbU1wysQ3yEdi-jO1X04t3au7BuCqRtJeO0pwsb8U-Ah4BDqNbxhIWu0lTh88LxOP2V1zFyrLcyNBU8S5Ux7vcyqAQ1Sc_0O-rE6CVBjDkiaprK5ctrRn_uCIO4X3nKIcF3_cDlXSzK19iFo_zbWs4gqGXqTkO8Apx3HV_fcL9DoRj2oydp4Pb62aJ_fSr4J1UEiyjo2ZZ_BN7TsfEoRD8Mi-1sB3zbnvyluR6D16-w4o0RBuHWkrkChwpuQqw=w1684-h947-no?authuser=0'
            ],
            title: 'Devcamper-API',
            caption: 'Development Bootcamps API.',
            description: 'A Node.js Backend API that provides a list of development bootcamps in the Boston area. Implemented features: GET, POST, PUT, DELETE REQUESTS, search bootcamps by radius, pagination, filter search, photo upload (to local filesystem), user authentication and authorization, JWT and cookies, different user roles (admin, user, publisher), password reset, admin CRUD functionality, Security: password ebcryption and token reset, prevent XSS, prevent NoSQL injections, requests rate limiter, HTTP param polution protection, headers security with helmet, CORS for public API. Postman documentaiton creation, docgen for HTML files creation, HTML as route for API, Digital Ocean deployment, Netlify custom domain, PM2 process manager, firewall enable (ufw), NGINX reverse proxy for port 80, SSL installation with lets Encrypt.',
            features: 'Node.js, Express.js, MongoDB, Compas, Atlas, Digital Ocean, Netlify, NPM packages, Geocoding, API security, Middleware, NGINX, PM2, GIT, CRUD.',
            links: [
                //{ link: 'https://www.google.com', icon: <YouTube /> },
                { link: 'https://github.com/zoug86/DevCamp-Node-API', icon: <GitHubIcon />, text: 'Github Repo' },
                { link: 'https://devcamper-api.com/', icon: <Language />, text: 'Live Demo' }
            ],
        },
        {
            tag: 'React.js',
            images: ['https://lh3.googleusercontent.com/hVSZV-kzl7u_ryeRknw1YQEpZk8QHG1VK6xRgNPAMBJ-s1awIH0g7MQLj9ykZnMShNTJn6gpDTP7u7AokAXliS3BGF1E5O334L0T0CA62MpSGe6cFLi7f8fqT69ywy0jumWRmHH7eudied2-10Z924oAIuYlvNTRSNtf9AlctFb5mlGwm2FWidpYsOZ3buhMScldm3LE5y6GBU9Sjff3TmNuorlbHwqqbTs6sFIhKF4Dl3snspMT8z_DysS2nI1JRXbR9_2ByywILMQcJHq3-d3BRjiYF5IF2poqVrBTA6ynKT3PRrIUfLf5bBydJ7seWe-1gYVNLThIgQ9SHdLMA4_lKXD8zsmtmv9g-N4HPhC0XOytnd4HxM7ZdOhkKKYbbDB8lowBwQlN6eb4xde4Otb-qqLLIDf4XEg-xR4x6DsrDC7ssvd9RzXATwPfvVDIXz3ReScQz4W87rMMPxRdPdNUe-DBDlkAbbkpwUV420N8LNrt020dlaetKMyOVPbsf6hdWthOQyUUdl_VXWFMDC9SapEgmZAnd_wC6haqM9sdxiqhAkNuVS-3htFtXm5hnFKr51o1wEQxrs7_ZaggrWzYIHYudpfDnTwrb5u0jzhbuF4zozHHLUttu4_eAKF5H4WHpTeXdAqXeKvtGqJLYct7JGo1cgRFw9OjSViz6Z7mWJYo93hVoXPvIpFiELiVlYgfOeG2oN8WOvPonY4HjjY=w1687-h947-no?authuser=0',
                'https://lh3.googleusercontent.com/DpE76HwK1bWNxZfloWqASx-AkyXGtSJhcSec3mOCelye5xK-Oj2Xe8-6-1rnXK2m-DeAPJN3oeChl_BkBYEJ7pVgETscbVc3BeVY0mV3xtUBb1RmzSJnvp_Q_z8wCwipFUv-LqrX2hn72vFedNZg1kfndC3x7A8V12wlx9xERsLSjh3N6l1ZEjRfeBOi8_FFf8pKObRSbBHp4p5AmiYthrCKRP0f6Jzt-Kkwh6cSFQAAypEbVvBTDO1IVU_wcFCbAxSIJJodhO6l7X8E4tba1hJU6Z_x5zIBkePdlHO-mWCDTNZIvHMkWMX4NnKWsmfjt6KzLZ7YmaUjVkRypc2CbxIdpWc7Jl2ltK_hA6hLxXS2QbUViyefx40gZiAj9qvL714CjQUZXtgO1rQCDngXe237hFFRUQZXB9VHpmnOcDtf_NOHQOW8vGLaizFNDqqc0u7N08HXOx8I0d9oD0Dd5pbwbuLbSNqz5dcuXvUt1o0wtItWQDjDnOqaQwM19ITtE4uFWiLioDE6tV4bbx8f6IlYvtwT2ZfDVS0pVJnXgTYfFCtC9fJeDaF_C1xayLUuxGUN8iDMf9CVrUCeb3nZ-JTNyxw3zceEZ7dKd9omQqeS3B7uyCotKISxZ7HHBNn_3ZuvURnN4S1APAY8ZD0BHc31FmP5J10SAzPTcZwsSkcsXEzeT8GCl82vBzJJomiVYMIFHnFnDJczsAPvINTITVo=w1684-h947-no?authuser=0',
                'https://lh3.googleusercontent.com/iL1Heufmdqmm3rbJs38XOBFs9zekljOoNWmtw2NKsAB_T3AHBxDB8Zyn88XAavMsK4WvtsAY0aoamHNo23hGDQXQmeduTl-JhHSq607vv36F91m4wblJNFXyFocpfAMP-qzsgRm6ikupVSDhUDX8rAwKWWKMKQbVLAFZ2cGWX7FkfkbkC8Pf0OQovsuLZXd0UswQ2oAjYMixWyV8Cdjl9QRkiF3wxJAYT3O37MYgRKODYmyLfOADP39XGg54FSwhFFEtpUK0iT3uPlblqFx6RLG-3eNxsbE40HZOFGRmpFrFAs-8jWHhzWqXrWo0ySVQvAdHK8KWm6kttx0bJWHTlu4KIy8c0eHmDUdl3urKtXqERdiPx5rTzPUsXdQJy2qpPc9W0dZOSaWwoLtKrZKO3VmzozQRAkuaNYj7hnqB7T7mijFnYFz1_q0Sgo7iV__-lECmYWbe8q8ZfVEHxtZhnrBeEBZsgb8MG4MGr3KNBrB0XoXfy7JyO-LGKcwH5ZTWQwQBQuw0m6BDFc6thhkE7O4LpSWpWMybwK4HJLz_gEZeeKBpZnkIoOYGoDDEIADGNliwqjWq1LRpR8IlU60bhljIj-g0iepSjTrPr4cvzjJ6eqaQCvSAvb-dd8IWdQ1IyRmGiW8pN0RjMEQCA_c8NooMWOSDazXEI1MuZTx3hw_NcXf-fY7xaa7gemsgJBd4PJRFiNCuz3FFTZxc4zJRHZU=w1684-h947-no?authuser=0',
                'https://lh3.googleusercontent.com/1fyITPOBF7TKbTgAd-8MHTZa5jSaWrujmThVPdkjgLJuL2nF0KU7qqCLwqspnP2ztb9GbqvdLo7lm331u77Vg4JMnZV5KGJLVVddtwPn_ewm5Fm6ephMXQilxZpXsA-50W67L9ZUvYk3GmnaQIAjHBQUCkYDX9cyIVkFT5MHywsMeGAonUjEMUCeYhkG_0x0kTXHhGqtyxLK8XbbRN105pqAZnAwBewyrDczppjJOdYabFSxfbRz293oA4PRXKZpHbGYMa1SvazMV3cB2GEPxNT-LWFUHL6j5zinQhCpokjuOipnMxGZkEE7Ddmy-zm3JCvW0TMsmsJmKznaOC-2Rqil-DPAemtcJWzKaGISuJrji4bGwGRLpXLlu2qk4zKBlAd2xrkV5fPm6YBv4xFk7Om5C-zvl7rxgJXHxhfoY8zGR6pk9NMAsVR7uYmJBGcToeJGYB8YnSi8NMskfBK3HXoagmunR1fWtNj1T1IvYmdF2pTDE5LwFAlqmwmhy9vW_eFidIzWGbnMeAidIG9ob0E3iF7wqQSbazc3YnCMyqCMOcQt3xRBJlVzysHpWa0QeMYewGHX6dJw80VMXztdt6ekVOHcKbQlprcCvVhlTjgaMWdyIzNkss_p23FwKGwntc2yxXbu-gWtrLR_j8Q8wJGDUM7q6SD92eXAws4rR5F0wYoBR7WTe65lAf69WPRysJFlhYOw8_mNsKkfCAcBTOY=w1684-h947-no?authuser=0',
                'https://lh3.googleusercontent.com/S6WlW1vI3INsWl0CMyVYTgtkWTtIpGTadGsXbPUdeq2OY0ooXB0LACrq9BekOgqXkEdO3S8LYZHT1FhZgGY3L6TFE962M9kZoprS6D0sekajnqZlzqIWyRzEziYb6hPkA8nvmfCcJLkJzxwURuahIwIOcQVpSaYA6iaVoQMYySJap2tOt3f7KOUWPncqpQlNTr2DGoj7zOnPypq6zJPte-KRPdrYiazptGwF4xvc8IVmDM4yggfoss18MOUF3v2Y-lGVor7D1uJpvTxVBKJMNzvGnbAee0OnyKUuX-DDA80YpGx052_r3Tz-svZIuf_CBAvry5l_Wgl7oWfWU0JQIXu-65TaGjcPnHYbhqY2HKkyAuo-2Dsss97DsELlLNtOsAyshuoo87B6QJu1ROK3pN83yyttVIfnjW9bCJUJQULXt_616SS_JHpdh3k0oCXjEVvml_wVHSbKFgv3e20g6bsiXHReKckw8TF4o_QIa4zUhfQJWtSOMYWlJmmreJol0gq9S63Jalod35EXk_GWqTyfXIIsTQxaRqja_xFofhB1fmloRSCNqkmkPXmug78PWv17WhuJvYrm56zBHfm-w-JS5XhMvCO_IPD1SoqfsX9UVSMrQFEd4eHDeWtTvw1Rxd8NfLAny0bCtKuKl1VXXYSWbM8gOs5v2m-OqcftHZOmuRK11V98g8qFmjITqm9Fvr1gxG_9X1zym0rPFVeH9WI=w1684-h947-no?authuser=0',
                'https://lh3.googleusercontent.com/_ADexG-dUhLZZQTpLXiHRlErGiSRIIbYeGi_eUPEokI3Ts5yQMlRzHbiJP4aa0PuHsejH-w0cljIRl8DoScT8Pc3niSl05Kkw-uGQ4a3i3nk5gRZZENGTCQlc2Vgeir5CGrq3M26mGT-GNlP1L2Xe1bwJyg_kc3yno6IRCIvS-lPSTDXtFxkley9VBLQhHn3gEkGYejILbletpIvcYGSJYv-EnHmSmeknuAn3X7TxPv8xgfBd7cNWKKu_8VOQ8k-OFq8poOJRSLB6JLDx7-w1ehqhKhfD9oklY7FPuzhDrwvo1S5hF_gzMF-CdLuzI-W9d5M2jIRPiRE8atdJADqYA4FvRJ-4Kann3nQRFLoJaghLr1axlRGJb0-MKpPkGFpUDlHz3SUA57uJvGomGVWeNbHnP2E1O79GmWb-0Dkl1Uqe5X7EIxRj90Pk9N7zkBBZazy0e5uKh9O17c1aMrS5TkyJ5Akw0HZNrzjDfhP2XK021mcQBUg0u3ZK2LMjkLT61WPudaIz4o5mHSnGwZvLBUOS2S_n8RX6C_-KTpVOoDTeSibyAed8ykC_u2JgNCi1VCuG87ebJ8GgetSga12Km5NGYXj5mIX214WqRX4-uBdEAeXwx0lyal5ZXLEXF0dVBGkifm75OP6oLrb5-JEOYtJ2xiet8aJIdjK429ZCNg9VHmUIfXey3bWatL9s5ZlycsJ61SsfOO6XLdTmcsmYdA=w1684-h947-no?authuser=0'
            ],
            title: 'GameDB',
            caption: 'A React Games App.',
            description: 'A responsive React site that displays all you need to know about video games.',
            features: 'React, APIs, Styled Components, Framer Motion, Axios, Redux and Thunk.',
            links: [
                // { link: 'https://www.google.com', icon: <YouTube /> },
                { link: 'https://github.com/zoug86/gamedb', icon: <GitHubIcon />, text: 'Github Repo' },
                { link: 'https://zoug86.github.io/gamedb/', icon: <Language />, text: 'Live Demo' }
            ],
        },
        {
            tag: 'React.js',
            images: ['https://lh3.googleusercontent.com/o1dIdTm2a-7_Uk4G0crv6D1a71pINbdthmEEgqKHw6uX3m8BEOv2MPLq74M5rk7-t4n3OUgVqvzQNQtuaEiimGxu35pAlYDhGvqBKIsrrpK9cu0khvUvJg4E6wwwzlCJOTudrU2iiwATMK6zKPgIzs8nqh7xJMFumc56tGV-Iw9BvoscuvJVUvzk_aIBjkk2qV85NEdQkXgOErGNSSC4E6VLOiTwiqzZ2LlhDHSWAHqVzBNGBRfo6DKhLbTx6b0ddWQPBd9OL7_YxeVrIrKcXnUjhnmMcMrgFeeff4lUg5E26eBFYHJolYtrtNL0_vd0kglBYTLP-Qsi1kZ8-oXgxYZgfgG_cmUwCXBdNC_HASZiENvZppK2mmGE08b3Y563_Vv0I8e_WJcm9VabVBB_BYIg7fk4qjqQa3ZiuGu_ngyi2JqKpgi80RjLYnjasbjRctzy0ETfOsImAVyt1M9xxHGOzsxFEbO8dcEFriWVsMmvsTUKeU8mk87B_cApCtULNZcn391y-hm6upWFOe5OlqkKu6FAiFlE7FdHjhe3w1PUUNkVy_is8WFs0jntiJr-rDvjLjNMirbwKsmRibhV5Kd6_nMS2KtZ440_LGTbA1pt_kger0rs-UGXBrRPyrGpfRlxnayh7-6r0-DN4MrbWNcJxwncbIOj96-ASIYD_2lfqEVXKys2ufD3mNOsDZZ9Zt0J6h4WOIrS7InZuz69qOk=w1684-h947-no?authuser=0',
                'https://lh3.googleusercontent.com/JKnjqV31hycEceON4Vjwvu7PiOTudTC0MfGi03mQh9s9Gh4_Qj-ULaScL-VmeTEboccZ_lOZY1kYfm9ZNqNgZHqWhdztsRRR_Z9yKou3W6k8AFnpfGOOq_S3GJkdLy6MV4GnWX0hiHH9ZReiUdElvr1bz9yvNMBb1e6cxaF1IKaoPveUjluKdpJy0Vtkr22BN8x5iUe3-ld7QicfTbf8oRt8zTLSrTjV2SCFbffoXRLn-vMibNFsxy1IavEHGGSl8UTW61x8A4vKKmaLBUHAFfmXtB-I-oMbJv1muX_0bAtvAnuemdB5ytsEiQSJLgOMjTTR6jOr1iVJ2bQbfED_Z6k9HwtyUZIpbwyE8NdUhyK50iggmmxQ2sz7fdDYjXyCWKy5CMtmd9d3QgROTycydBTuBpWw2m6TfVFI5s-lWtIXYpvA-YMKA0ckhy5-jxZnKs0YbL_DWRXDglFfIsQUOYoVpeSjXydYZ_i8j1Q7-klCQN3LsMjtofYfrsQzQBdClMCx3w3JgEtXaC4IToTEL1r4Jw1ZqmOTqN0_WIf39LAOXKID69fXJAVCYlUnLElDFs1p5g3o2zNL_rL1kggxh7ZWbAUMmoeczHu7FXCYj490tSEk538X4-WDNL68eees-9m44_WfQCkJ8FUHBDFOs75Vg94zIojRXOzVO8_GsJyjIK_LHYXAfDZqF8jc0ULe5ouswvCSokU7fvm3lO0cXRw=w1684-h947-no?authuser=0'
            ],
            title: 'ZougPlayer',
            caption: 'A React Music App.',
            description: 'A responsive music player application built with React.',
            features: 'React, Sass.',
            links: [
                //{ link: 'https://www.google.com', icon: <YouTube /> },
                { link: 'https://github.com/zoug86/react-music-player', icon: <GitHubIcon />, text: 'Github Repo' },
                { link: 'https://zoug86.github.io/react-music-player/', icon: <Language />, text: 'Live Demo' }
            ],
        },
        {
            tag: 'Next.js',
            images: ['https://lh3.googleusercontent.com/CIAaeimqxV81v32olDSpeKUEKWdzLGruMP1oqsOvwgXHCI0-f9yfj_OVk88P9soDaWCpOKj7-Dym8NNhnmi5tDXfHYg26qUQns39w3t4v9dJvGra1Ye2hm3dtSIjXGOfhVdE48phf5HMlTDPMoKAkniwUGNap3HFznPvgbOCDRJMx4WCGCdIxFAKUO8bvwV0KmOcjrfa0qUOHuWVzxbGi7G4nqDf9064vY7Spw5npD21Yqyk7bvvixJNJ6ss__sTjJx1MUHmVedML7D0nRpQoKaQFIRF5UysKGf9t5CYcwGdtO1KrFLXa4ZgIiu5Mp1lVgfV72TSqLWhny7TNXuOUkcrVdMwrna4zj42e3l-kasGmaFUQhBqrfJfm5P79mGEPKFvnm3ObQyWs4pRB9MqKqenybtOdQeNXm58LOFg6olzsc2ha1tvX5g2ocUzgIBsN6FVKFIrWLJ-8nPxAxtt5u6_QY21_d_VZ9XmrH8EgOF4qHpSPi8-Ozd27VAkPVbSxmGHEuTxDAVd0vcgGdejkxk9xGeojasrxcXqn1O1v_t4DBtudGqWmtdy_x4gV4Lu1WtYkzDyF883LS1vtMd76x7tkph5PksbDACkmYKFoE5Ybw6WUGdhSYIBIP67pZNnUcLg-jotGeKM5aZBcqqWm6ZlBlPeD748tImRHYHu1T3Uc8J3pI76AFWK00ZDSJvrZuZFmPeRbny6v1SwMovCujY=w1684-h947-no?authuser=0',
                'https://lh3.googleusercontent.com/akm9em2K4z5Xn5Khf-dy7IQW3tWFbJY-IiDCtoqAcsQxgY8-ROhX-7IaacghpPgyL59r-QwvKQPN6RZfxnoZAC3Y0RMTdruXe6-pOv_8OMcXhDz_VLwL92FoCYlXyBq7mLVHS2dGwv0W_CAQ2xKA0mAwlnGFi01MyTGAbOUptC3diH0ZNZcOlkRFlwdbbQZ1eXHcnEYcbOB4ueoQfL2GyaTy4J5f6MZHj-5Jj8TCB0k0ikRPEA-omzv4Q_hJnfNja62lmDfsvNyaafY-1B3AvQxobwhhR7JcxJ2ofkOWMaaReQcGqeP-2tQR0UyIbY9Rz9ApmCsJZR5eyVOl2XnQwvhpvF0ww5EusAWZ9Q54Ax5kC88cb_96guO3oeMpkjsm3JXzfxt8B7Oi25_vm4Tb1rAtSNX9MF_rGHgA5bEWxhDOzjp4Z9mAnGN9YLAkkenCEQ3MZreyO9mg6aa-sKxmDLR1LW-WdxYtCGPf-q8Vo2Ms1G9-8DuR8uUqSwCrhgDC_GKi28jlFhDVYc0NBk23VOFo-_v3cDImvL1kNCCx8ukwVQXJkG-NOMX1_L_2YQ9s7DaSGTFd6nsxFxvLPKMzyAZokq80jtRtMyn4t5x2S8WEqQWI0e5ZYGk7pqIs0TLBi_EbDChWHnfC9FGf35lGS33nT26NSClQ3W0c3P_SXKt5yLqMqv-81gaET-dN025EWVSqsX0m10L3YhNJvd1FUYo=w1684-h947-no?authuser=0',
                'https://lh3.googleusercontent.com/zGxPz8qXzriw_aJS852ZM-OCf1dQ-SqCDdKYUJdCuLB0gwr5jN8BvSL-ZivRxxJZrGLRALZ34Rs9GBPoqITpQLjSATWpTPZK62gkz0ebBC6FW5HJM39FLYN0CytSPqPI2PcJhDKF7z9ddD984rDxuD97fa03Pf2VXoXdHV3kENmsomCRBhg7yno2yXkv5Lvx5yWLwrykyP31rH_Ehis3LxgfRAt4yQJtlSoWuZNxV4EdzXAwAFvaGjgUuDMSw6XhWXeZJEVmRVD1pZF4MM25jh9DVRHubyXRZ04-brBiUx03Dc66Nok6nTOJZayo-xyl_2Xs7hgMYq3fzKfNNU7FpJPnmcf83LMBGpEe3fBXY55q5MNgTLfc08nuMJE5ZaLCRfqOH4tgwPyWTZa0zKtxLahfNc0GHNuMv7MdmpS3qyUEO34RruzyJ3g9aK0uvABci5RNGQkZ3b5myUSOyU3NbYuGfhYKBtILl1LgfbBzc2fcvG_4A1t-BGDH9HimA-2F2wc0tILRULGZoDH5vhtrJPjWTQOQYbVmjI17KTnrsKTe08TERGZeagxnxBEwTNR9JrsYnOXKHeyO1EBFW39eETYyV-4eh4YPbWOCCGm21gMBo84u8gd3qML3N6FSlzgpx48P3zXufLIoVXwSU_oSbp6P6hFw2RQI5mOvkgwdOVqysM5J38M0uIShuWKFtC1lvFryeaPDCgzB3vc94mTx_1o=w1684-h947-no?authuser=0',
                'https://lh3.googleusercontent.com/WU7mI1OYcGP3ynkqzO__BeRVKyX__NZT58PZBlDNDMO16rS3iWb5kic880K6y9clVi_bmMJr5pttOfXQsKGxC3E_6UP1NkYWv9YJiYjqkGit-8xQAw6EcKg753K_tmL2Kxg10-Yx3chSnNHqSzAfMBvd5_mnD-SZlMOP4Eb_R79wgD_-S97Dw8-08u_u2h4vXC7j4ARvmbLsJ-s4kSlZm4ALq1eoInjDFIpn8Cp364o4nb4J3SbtS2eLetYGD5-Y-Y_Gzr0Iy5D--ZYro2pMQ6w763BUCAveDzmA19dR070lsa0SD8ySbdpIBLhE1qmtl3xzORPgHMLsP3yZPdu9hcExdOr7wjDtmf-D7iEFvTxYExhxhoKpaOoUWatHRsDgp88-o-pUzsy_DDWzEldVt30ZwaExncjUjaaBY_YdvSfDRO6r4hrEjc_GTkwzz_EekvU9fpbrqXMfhk5kxQGIaSU1V5ndvrxNNrSd5IzjuA20iGnEKqCg0-uYIU7bPbjmmso07IgWy5HL_4rv_U7kKy2-45AVtZn8afXEJp48xSbmWVUNes39oJ9xEuBILvTYhkyAmHMgyhUDftOeeSnejM-EFtDQ9uiq6Dyiec3SCM6OLxtje_XcikiBAY3Gr4NWZxUUwHW5ARiv1xQGi109zwVKWQJNWOMEPRjv81wy9lmRZyg_e1hR2bm09i115IxCWLonT0pdjIyn6ZsYAwV8eWI=w1684-h947-no?authuser=0g'

            ],
            title: 'Weather-app',
            caption: 'A Next.js Weather App.',
            description: 'A responsive Next.js web page that offers weather info to any city in the world, in addition to auto local current weather detection and news footer display.',
            features: 'Next.js, Tailwind, Weather API, News API.',
            links: [
                //{ link: 'https://www.google.com', icon: <YouTube /> },
                { link: 'https://github.com/zoug86/Weather-App-NextJS', icon: <GitHubIcon />, text: 'Github Repo' },
                { link: 'https://weather-app-next-js-snowy.vercel.app/', icon: <Language />, text: 'Live Demo' }
            ],
        },
        {
            tag: 'API',
            images: ['https://lh3.googleusercontent.com/vUfPUcqwwYqU2x6GsTyBmjevwTmMK4YWRMOf1YAh5bcivY8yZsec1zhNALbJnTUb9S5AYaIr6f7HRe-nZJKrjpZqO3_kBWKNK5CXYJIFizyCu-YKTT5yC6Oe5oush7ocsuHZcAocgvjsYMzDmm_GqJDHBJJvXfq5JQd7_FUz0ZK2hPMG559_hlMOgGNLQWsFleaCbcy0Y7WVlhbgkdSPrarcXCcJ9qHYSJh64jTDDrTC1CWyaNKB-wUwdTQ3qPztQXwvAwfT7tpUX4lU5aS-luV9vXMFWf3ATqMO9W7atI2Li946wZAtY64Hdg-CmYfpD4qKmXuhhpAozJVKVXcpQpd_kvPBnLnzHYvuFTPFGyC1GkvuppjYOi4zXX0GuL50TnVfqz_AmhJZSMdejgxfRDTIVT5Pq5TZ2UgOqZUDtPZpD034QWjIJRfIS4KN_RpNX9aLh94eZxgMDy-sPI9l5X6gcMUNldDCMk0be7RceSQO8_9gR2eB5DcBZ5XP-Gpq4C3QVyhiOtIPEmVvjkT-BWgWOOZQhHd9GPXNIpYPypUsz6bYMtck26r457aoICabMql1efJ5GWuAc7ptE3nqwo6PPYPHsSB-gl8DTO4AUa-8D8xVuUr_ZwP0cXvb5l-_fcWzCEQIuKMSVc7Gze4qQ5nqX4vIxUBMtlBIMIr93HFbVjU6Tw7XFGXoXEOjOmdBMWYP7NMoGmAUDk5WQyD4Zn8=w1684-h947-no?authuser=0',
                'https://lh3.googleusercontent.com/mAbm_IsFiNjEKoTyyrBi0H0c2XM6iwb8MH1LpQRHoW3HEZzNBwBCMn5JFeLkEd26s9A3jc9dgEYRT7p7rDptiWmV-lj_WNk1h5Ddqi1iw3xedJ19Ll8O0J2yykVQz5HruXWJj8ZmfJk1hnmNhcgjVBFg6cTQeapGkqE7JDLZ4VddyIIvxsuVW2UCw0CaZBaPckoYr5r1nIvjqpj8tbowPW4tqwyEgsuSohYiYU_EE1ZFJZzdGkTohaMIKUnFeAmqDV6EMI1UAJ1-xnpahnyY0D4qqlyqWoof0uNnATkyIoxhV3rIxT_IRgo_rX8NR34zgyBcx708tIytahovdMc68B0x96m9p3B0s_KpiWxrdAjfMZwVJZrtftNeWj8UGWS8amicQr4krQFLx0hi6MXYPKtadN02z2WfAy091ljx9_YaRZ4VVh-TPpud_BMeATpQWwSrkUkDq84E22KgZqD28_0ck5qufS1OjBZ-zuWbypH-NIGG-0Mb_3yd8wLjrJKUIWKHrpQPNBWuGKv4aWeoPuY25IVNo-oryEtSwpblquMlJLOI-1tpwgBYYYlmh7gKof_fX1WroMJkTmBotkEJQcPl39wUIt6w8KyzYvLg9dl58oapqduKwZImsUUZU_Ip19hLTUYrL9Gl9ZhI6CPEQ_2Zmv7-Tlx7PIusoN3-tpP0vzTq9dQOZJlRUNhjmYod0ZyTSNjPb8pPkvD0kbKdIrs=w1684-h947-no?authuser=0',
                'https://lh3.googleusercontent.com/Czn6RTCUlPwmNt0Q0i4xe5jr45o0YK8COv2rOtHad03WRYtzxjRcDnww9U8s3seJA8u2um6trB5K8sDZOHdLvn2eLMNB3VTRhRdoccHNPrBKYiUHLStB4QXJPYaWuhxbbz1xQxlPdx3Thw-IBm8969mYgC1wLbx2J98ZVa6IQOKOuhsjGcm0uakYxPh-Jz3tjCZndG3j3umGVAC0Ny0exg0D-58VprGG9pzy3VI-RFKxUjf4QHnBiCKdntRtDC06SF1NAFJ5A5nQRVkFqGsLi1KVhrh-gLaFqgPr6G-khsS2qHD54KglFx21OJSjQB3auMyKTGaEd85hoMtAz9wKpMt-ElIv5l4Us206BbyRrNw3m9TZtT08IooQk8CgAu3922TBCnxhBISN7KgVU_rfGJyaZD_mV53LTeSVNbtRVRacapIJkfRgxOE70oPN6xAMr7yo7xPkiNYgWeRCyv-j-Ac6cpRQfxJIE5Ktb-ua5xmmYox3A43uR9XeLu3N9Xd-zSiClDh8U-0l0K-0NhZA8_p9zm3cKxoLgwEui89amiajwlyoD1y9Y16KE48ELfIaLXsmkJhoMJjWUBjq6wm_y9LPRKC6sMwZV6vA-kaqdkG2bY0PrgK10S5HRNB23vwyJeB-Fgiqlv0JOtiSUI4mqTBnAC3ctWAkkRKBcLQHMhZYSn0ONbgikqqHVLe-jSi59uIJF0qqRAEElXjmmokeoPo=w1684-h947-no?authuser=0',
                'https://lh3.googleusercontent.com/N_K_npwVwSu2J5y93iIKQzRjPGFHT04vJnaSJMgN2wljYmiFQBFg2_7QJJaTi8Zgl8r1gkzVs1wgq8Ghxrgf5b1--5-yUsomudCUEFMhUt4-8pn5uoFIcnPmDfTUN14FqQZOMyA3neDufKgz0IoZdU9GbGlzu536hxzXn8bDG2LAjwCNKehDLEdsb7yGPunZdPO5EiBPR57PmyhnUVSQAs1gMat4za3EE1ktnpvy_W9IW-xkuihtq8mh0xhRRbzzldJydeMgDk0WPzV6euTMK6TjInk1clEXOtvRQMjYfzEq5opy8-CeDmMvdOdnf1-chcy3m1vf-cZUeP81CeGat8GU8fWXzdP4_kFZAOelJQiFxd6Ql8RpNtHZ6ST8-uMAx3YtqDwkM9LsXdrRZBACEXTzS2KYz4uGR5_blDHUXeyD-6P5gsI7Q6vPb6PcTzdl4PNm2yicTV00oGoMy8ty221TPHI31Kfjm8XdkJEz1RqnwVsgKfBpITn7ZNe0oPogX-owag6dk3GigJPi1KpxK0ujX3v4i7s2z1fhscQOHPeG8MPxgfHK0s-gE8SFpfdyBtgZuuYRgOR7bSDMAAedLWHbtyuxlqjeIBa0XCgjrGdKlbKuIPVG3266UXKRIN02zdVfdyvwc_MYMI_QYi-bgmMUOkun_jOQr2OkME9GEI_no_3gt1YsUzzihh2_IFmm69SUsxQvmHtZ4F1fzFrpf-g=w1684-h947-no?authuser=0',
                'https://lh3.googleusercontent.com/-yF4_73Xzm5fIRxgo0B-wmVPpjkEjByT7ekXoFXSYMuJR-AWotUXNIjkubjcmel4xhxqgb4AwttD1Cl2M-622RIjDvEPn6lX2KY0gqpYtMviFlYWhvw7CfnlXygS-orkzTOYGQ6HdxKhBGrl1ubTdHGRruH0d83YsNGIh-5mYV0vNjsNyOFp86rnEDM95kroiIGI_P5ZBBcUPbH6tzcooq8lDaNvT1IDD_E3-jUPnIDq7jPkrNJEOYjcSqEu02cuyZOr9Assw2vaPzwFS-suyxSEm02B0AA5w2Cf0NFmJo0lbQn56slltffmW1P5BpgU-R5Bjwi8R83o8Z03Kd3lYgLXxmLXqZd80ybqZ30eZbk3YsidZRIu826WALGm95FYRXJ03asPNYrzOy-LjRmlr91x_jagrd-ZPOa5eMajsw3dmapnZm3bc_tlHd9Q97hEmuYKVZeSsTF8jO_m6pmCL5ZHHJXM0H23EGbtgV8Xn8RGPamrG_zQeFVIc8P529k8ypX1UbuKJGXt3J4cR-SFDsQ_OJopEGLJ1TZNoqenO3zBbKTgDav0LZacyiYpXNyZIERDOrby3ieMs9pKW187yVuy267qYMJKNFw3wH0oOS001YDxc2YPHjXXvpTjT3dGCO6EUCw1UIb8RQ3xspA7XvvTf-bpvlZ6cxxlYuYLTY8nx5jgwsiYWGPQFdJXwEi1y7WlAbNXs4_ZwhEQ_9FQ3hM=w1684-h947-no?authuser=0'
            ],
            title: 'Campgrounds-API',
            caption: 'json-server API App.',
            description: 'An inclusive list of all North Americans Campgrounds (13000 sites!), all accessible through a REST API.',
            features: 'Node.js, JSON-SERVER package, REST API.',
            links: [
                //{ link: 'https://www.google.com', icon: <YouTube /> },
                { link: 'https://github.com/zoug86/campgrounds_api', icon: <GitHubIcon />, text: 'Github Repo' },
                { link: 'https://api-campgrounds.herokuapp.com/', icon: <Language />, text: 'Live Demo' }
            ],
        },
        {
            tag: 'React.js',
            images: ['https://lh3.googleusercontent.com/hdHaATwAr3hd59OiGb6OFK_ZZI3Uu_f0lhsuGssIu8xuX9WqyWaoYlGug6tj4aVc4HhA4MOiiJNDAtGuCTXspL-eQuvKd29DZF-KQDVr-v1gHGX0ceXe-2sIuvCtjWEYG-hYzj9RBWrHYOR4j9aPadCXnlKCHmPany7tyvtoPxQhrfuRDc51qE1Mx9mgYABigW3fsdbajBH159pR6bClXkeL8iEFCqzRSDFFyssiXA8prposGfg9kN66cNsMUKZcqdx7ha21l5D5ccTyZVcLnGknqF19Xq0DhWbdnzy6RNJh-2cIVJI--aP-ZPykLRj8y0B5soMFvy4USP6VHE2XS3xeWJfLjJTRyfLiK1mzxNNycPzrpVUKE6e3uRNjKqB6q6t1RmXy3w3GhJA0qKiTdS0uihVmjfgm_dSDBEQz9ADaBVNKvW0NcM6wZ7-ISKpISfmFO7XnHQjyPg-0zGFu2HikAFX2Pp-m0IOx-xR3SFwf5fpbzgBoLhDvbJsRN4-C1EtpuawMV808cr-rc_MzoKDw0HfWAZyvP4nDXKuSIfGbv42OwPjqfJ_TrDKguyhyaxHoQDW_KW2DGpFUI42-EWf-upVbd8k1uvLZ2rTMNITZj9wxyWciZ0gLuyHxGSfQ45oUA4dHtZwatftYkFhnNY_PeC5twv5fE7DL0vWxZtUGXv9Y17Izqqo6a8V49UkowAZISfNafzr92RK-J8cVa4g=w1684-h947-no?authuser=0',
                'https://lh3.googleusercontent.com/HGMbDdWPpBCacFgRxcCLlWrtKsK704KX43Zx5QWQhKaQHggZ6lmgCbmzBJK7Ecl6Srv7r8ItWYnDJA1nVx-4fkzT6rB3_xTkvbYW5mDk5iLwTL6kwRa0FjsbEmoHKNl4m5S-xt3vE9xtDCbOr4R-xNaGCeEoEqqpPpVAcqYJEex1i84977g-ZdXMqjwWz9yC2TEZJ_jHUEUz0cD8AMWCzUFhKZZgUKwl-y6gI-g7fO1qXQ4HEQsJVRMeyCoFyqzmgBTm-VA8KPovAAtCp-t6VJ25oBxIWf55_z9EOoTQWC67YyeWemr283m3hA9pEu6FkwtrI9qUU-OElITG_63g1oM6V5cDIu7naZem3aCsb13NEExQg_rKYq8DfkSUtkwdbPzMUOTcrGDpB7Cq6iKhT15p8_sOSfILcSEhTeEKO5xS9Q97wmOsJReDhT97-qHd0PppbmY371T7IImTfLYVRtMi4i9yI8BlOtMrXOJRmi7qfT1jYU9iVSeU5uB8kiqZpWyjHXdxJAD6k8MwZsdyNhUIMinHeKncJo1yCDhIqV3nzIw089v6gzhyIP10HUzzRQovGV2DYnnk14Mj8YdlmMqs2LIDFdZc95DVQqmZ83_jxLgUsKGkCUmDgFeuP8Y2cRU5q-fJG02PVnuYaDUkvNeXX_7NsQdNIUY158P3zmVs6D3iaoBg5cPMkqHAnE7cYfS3_clNQ1qxF5tIAyn6s64=w1684-h947-no?authuser=0',
                'https://lh3.googleusercontent.com/9V2PT-GWfp4khwLyilW7UiNolVsz1dArOh_n_2bjMHSg1-ATwLmKRy2CzCyx6VwNc-HXxXxYnuVNWz1EObjYZoymU75GtwHPeucrWeJ3S5mW_e_9uQTgZt8CTzJpfb2DYKA7VcS2NNqT8Cy8oe0dwEFjdru_9JjNf-mwzPLcrd2avARPNKCfLtpOWu8onLvKxNgWqcN_IuWowv5K6Eb0rYGsE3Q6a2inG_8JN2h9kQWtgvQcPRfvPtXu-StnvINlhw6NpMHaPk0_WPknqvlRwcPiEDWLO3xTSs_UxN9lGnk2zgWRulLuyj7H6D399e6FS2USnLAGNXr8TRavcMhmAJ3goNt-B0KzVclzIgcR032tV2nSxCqb38JyfTuyMyYiNogq1GGjIrzhBx9Y-guT2_tYl4sPcdYL34BAk7mwlo5lZ8gFiFwCe4PytGI9wARngW6V5MsrHi0raPSATKwGpHR1MadxXZrSTYZBQT-01WoGvR7YCuiXetYBnrrnCFltLNR1mlcE12uiXlis_8WMPxOGO1N7J3O3zqSM1k-fF1shbuGTPRQg7aCIvvQ9YlR0kbRqnnikjrJz3LTwT0DQxmKJ2cZit3EkG5aHehUlFrz3EURxHw9odJongkhqirTmJdzcki7SBMqAtW23sQBu4wTrE1W_efXXyGLyFZ3dfrChwrfaPOHykXs4py4e1dk8h3YNKwMfYa76XEG5aDlep8M=w1684-h947-no?authuser=0',
                'https://lh3.googleusercontent.com/RD1Pa8diN-7_L86yov2pvqlJZGpkY3IATH8mb_EZd3jHTGdY_DVIktdBSyQtBXRse2wX_JcE0j6eR-4F9xZu50A0YYXNPUNZkqNyIOFKowg-VQgoI9rfN_n3bUmm4wDBe-nc-QkzaxpZJQiXFYCurZWASF_6UkfRX6mVnvVMXTVCUIvE1JB1_6riR9xsqXHFVIde98aE5tYpnrHzkzFaNpt1ikdZnXKeBglu_uYJk8H5EuMLf1gwqBqPUvx2L3goAvzgSfVt7XqjMI_qwwgEvKYchHNhJ19IF0sBH4ch0GAfT9W3jm8fk8Udt8yVpZiF7xmuDxKLqIlBUVxA60JEAlSfPjFdHWigBWqjqb7SgS5HtU6VfUx4bmhrSGZV7apphXrfUIFNf8j_a1soi7LRe_1o4sNR5o-SRRDPkFX5MLuUkWB4OEyB446OZScOm0h8Gxhr6szjqlVs3OLCpA5nWZCuTv6Qk0MKuridjL0SUThev3CPj4Yfkh6OYvEhG0Ty63aXINMsBwc0FYW7kqTekWbMrX-c22y8PZPDzzTXWCptaCLs9NEPjYzQnkVk4H0sk0r1cQgMaqSAarvWXWUu24YCGAEtYqL7PRxqXou1s49NruZi4qz0Y2jeCVy5Qw7KYM3K0SsbNDoFqubkUi4uQeZ_AHYEypAwbS5LxfmVn1xAV0Ozx3CKUU8gSxW4ERinCxM4FLTqM3Ba_SiSMwKMzuQ=w1684-h947-no?authuser=0',
                'https://lh3.googleusercontent.com/5UgtKqDt-w_PqFEwpqveFh9lL4XU8fCNSF08RxtgPstL7LIl5_TES5jQsSOE7d7sCLBMaeptG2UoMPaUs3VXZOwHEE0UjGo90IwvaPkg0lvHy6CKfVHPetSeAe1cmrN4ALrZLHPHPj94MFCxhddIi_6hhCqCzisvwlAak0P6K6z9Vfz2tFRGLWWE2e3zrnDejGiXVgCA0Llf-kX02ZE9uonaBcHsCsMRHqjFdKkIyjaAHYJXPc_R47GBJOp5lCRX4OuJLCbQYBi9CNVimBvQmB7D7UN_PcYOqciiDQ_pLbs0hvcjkeDXpst5sigcvAJ9fGzOipxSuCnK1cqVNPoa-vgJsJiSMyn1R96UhdgpumK39mzFrXHK1L3dTdVbY6r0wY7tpxuVAtBjMJktUiZl9McMFpiLJs7owxHV-xCwM5ZNqzM5HLELhRAz4aURC-5AVQHIOe3S_83lZ7du54GpmuwVsYZqebrrZl7VBkp0SmQ6n6z7_ANrcWIbv9jrElsHhyH2Iw26VGgPpHl4CSWR0IwEFkgzWSn8kGgm2yHfm89Kwj0dpI8wVM2pwnX3_wxI1xtzcKElNQLbjvGsefgs69taMqNa8QW_ovlwslYgZUbo--3QcjpEURMHgNAsotycNSRQGm3m3ikOOb_HKB7QqgBvI01Hlsaaj5-S-fPU3zQcH4rtewKVmH-utfdDmNiXKzIbLxl_955RR1qjry3tPX8=w1684-h947-no?authuser=0',
                'https://lh3.googleusercontent.com/4HGwiwHCEdieE-UINBzFV7gH4D2qquMR6D0nXxQMT1p-8g3Nfq7t_gswe0ptKM9jfd9oJLBTcOg22q7VZpevXRcY29mPUzR0NZ2uzcNnQuZ9m7zXeIH-CTRaM_AKug8gf-q0WvgMBgQIrpLXNn5SUNcAdWDA_qJLzvFxCxqjz0aafCxWe756iEBoLP1s3rHayI9BOhgK8qi4YlNPx3s1nlqfimbY7H_M7Tr3mPJYdBifE_kbS7yQ1tzMeZkImIw7C4NcEA1fkK4Mn05VUcrrFMf-IHYQprU_65TyMFFYTIcwhEIuyxlVBFvxDfQ__y9yWk28YUoPrRpUpZTXj29A2_h8dAHS6LOepyqD3P4HcQBVB3IBQPvj-U_HiF03e3ZOZ1Y9HFz6Uue1HXWMB3rI6UkIhJC_Qig7uPMuWWMEMqLhBKpdqA4511YjQU2Ex_li0F4KV3nipkX_6XxMmEUuWT_QsPSzspXT_ppTVhTh6NHlgZhoUoGbjG4TufOUCSfj6TP4fF8Vtq9XKgw4um3JCcSCmUskftBZgn1w-QOhVyjUGaA54sLYYOOnbz2RO8Ci1pUerkE1gEwbNhUs1y_uyQNos9XQ-5tBWzQ1P_nqcRsPYVNutXaSJnu7xP9p0jSwyqKCsYt-75Y0c4z40sMSqJdVVxhpzRTqd73A3O4RR81sHyEglhzxLT-OaH3GAJcZoMwrYnTBwYWNVpsAN1Jwp-o=w1684-h947-no?authuser=0',
                'https://lh3.googleusercontent.com/qRD3TTZ8WFRckOIJ3SKoPUQfcRgteE18GNIqHcP3S2GQNuZsTTansrfsdbiwt1nBBpRRa7YlWXTKfXdKJ2aZLlXjMsq7ovaLjHOxB2PI5N3gk6RIM9JjBHF8R6hEgfx1XCIjzjZAZtfzmg4UwqAc7c9I4C_ylgPje949dqoyHXSUrp7hkV9Yelgx0qfswwArLuYaIxjZjuyJED8b5pAjdx2mmbSToqFv-u8xFKjgHLB9Ot8Vxkk76LbsVcWqfKrSm9vhSUzSEwj7pi2hUPnpXgy-rUqIxrnhW8jq0RzgXCBfXRNgcRkVrz-ySp-Z0UWl4_Zj5e0NTPhlIMmgkxP7rHjSWIIP7_LnDAu_nueLTUs8GKevuXbX4-Mq9uisgMC_0Aup_GFMaaLMiSWLVFDI-ySrPULIo6TcWR5bMNH13m1AF3_q2Qry8cv6ZC4vvCs97QIbO3rirNg8ruSwHSBX7143dRswMzXMLDw-HLfTSNA7bt2hNmR6GOTYTJy56wc2aLXn-itSa_1by-vmPpw2ozHWN86gJaib9mpgKTdJJ4t5SAKmj9U-z_ukTinq8GZNU550AIuUyiu1h64HH7qwuyeHHCxZQtEz4wskXdUXOSZX1goeG1w7eE7meOYk9OW6Nqkn3xF3a8x9yaFkJecEwRujmFb3jp8s6vIVGI93tCTVrdId_gGI8aWLRytwtw4kguLx851rV4GGCO_CqSBktTU=w1684-h947-no?authuser=0',
                'https://lh3.googleusercontent.com/Qr_W-zq_pocEVPkTARR7jzszDmDGHNZZRjEOq6Rm3JFWCgWxKcnYewoPD0ZwH8ZKp6UWUTbKejlvUK9HXC5drjrrpxwvostlNe6NBl5xzvq6YKInqr9bU_Z4oZ8mvqT1TCbA6ZH2oA9Q_4bvDGsLBzZVPhEmx09AEN6_bNhIys9I1VVbBbCnXLvX8w27_p9y1y--EJsGCJGbtAbRihT4EhuooVQVWAYv7rDODzbRlZ7PyDpLndCbgxQxuTUNFWzz3oKab0sbJ5ltVrjJdlQWbOseAJ4cIQTJjt7YQL6yzlHLL98ANAE9Hps5jfIa1ym09nU24z9w4-01VrzBiV60sae95CeJ-dU1P6Eiml08h_nE2WuDdhjWRz-52HwoW0mBu4TBvjd1mf5VTgrdX5JaDIOu6iAV_GH28UPiyHqKcZUHW8PdLU4esWhujekap5xi6J7kBYDbOzkxZTZKANn5cWlJS2bjk7uWXl_rWIUw7RThYA1tNcrV22_u0mDIFxFPGb6gAibZmHmtHlPVSE3P2pBouyzbs3gcPE075mSk0mgFsD-WYg4cx1XPyrqjZLQW2D0z2P9v5ja3uUgj7o8osr8ZLyhW-CsU1obYdSbz_I3phkdMGWCBtRApfe5SwQW0Tj4lLkm6k4FWr8oa_Y01PmvwgIH4p4IqNkGRK70U55OIR40xkCNgaYXrxa8oI00xjLVH1RCUtRkVHbW0-tMU6jk=w1684-h947-no?authuser=0'

            ],
            title: 'Chat-with-react',
            caption: 'React and Node Chat App.',
            description: 'A chat application that enables room users to group chat.',
            features: 'React, Node.js, socket.io.',
            links: [
                //{ link: 'https://www.google.com', icon: <YouTube /> },
                { link: 'https://github.com/zoug86/ChatApp-React', icon: <GitHubIcon />, text: 'Github Repo' },
                { link: 'https://chat-with-react-app.netlify.app/', icon: <Language />, text: 'Live Demo' }
            ],
        },
        {
            tag: 'VanillaJS',
            images: ['https://lh3.googleusercontent.com/1SKUzoq0sUIug90v2tFy2cq8CNwcC5CubqyCxsjvd7pvzG7-N-ektHJEMg1dAPBV-4gu6RrLhXIvmSKe9TLdSW_PpAKOvI5DPHzDLwi-0DRSnh0LhjHCoBzrdsNS9MoadpXnM801qMfZIsvMK1UZBfQwFyHG5c9goGWrrlSNlPI9z8EylYmS6LB4bUYxRLlDs5o9NMPhn02b5Ir0oJAfhdzZSXWA749Dl0OB-mMFXOM-RhzeaCVPLS6Gor8F02cMlNXAWWaFju2tqJamWpvlXFYY2D_RUi80o0z5pW5w4zFe6Kl1AnnAMQI0oMjEFh_x5F4mxb8pIEnpjrXlNDA-gxvcDm_TTcb8NRoZi3Ojmpr9j_PbH5B9jZ5xnMIuf2KgUUHeKMdF69YTVDd7etsB4fwshmt8DZOseV2UGou1SkQG-ky6GTlq7-8YfX09h8iVLDTcnDjam0tJWV-yuXDJOSK7BRwnkjnCaRWbDE-S2lGRhudMrY0UoQG6Sqz3m5rICWOt45p8EH-qN2FIe4GhtGlAad_Yfd1AZYFKjWX3Siv49IgzXBX6v_53HcHXngrAzuFEtpVzMD8oA2anoQKjFXxocueiUhEcfqB8qmwR9V6a9ZyGv7vu46JWq5tsZ2a1dqZBYwdHL8lODtQQUzIjdXZ2f2chFJ0lxqDLeUsfeizFzOltsQRVCfUP-U39YsmCEajF7IcecErB97HlnDz0vC4=w1684-h947-no?authuser=0',
                'https://lh3.googleusercontent.com/MhzDIONzrV69NHBccqFWKwmxNtFVUc8lc4tPiB763uhhnP8IHSn6pd7z-AKv4wCrEFIg-VKARwJtcBgPetkA89GK9T4qGXhNYr2iM9jgxi7NsldQmPqACJWjbXlczKS7ibGWdZPZ6dLKJCBwF_wkpOdC9lQaULLAeUAfPC1HefUSY0IqJiWO7tce5MHMjkgBEimoYK-SnL5WPLD_vMH0xguYpCGNbyvagHzgUJ3ObS4EA1NOynRBcOK3AJUfovHXIevJaD6wMlwNza_YqbuV-qbqScfG6CaZesQJfQdJqcni0Tfvhar6uhPpn-zNS_G7Zs1nr3K5i6BpOwkR2RSc7HR23ar711D2OjEWk9MkTY2U0epNo06-RpUIY08PovdX08zqkvrl7-aklEcoGltu-NLSXQgsMG6KhUctJZZhLVHXgkkApE59Pvv33T39myPWXI5OGxQDIknHEiGWIFJhvhChPWp-7sZ-QmQ7ESTGLk-JUgnt7o24U0sGhKK25cTolOgpthCNe1aSMRfa_LzYbIv0NXcua9HywN5dJnsYSs_6AyrpsxqaiKoeIBpBYuuUgfauD9vbB7IdYWcV6bU0clBExERxW3V9XI5T62eF4sI_yuub_RtkUilWXFqvBmNDZyItSRauX2BVEPKiK7esrCyTqJDS7gLIzKwB-yAI5KumULbW13cfXzTqDwaBZWjJSJaaIxdpg19bmrVATfE8yME=w1684-h947-no?authuser=0',
                'https://lh3.googleusercontent.com/9XVpiH0nCMfYp70srnvmGHeT6nMe7rzOBgaAQyeY_8N2fHG7UPwfo-E0D9CA6ZnJ60rWbYjr_I3rPuO0sujptOyFU09n_iB5A3Eezfdo9Th1zs1UKssxaakZv4ShSbqWsqd4skkVmJlE-9Yz-BITch72b_Csf-Tx4yQ6KxH7t0gasKfEbq81S1Atuh53PxeI8LRdlbgeihE1UmmMZQGa6qRs7Y3uxZ4CpZNG7dvwelEakQ1f2hcnrVMQXsH8surp_fUwt-PcLQwS9kTD06FJHg9YnSE1wXeSI4Ser7cXfmWGvoR3Pvk-nfSQmTnRuIjaIC11vkkzwU3FvMXkQXEionUlO1wKGQSGDgbHWL8GU_AM2CfoXZqWEGwVih9QNKypJaC_RHAur-wrZJsq0jyQsqtV9TFcWnEHnPQreCu-KGB2WrVY72PlPVp9y5JtJJrBJGDW5SX4tt77nSX47J-r05uNDc-KMkb1DHE6y8Ef5TZVZf3PIZ5SdGB3TtaXoR-rQpGZHIhuMEegL_zxCOJEU-j9SSDUlHEJvJvRs4oScKwOmfWI3M1hdJV_5YjHkhCwXVIQnGgttzSp2D8Vup9xfVbIfcaFMkKxdes5k0qejIJxlYB7INIWS-uc0Saim9k1P7WLCh-GivwpBgAQ_RzHrrZqGSvCfj3tFGI9sooW-ZE_iyqm3d9gga_LnVh0PCQri93ROx6tJQAOvpyEhSMQYM0=w1684-h947-no?authuser=0'
            ],
            title: 'Mapty',
            caption: 'A Vanilla JS  Workout App.',
            description: 'A JavaScript application to log workout activities on a third party map.',
            features: 'Vanilla.js (OOP), CSS, third party map (OpenStreetMap), Geolocaiton, LocalStorage, .',
            links: [
                //{ link: 'https://www.google.com', icon: <YouTube /> },
                { link: 'https://github.com/zoug86/mapty-app', icon: <GitHubIcon />, text: 'Github Repo' },
                { link: 'https://zoug86.github.io/mapty-app/', icon: <Language />, text: 'Live Demo' }
            ],
        },
        {
            tag: 'VanillaJS',
            images: ['https://lh3.googleusercontent.com/6rL2NFcf2PNzQ9TZ3lz3sFEiSGSQpOqR-3skzm90e4nfvXGIFvc_Tj9h-Flv5-xxv54_p4D7bK7fjjm-9QSRlaFUTNfEHwfJY5xCm7ZKC0M86jyDTvglMoH2mZEuvlCD9hXgQJvBGw382cChjReO2mfgLNFTD3qkkypTL6EQddiBiUw5wM0-dw2edlR6eqoBq1Ysg6YvAj4zW0EPcB7Q9dXlmcNGjidsJ4GLTA6iFCp9s2ayHzzZx2fkP4AFdZgAXvIRPZoJGcZyfl1ri14FTVAmmi8PyclVtuK8_2sWk8Q2ojVWC-a5j3R2m1OSHeNYlYXcxegeyCGDdR0x6soQsP18qQ8W1-NsZuXzTM5PDAhmkyA5v2CwEEquC7W6pOewylNrz1BLrD-k7BD1hNmAmOfwW689OF1InsmXznfUDH6aHJRKLYNZ27fyA-B9rVxHQaooR8iGTWLgN4DnOZB_WlAlSc8HhtDwwRT0lIiKQEG3AsIjgJUpPfbz_wgozkE8bsK3jkPYaqnOedSKKHN_hicSmBdvrO_SKIo-z82MCwyI0lltq38ot1AAiTS7vyUJUuxJOCkczwRawPzzh_q_i5Gaet-dI44TFUGAWrxjHWubfJyYeuzpKBo9h8dsJ-BIrVDlQp2U23zkxgej3U6iv68Bh0pft4h1HGIof0Dq9VIC_Nr2Q1FefJtdbDYsS2sjBUN4XOcHPVyTNbo1M6JT2dM=w1684-h947-no?authuser=0',
                'https://lh3.googleusercontent.com/kyDXg1rLJWEIK8hQKVhKx1UacRYIkOyKDwiklmVEImK2Z-epSZkMoWYxD_H7JFjSwLI4fhA5bJu2NMud0vMm6UopU7CHeiw_8d3t_t3JTTIqE88QfANQB7lHUIUVBf4bYr1PgzDx4tekPW3INseuYyYFkbcSFLDOuXLUkwR0PpZvF33IkWXFeRkycvOnRxu2Tnlmb6r6rC9GuFxZK3HYwTdU-sncmG1WiogzOsMdcHCrnfPvNs-1Ze2Q5mkUQYKi11HJL0c_H9LgbzmJ47ciymA-M8c48mXIGZF7OGWDiXHiu5yPs_5EX59d5CDE3IG2k6-MIHfvd_t2-AAfTtNAcO4YNkZuBzc4VPbiOJSgvoovAigOzehOVH44m9OO0NCM2HuRsYUGrgUP878Zw_clk0v7lsswxxZH5VZBvtl4iuSYNUP53UCKp6dwpiBLBK7G-3i9kdCakThsxGHUT9EUSj36PQvTZYmIqn4l7BR1OktxJycP7OKRnZjRnQzSBugQvjfKK4J38W1wHEKIWVcnuCtgq5FzTp6t4IiNvOXzBmkQIKoiIyajqFQG-qrvG_VTWPRJDTxEdS_U8d8CxN8xJB6ieApVu0T9EhW-Bbh9WcIoegShYgU8v9qwQ6Omc58dXss6SyNlrHR0bt1jB7_edTQl9Vn0B9bESq8OJB5XxiIPc3r7jFhliRPf2AROtTfF3gER9uvUENES_gVEzILTTUU=w1684-h947-no?authuser=0',
                'https://lh3.googleusercontent.com/BrjX1pJdBRKpYjvlzd6nPtY5nSLkhXovFp91LY5-Bmu_YgUGF9OdH7d5WjG1kBPYjYiVznh0PJ_cj55eWlygGiqBYfcA3nUGFQ4VsATGUXKs5l4WivqNdmUW8k7XGgY_VwWkBcg5GdcMZUWIwNk7OfX04COHubC-xlc6t0pF4Z-VIvBHmAYjwYEICPk5abn8sbDDOQAY_W3nxWgXqfba8ESsdGYyuibCWvZ49J0Cs2I5wR1khJl6Cl314fCH9WqteCc5RxnMhZxrsiUx77LJIxxKuEC6PURni9guIwT7wHbcckvGx1WRtTf4ZOzXdarullWpRLqEovZuDFX74YOUlGMWaK1Q3gcGeJc5aeQtDG6vAOBCNXkEZwrZMH4B41_GOu6EV7blLS8EP0UXuVmBIH_hmB18jmz83JbieJeW7T86xui3fpB-8VqT-7GSyL59rOSmxZ81tiAMMGBwbzDeioBnzkHMBHO3rtBSjRFPv36QomKfKvDurRopi0lGMLqCAPCmp3b004mqkhZVbm_2waebhnD75S8ml7L6TWF7uMRJApltQm5WFRFnLVe5QPsbrlRu9vpT_bzZ2ikts9kHXNBlIbwA3bvWoPj5DDEru4LHWXiFexcDSSU6IEZJhrNjlM4OrT8Hdrcfg9qgfQOyVc8sPm-VnjZ8mllD04Oy8VemhVo42wT3_QiOAeIsRfXbXC3tN_OHCPO8t2u2GgAQMvI=w1684-h947-no?authuser=0',
                'https://lh3.googleusercontent.com/JAkjdqy6PvykBrO9k3pXxMJbvlr-U_h4N1yN_eMzF2l_Vzl1uy8z_L7TjxIEXEFptGnXOFyYZ9SwyqvGdcqZ3UWkj6Oz_DUI9NnUv4-5VXbUc2O4GD1qXUnsLoL5nQYsSARK17CN1ujycZeutI8ZlcSTBwTMr3aX6IzGaKNrvjiPzrcJYhuq9LQxHbrD6A-OCcJNMoVaYNhR27UKX0TEe5reA3j4TvRsmi2H_jpbP1VXvrPA8oeVkbHNhEMab4CpJc6ZPHyybBMVlaIMZ5a3InScOgzwzBnGmOdnPHw3pnXMD8U2KiVUFri34H719LgFXPAOlTWrEhU7sjKATMzZzhykrtewE-ffjBgxoykg4WhfYINpE3189kRNmilgRqF193raXKQXXavpGvd2bbzq5wCsA0_lv7lcXu89SyR3cOHoFJzKUGLcQ1BJkXoYC84oYeYre2cgYL6jnwpezu873xPsrJNWYlqNPO8QaVneg-BmuTfpe22wEw-qePvcd5q2PIWjekeaYe3agAp-Kw0uU6fe2pTPSD4U77T6Z8GpZTu9o6X6zPtoeZA0gPNsvCYV2nyMGln7OLfJArqTTiiVJR2m4vMye8-RKvv1EUejgKEkp6s5ycB6zzNskdEvoB3Ns5DvmI95hHOhFAT3O27MmBvEAjgz2LgKjs4zx_JfIPc6__p20cdvRuYtQJyKCNXCTcha31_cxtbvzTcJlhOETBU=w1684-h947-no?authuser=0',
                'https://lh3.googleusercontent.com/o8CVqMQ5tGWuFuryVYwCvIhagBdoyrC-BOgH1PB3O5XN_CGOAy9Tg_wL6vIDf69UGcbvniSzQKYywYgB6lkAKY4CTFgjCTBQaaTP9Yol_B6pQQ3KofjPt1wy1sjIArbyNTgig2hfoMbgaas0YqK5F2vU3a1zkNz5zuLc61WXovjfA-3YvHAbIwLRZgh1Wg27cf6QpR-YB0b8wJeeDgr-dlXputgfanO_eh2tkBE_nPaQAg_Tp7qvNT2y-7vkv6QJqgXI8bUwH3UHXQBvcq0z6sgmwwu4Hc2GGCg6n7N9iSJ4ns-4Q-FbK0Sx0awWMDQfwqs69fgr1sqRCbsKVq9fcFj1o_IQPOaiE6uriJ5kN89_2b4_8mC9-78L5DWiP340yUh_8eySwtaWzuflP5q2fkk4CMQDQAujRnXwbvwWjdZlLvx-i8R6JAVdPfVKLlVqD1qBD4YUUWGqB-qz-55HR6pQgkBTPIVC-XT1sk8wEDlBReoCQLF4WhFBv92CQKOJOZkCON3pFdWj6z2ifWCWSulo_nC0hof0QIHSjx0NfFBasmoqZpvycQ9f1xQdsfNOPcZZP_mlDKgOP82NjtLn03ISm7vsJsSFCKAYx8MCL_mAYxWc_FWPR-g_ur_NlccQfMvZYEpvAMBo1b16JMFWGaTqFEcqg_LNiFLw31sisYGbEvxsQifP--vfefroXHvuDjlHwvQova2zHeFzKypebSA=w1684-h947-no?authuser=0',
                'https://lh3.googleusercontent.com/eqW-KaC56DbvLYgcWSlZexKm19CWLkSbuHXtj6xHDMr1T-rJPOTF39NWt991pfJJ2SKo8yNAr-wXB8RVQV-pMWvOYGRgrZuMmGpuaLPn0GS1fHqNS1TO-RBcWHDir6e3ZZ7O_NztJ4fJAUwk8rnfGGOBIOILYQCwWmJX71egZjlERARt7DD253bhR3mezuem0wH6fDPGEcA6xL8p_N_NWakvCzyj2hpDNivDY8Hye99h42QAGuZ3bPDJw3kxyxYU8nsmjVpqfbhGVfUBs9ohXtfJyod0gaFyuWwoMGxj0ydoC7poo3qW4RzDsdG_3ClILB3wTsWQlZzjMo39guAIGjx2Bs7u9XxK8a5HlMRaIXzTQXxcv_mxFm0XJJD0QOSpiHhmfaPGD7tGeGXSM6hS7ExFMD4pmz7BkwVReGoW7rG7eVyFDruqb4a7M-f6lrq0TETmQnA3MndKKrzqbjDmYIkSgr3nScNSMfVFMKvQyYcxpng1w86nMHwym3WUTXCapoB48BjDDqE7l-znZcLD1u_06be1OdG3v7QaX_f1RHM850PHKtOlYEC69JllMenjjGaH5Hq55EEXO8WI9NBbo5NObDBCu_CYPbdqCN7YIr6S05Pzn06HblPkiB11rh50oHgUkt9Ltf1nmWY683DII12S7br-USasgniZ2I4RF5c7jcCp2b9VtHoYVfzYk0RmT3kWtgLXU6Vna5lcBT7BkzY=w1684-h947-no?authuser=0',
                'https://lh3.googleusercontent.com/aoFftwP-zXfXFxiN3qjFQf8tCzkJZibVdRRI4nSGZKOhZQBEj5ChDZoRLKHo_p7RtnF5C3QRMQWUFtBXpx42VwlBHLi0U8ODJcplRs2xc80OIkROm8cYEm6w6TngFOobdtboWGzz8FirvvwCaQij9OxyqBPuvHFHLrMid4yUbYtFLnXdYVOtiVImxV4MHOejJD6bVQ9Si-hnDK_pZ4TZVdCQqUTbOvJ2cc_cmhbPRdUtKPHpf_6TadKeY86Qn3eFKCeUs-nuy8dyz6DtWXZj_sOCOrrgnV_0OpOrgB81zuatWzXbvJGOXUdAHO6IRKvOY_2S-iu5fngB6OJaAkldihI4DjZcvFoRxQbkkicVKkbePhtL2tJMkXgtRnsQe57XthdTBGP121cr_xRTL9jPhI_gtwvgwMUYsvw94keTSrqACYFGxXh32-Q2CgePAEDcSOLI3lJ7SNAR8Jpd7Xn-ll-otdLZwAddtTcKJolAda6iFh5gcgxvEElgBEkz8ry89bQbTJ4rXVAo4B8znntbgxOzWowzyk5KCgNkDyzEhrir4B3SoV2XRzqOzNyP4C1YPQa7_KzmP8zYJ3pMGzMLmBd9rYZTO5XJcmUvkEptOik65uHhJH2aw9TzIbbx2cGAsx0iTgKA2w4Yme36kJjory2UNbbnpXYtbchwC1BAq5KJlPJvlLbckRcUW0aX2Ixarr6Uouf5wa63ib9EtnMFTgs=w1684-h947-no?authuser=0',
                'https://lh3.googleusercontent.com/28qIp1q-7BEnkMMXRIuEQeA8L5t3SUSEXtFRyJAzUu0xCSnTKztoxCj05agQrZJ8BTPsmzGgL_buTSk1u6F3l2hVnQzLGvY9SBiyFr_XVeXbGqSoSGrF0G_luktUp8J8IqFmtho42CiDJ9rSEFk0aP2YCxfBkI3TBQu7AEzZqa_tDzRm1apWFfII8eS97MEidf6WxYKVvJKbJmzW7_YyqzbJi4BxbE7KDZKZ7q5UmhOEU2MO82mqI43vNHxnS8KDkiNN4k05KloZ7fbLmxxHiJVCvNcaTD_Izj0yzSNWKnu2kLMGO0sKfBRVaTFERw3Nt995qnGufyrMGkJNasjwvkQM7SJlArAUJTATEje7OBKui8TxdSigfYMHa2tkKViGTS1AjW-vq5kECCKLFYAfdxh1EimZyuGQinAZRPa9FZa57dXdoUPVyxFu0YImfqIK-VEqiVzGJqIMZUWOUhUely_IQ9by4-NQ2MWpuRMyH6GtQaFX6h0vdxD8Vg4l3BiA8Dy7JMY0C0NtwVkdya4ZTy77vgZ5Ps_ebIQwJCqkwBMtbkHkmI8aZwlmaCcWa8e08mt3ijuDxMUTBy0Wnchpn0-PXvlZcB0eLxk0Hya0Dc5jWdZLkKFLNe4wVb_aJ9tTsvgzMVxqqSVq9xsxAA9oH9hqMUhw05iMz7G9qUDpvOh2h09886fIVHBROhMZ4aJDePjwaFOOSHE2ti7fmqrlFHs=w1684-h947-no?authuser=0'

            ],
            title: 'MCTA',
            caption: 'A Business Webpage.',
            description: 'A responsive client-side tutoring webpage that enables customers to discover what MCTA is all about.',
            features: 'Vanilla.js, Bootstrap, PayPal payment SDK, LocalStorage.',
            links: [
                //{ link: 'https://www.google.com', icon: <YouTube /> },
                { link: 'https://github.com/zoug86/MC-Tutoring-Academy', icon: <GitHubIcon />, text: 'Github Repo' },
                { link: 'https://zoug86.github.io/MC-Tutoring-Academy/', icon: <Language />, text: 'Live Demo' }
            ],
        },
        {
            tag: 'VanillaJS',
            images: ['https://lh3.googleusercontent.com/2PmgA_rOxl53zjrt0-EzmUX3hCQoUnZw_cBxpXQNWR_2J4m1L8yu24PRyOQLKGG8Jus8mMhAu_JAlAIzai7yt2XklSXEOwQ59o0tY6HG6eIxE2QEAXVC7iRXbtm91HG23FwrVDRmE6vap_fK382f8q1sZstOlLiMvaaT8CXgcaL_v5jZ9eaAAgSDrg8DQ3QJy9cnTWArWR9uK9Vdms8kYE5Io5y5fgwvodPO0SjNVmZ9arLhzgBk4t25o09-VlvuI-2s0Pll8LkRgvPFpa1-UV0FeNqF0loPJQX0M7Xv50oQ-iPMIlf7q3kmfhkcHiS0VOczQpAQArRveSqltKr8ousE8u3AXAgfPpuRlzOUf8pri23uKT-1um2_k-7ta2TQ0lNiZuvBfT-Zkx-mI9TeSS_vEQsa99Z9gHzGgqJoi9qU5_LZ7-QqJYuYYtgoltI2XBWXqlGjR3Xr1lwUqodpdEjx0P_itd4aBSOXYGRC34MhyQkW3A2G0zSjV9606_kvxsHybeowEDDbWJ07mWd5LkccyTAMQ3yzEhweks6KN-qTLm6N67IHsowXaV6-9W8ZhBp8WE7szRrckfYSwTqwbaCMpjntgIa5QrRSkHtsE3Lp1DGgmBZfmBJ5tjimaEsY7Gn6bINSAMIQ5JMSY6jlDmLuwS9dYe9E2wuYo4hw1lQPsuSBhr3Zi4RXL7sOStf5y2eG2z_eg5iXLHOUc8nMZJw=w1684-h947-no?authuser=0',
                'https://lh3.googleusercontent.com/ax_9sN35T_5JywtD0TGXml9pb2jQ1xw6BdUhHjjs2EyTE3sej3Rxf-n_pwllAVAuT41UMLhvmhytf89ZII0uoj9jtdDHAntx0jjVDaIJsGeZw_xqBzZDxRgVtIllGs8edbAH6fhPfFAgAfVKX5TlrEj2TqCyK_ZCNa1ZxOLkRuymtCqaBorpWtwDP-636TAsrai_fE3d1Rg385HwRbSEMa-A6VV1T3AyXx-NC2eyxw1qBtTk2QF1R3miROUo7jhHCB6C1Akga6ENYPQQpVrXIro5npPZ7U-BoGdMRY3-SOK_qMd84Bi4gadqfHPHYIlR0KOgQnbmhHGKwgUuJ9UbaYmSrNfu24Vot8rByuK9kKQT6AIoTlb199YR1tXhvwE5zhPVWs9jAdy3JjRIFE5-9z-JaOpnOHeaeYdDTIoweEv5YFSWJKCHaz7JWphYJnvvmdyLEG4YBzXxKRGG6OEB-bmz5sqEzbfvcgcKiTYrIHpfZWewrx4i61aI957Y5sfHdI5_kVwti9PSR4onNMDHzZ7RZBQhS88ktscxWOSAJ-GJTaWW1wSPXLpRtdbYOvxdd0bJLB7RFLbTWL3ZPf04HjzHbB3mUk4Gm5SEqsIYtRLBgQ3MlqETyOqnai9w01ANP1jWnlm_obJuMtsP98QoMc7NTPa00EjynQP3y40mQkGp32RGhw-HrrxS_ySlMv7fUdRcJsRWaEBupuJkZWDxR3Y=w1684-h947-no?authuser=0',
                'https://lh3.googleusercontent.com/zeTvJWy_ftTUQSurezCOqtcQKBorWreuOwceKy4P1XB3kNrmP56azQTncPkWhlNg_Wb7Izksdr_RGOgLzfrzsc67giwyHArghuO73l5CZrZadhE6R_PmOtkrCUjWEwFUsJnjxfNmHMQxBiyy9o01NmpwjqcV7zNutUabpn5R2dxUnP7opYfOGO6jMCW-PBk2OXVYrDYA08mhWpEiCQqtyfuaqzLBjrfzOYsfvPpEQitDik091jXYUAGBLyo5ssg3CRI_KSz5RSLNx-K0EDp7nO2XqGrJTLnLhmIa9TvIxSuUHbbe68jTuW3oCKTAcjati4mqWDUGvX6JQDU86YQtp5FoaaItRD7wL8Dg5rjCa3f18jyHKQG-QwXa061vdg17OHQztduEgnuTwteBv6XJm8u-CXveinTtb_IhysvhM_KWabMgSqNnFKP-44JgjNZ_a3V19E8Ege9qUieQtbZ-iSmc08eNJdl4ZhaEoTPnjfQbXjTHuJnu-GZcxIEyq69Y-TvfTgUNFgkO7qO6oxdpRCt1MhztI-vMzpZXNMBdRIGpec4BIveF8nk1_pCZo9x-qOsIp7l4oejgsN46f0YPcZYHVwwS_AEPENabGdx5nuzWa8QeuWiA5aXhgHVLDbx8Db7LISCRjboPGVMDd8idyurS-9qCDFwKCu3uspjidmWiqDMIztrVOhyxLwED8ulUkxn5RE6-Jehxj819G39q3WQ=w1684-h947-no?authuser=0',
                'https://lh3.googleusercontent.com/uE_H7BZ_F5IY78PR8-Vu-EMn6BUMS591ezJw8U8JOa0fcwXbZSVUg_094sj_XuuyHbTzZdYtED8GkPDRnmgyu75qtG-4xUmgItUq9NEeTkq1VxYXv4iOYmlNmekWTo5rUfBPPT0n1o8bd2Bm8JnF6xc-22mzSUkYAd_dfSCNOuH8ZHn2qe799J6VJy-fJZk42q1nJ-84lxwfRdjh-VYMK1XDFTtmnJx4CGZ665tQa9JO1GVc_1iW0Q6KLUQWXHv1i_3FXuQNYI2lQeI5nV4BO_EMynf7m61P5tVj_C511lkz4b6DmvkdJNanBFvAA_n9vo5WE4fFomKM7sQ5ejI5QH85x1Cavt_T8I11RktZ8BDpk9rQaA-2UnJNYp5Kqh3_0EEQgXCyO4OYuh4xAtK7tCrIRgEa8pQFhX0WveHbhsaeBfgPL7p2VQFrFpV6BwzvQpFPlGRQ4Hen1c3sj9m0xkAjygyYYMnAphAbG79PZp53WOazGC2pDQW8Y4et-x1Rwhx3MHDluFEWIKA6FYQkN6q6vcC51gGpRsWSUXvR9c5cpXzKAW5cKzLK8zv3MKbSs1CO9aidfcfFfZnVOdya2-BP-1L1YIaOaFTDSlWHf98qxaoTglV0wy7BoBX6SYtXWbUjYh5XkO-esIJXOtSmWBLrnJ-K6rxS8Mtd6clq-edSpW_mINpN5Ku_pbVlS-lxrr7ZMfLM8VS3iHTBIUZ4vzY=w1684-h947-no?authuser=0',
                'https://lh3.googleusercontent.com/butP1uVvDhZkqNppzN00I5-mUIL602AA-L5vhMctLlcY54c5jWpnX1vsSGISCR9FPBZoRU5Mc8e6cLtXkg2UCiA9SXFC3w0nohCG21NPItO89EEKCmOR_X9oFsnLj7U0NdCvba_VM8Bd8h4bSF7LVJxJew55NIEn2huM4wOQe3wlOLggrsUzNxmG-nP3nO4LsuOxFNpiCRT74-j7mcLHa2DQWSdfqelZkEthvwVcf-pjIA63ynIh9Q1WgT0fJX7yoxdRVUv99CR-DOsMxciMbF0KXk9TlJUoLm8oQ3xnF-MmWW8vzdmqIWGMVhRNyvhhWsVp4KSPXr3Cqow0e9DWHJXxk-8bx0CwcY0uN6ScfhhzXQAckFY1AuXxo0k4yqRy6VzFdpnpPawk3aRD9k3ZTOCmUCiRPR_-HGnu07Q2_YUF3AWV-_qK9SdhodkW1Gftt0TWV0VJCqtYKZWue0x0sTCwVTjTZOflCXeohmh02nT3hdovOiQzFZ4J9WnZGmXUyNz65BTGiKS_W0ZT5tjUp0Ifn4N1qhEhQlD_UE2Dm7XtyhKTYMdBntZu1KL8dme5KJcrEGSPHF1utanVcGvWoko7LcrCftKGJgSthzd8GXWkm1VFRCR3c0g4i8zIaMnZxjPVmf4GZaBjYc6yHEbMOOuNo_yXx0GE88xGuSN-_rH47qmg3hed1pbP8fBJ-XHyHwWWG5_UILtZQhzrK-JIzc0=w1684-h947-no?authuser=0'
            ],
            title: 'Restaurant-app',
            caption: 'Frontend Restaurant Webpage.',
            description: 'A responsive frontend webpage for a restaurant.',
            features: 'Vanilla.js, pure CSS, and HTML.',
            links: [
                // { link: 'https://www.google.com', icon: <YouTube /> },
                { link: 'https://github.com/zoug86/restaurant-website', icon: <GitHubIcon />, text: 'Github Repo' },
                { link: 'https://zoug86.github.io/restaurant-website/', icon: <Language />, text: 'Live Demo' }
            ],
        },
        {
            tag: 'VanillaJS',
            images: ['https://lh3.googleusercontent.com/iV6PIQ3RVXHvYg_qcP8C4W3bKcEi_Ydn1Ey6evbwqbK4o08gYD5QDPkZl0ACOEtshTNwm42opQINZsqC2SNpIxvz-_sPXKDqhk1VrqdOCIAvR03wqEPKg56xUscVVIntyrSBP7ftwtHd9cz7GUpLYega9GPdO5VRsU38svkrRCLzujkI66w0a877oU3Rf5S_WEC3N0BtppN3AegMrfqffC4ElLKd6ZiP2nUSjCi-OKa2i3BU4dJOertOBXf_fJJZMnESiVqKIu5KDm1PjIXr4Lh6QeEwdXXLZYytwe9Z_H8lQ6_ta2leMMs4XKaN3ACRLTKNkM0QWHXQlAyDCgz1D8RKYpZkW0f3aQmjcX_zIJNJ4L-vlii02brJiPx4vWn_fFESO29VJSbR15lRfwFQynIxA63xkiDzHFvzTB510gMzntsRfqdbIu5olR0PiPCy8zPCsu1b4qi2vtEosHaGxHGGxHrDwKJPacQZ1bfveKowqONu4cA92TuK9idiXRx3K9Imdrp7HgF4uwH1QPk1uO8ttTNoQIOQpYxIxrB_BfTh5gEf8w9flEL7Chd_pl0Fqrgyc8nX5IVbfRh5mz9ZyjOCvAaQWLvkuYA6Rpq52LwW6ClJri6shuOdwAxpLTkj_tSk1M1wHF5ex3tKIdmLx-JokEfftKRZN-APQLVgKTv3g-vqxnHISOm_YjWruSCOwBkL1RYGkGMAVk2D8UsNEyk=w1684-h947-no?authuser=0',
                'https://lh3.googleusercontent.com/hEqEyfn4zNAlxNX8GvAI4Y5-t2CboQIimzOy_eTBXvBbA9ccAtt4tmbaeis-Lp_rXkqViXQ_v-HvYwxLgb--IOZ3lualVbh7poN0KMF1enSRoPWIugtX_awGw6Bvj554G-2zUsrcMRB0ZfPTQslTH_WbEV4npRIlIS_nFglbXIsH41A0FgauZ_bU2Ml9ynD6BV3Stfifbss7o1uF1IicN0nnOpiw0co3YW2nDzgMFgRoXPEe_vP3jGp7KE8a1cWS0ZGJJ3wYeBfwIt2v8ZQ-DtYb_LJx0XmspwIK_a1xN3hiyjfe56rFqhlPQS-DL6Mlw39VWTSg1arHI6tWvTm4koDm_CqAvuVM3xiWHoecCcwuN9WHeoftDmeJEzIT7mqtvbLpDh6xAg0LM8LMd1b073_Wx5XLalIJgW9utQ4jy7oCNQjpaFnFa7nWtKPdQn_N0wZOAJy1bXn625aabsZlqas7AdWtM4qs44VY7gJLifXf7HvpT53aDJpA2Jz4ASgs7XNB3DGRw2v2qiHB_9AMWcQvAOjLEXh1FO_oWaaojU_ScewELtUUgazI63l_3GbwFAPRmREqDcxJtWuy4g972qEibvQIYlTZEzK5DcehWa_4t8TJGa8VyMUVTrsFG-1iNRKOgOYb93NCEpgJkBUKb8UC1zeaHGdQKT6eWRYkL9bh6DXR6W45sLLEPWWsjw-4LcgsN1FQLh1YSxASQXT0aLw=w1684-h947-no?authuser=0',
                'https://lh3.googleusercontent.com/0BRHnJ-p-YCG2kANO-2nSYFPiyXc5Q_nFyno3eak8sThaWrkWGup4yrHgITwg7HyQIbWYKIA4hmQD45TnzGKrzN5je2LpXFNx4cF0hcTqObPiIzBWhvhe2xEStwDcHxuEn9s59VWtaZxcAeahcLsppVpUhwrae_WxfuF46XekiE35wPULNlly9zTab4N8o7HUeKS98fOQMNLFLD1Ij28LJfJAT5KADerdcStbwARsaUiD2O96f3URs1rxK9voHY4wKu002r6P0MKbkeYaGPZmVrFjRWM-hBST9Wo_tsBgOQ3Z_nhMxZmJJ6pjXHQYytqC2Oy7XpP6HWiWp3iK535ch9aTj8JVUOEGZoYj2HiD4_DqrLr0PKBJMamqSRIP1FSQDBK7eMWsxbfhHI5JAQDOe18JtPUFvKTq2Km1HsUgKqNf_w_ATvsVX26z2jzCq4v9ybaL9eUyj_IZv50HUZUnJTfqkVRf0gn6bZrZoYpess2N-3Oh62YPwch2d_TpTI4HopXPJODBdKO5j38OS6aBjShGX-Amsfur8gbEl6f53f1tPfaIniINmHT2x7o7OBqac9hZTKdKLedCavWU_-S_77BF8s6aCUXY8ljV5OJ2-3Y4isjO9RXYqosErOh6p24jtyd5FHUIhC0q2wQMjmiiCKmsfIXxm39NLxKzvGfQq-SYZmKFN8Xy3NLs7NpJ3I5O78aFiBL2NgrvtZaQKGYE9Y=w1684-h947-no?authuser=0',
                'https://lh3.googleusercontent.com/pceGVbYvaoW8X_k4OKqFvv-aOoLOweIRfaTzouUKy4IAFY_rOK29G8L2WaVjynHCoTeypcxe36RgRBi6GyLfl4DVuDFcmdKkUkRFqHqb5A5mnxyw0sSzrgR81xRUfeNgeBSDqJAlm3WRZM-Bv8U1sF1l8znUPMZs9zjBT6fn4Cyk5VF0-GwDMrLOVY7r8_XrwwKLmLiyc2qipLqrKYBCAS6LgqdnTNUBc0tI75Kx-ez1LZ3WCMJ7G2HQ-1xYDXQGK4sHRSLge3yIBGeRM7sM4KVy-Q69MvWJXZZwqzEhyuqSYQG0TDiVGcOtFu9Kp-zh6r5WnmRN5qJR-S4IDYc1zYSCBuf5hCQD4ajdX9Vi8COsTRqbsLPi4t6fCef18sgINQk92JBgZab0z8f-xMbh62ySWHFopvRLvlLkMuFgw4WRpYRMbHoMJevAD90ocCsKAf0ZKmUTtLKBJhT74IUxDwTUwuJRzJ-gozRu1oWHRsZVjlj19S1ulLs_Fbf1oAh7-8Nrpw3J4LXMhlUIPXtCeyCXprWjZlMBXVT0OwXLHYW5YpXSdfnCPYn-b4pOwGM9dBGVlv4qhFUASXCPF34_yOG0qjuH8Wa1pYKakJz_kAM7Ws_ivYgZ2xpUEd0lGOZgX2-H_ZkGAgmIYdTCb_IfLeIln217ROPDb5g5EVaLNulaQCydubWkYO_mqq9KFYT3EVke2NR3cjmUyiQ1DvMDisk=w1684-h947-no?authuser=0',
                'https://lh3.googleusercontent.com/Hm8C9TqCBXutvOGoRfdnPEct9qsR28PtsPNYocnTn6doIXSWNDrgl1rBJAyYxnC_OaomIotmxcRn4rsJcQtCm8FlL4WfQXo1qWnBn3m41RiKp-qybMFOhfIe5Oj7kD_3HBOk0kEK8sIQ2c9O3gGMY5iGu6-WB2L6uTj6MBkw89WnXaWj759w5IPWZoRi75QVFG7OQVaslpHUGKaKZPHC1EYn_9hnDg2sAv1gopi_3mWNqsJKdZEwYIbDiCJB4enIu7aaQiO7RulzOafMVJeFUIF08r-9Z7H7NGaNlaUzCfL9d_YRjmW_v4k38mt61KEtK6eg28StlXwLOz33PP5Ptg9-Ex3WkIhYR-PmvoEHY_OG9xFbTxOddReHJug3mytWUEM5zR6UQm3BY5nWxCuRF0PAA0tYtqj7FSjWo9Llie5O2ltAaF9Gv3ytzjuL8aAGHrHe2XwJwqv_v-y_sbM2938450hshv_dl-z9xLsWnC609Z4XPTOBtuAvfXrYpMip0Ov50w6X64as_Y2lb3NpZXuZWGU_2pxIgGMlPFS-9GI44izLiR_oH6IbD1Ch6xAslX15UBL4sZZ3bKs2eAw4Eucffbvwc8kQCh--4pZJP_Gk9ibpcaJcxkBPUlNkEyi2Krky6ct2e-yJ18Qu7aBJITrX2fG8nhBV9hbOu80_yxnacqxvJd_gY0AxhZ3dlrDm8H5a9kI5uFp3tkg129D3zxI=w1684-h947-no?authuser=0'
            ],
            title: 'Creative-Design',
            caption: 'Frontend Business Webpage.',
            description: 'A creative and responsive website design.',
            features: 'Vanilla.js, pure CSS, and HTML.',
            links: [
                //{ link: 'https://www.google.com', icon: <YouTube /> },
                { link: 'https://github.com/zoug86/WebsiteCreativeDesign', icon: <GitHubIcon />, text: 'Github Repo' },
                { link: 'https://zoug86.github.io/WebsiteCreativeDesign/', icon: <Language />, text: 'Live Demo' }
            ],
        },
        {
            tag: 'React.js',
            images: ['https://lh3.googleusercontent.com/h0AnkXBLRQ1OLCfsi5bQzwoXPR7OUEFFuP1v3g4v5o8ID3IcJr-8PybjKVwnFcBOq8l1Ua95c2DrtemSaClWxnGwe3lT5MHkCzD8SlY32cJacu_8VYln85uxmU12MG7bPIrvLFFaMXdWXg6zCLx5cQQhoZv0dfYWteJMoXOfdht_IXftIyOwxW5mCgWXW-wBDbzHmY4-SkytUSew80jycU94YlKnopGCGUFw59k4TOmnUysWFqVBKK1sR1rptz69z-Lou_P1DWm16B-bokoeIRGNMt8JCDyzGg3FaJDQMYbMcYiOaQXwvHx6gd3qq_w4yGK85aSvnRM-kNnzBtZhaIJz7Ak1Z1wzesoCCUQPc1zUGTO2H5FYAP4R1V9YsbOYl02r8Gp6fdsCtWibjJo1IMbLjDtDVOHFgOeJnwYfyEgy0sLpb3K5K3VVjKs0Ce76gR8wBvjnLf4ZSInBSoueMJf4XrKYVQn1DlhywPr3DSSKw5Nfy7ToVlubmnkz7HQmDzBffhanpJE92SpozCKhhwuCEhCxgD1BVkaSD03SFghmkst6alCuoCpryHlZvlhMbqrCGSqnAGvZVmRNMQa-ScOJLN_S-f_d_KEsWifUvl45Y8TrsoNHzZ5s2f6EM0eJoBsHQmTunP-xehIwpwSS21kDh7EGEOUYFjTluUY5r5Lddv6THZ_PEFqYx5cPvE5Wl_M8UdPlnT7oX2XJtl0bqCo=w1684-h947-no?authuser=0',
                'https://lh3.googleusercontent.com/YYZRZthfkgJVWEESRUBbfiIJYF3To_9F3Pc7xF6ZzH12dw2iCEiU5uh0bACY3Tkjs80611Ol_wHyySrhMfzW9ZQSLmaH26-ypjeP7_-nf2OV_yJwQkbJl94_Q2xy9tjB3it6OVzeHdzIFYpUzc8NkvhoXiadcWOm7-omQYCvgIrkJbkCzjTXityTaN1jTbFCg40omBCP8Jf0gT6ae6eXt3kEB9W-6u9Yul-mWMzXlQOV0T7LICRaU6YvOFzzbIB7C6iU6sDZ2mlOmrUwKeJQwlsKcwS2CTyncrB5O9I3OkZLqN9Pzqnkge2my9_tNDA2YkVQfJt9-OhIra9F_NbuM1vw0XQwslvmUsBzH1tt1tVo1Vmw5_o4qAzq6c1cW0JDwraWyiJ2t_IYBwn2NpMC3aNgGXcMT-uF_Q-agcwJA-hC1VaFBPhXuIBVrHk0LLKlgeGutm4_c2lfZx-EldkRz8hjZ9RHxgabHtqlS6aweXqGzWrvCLe-00HeZchIQuVXx3-WHyPY9gK9sY8jRk8ZogacTg_jsjylxuvv-X7nyZiQc3xUHY2hBUZaxsgd0dUUmarRHCPWkxaHKiYsqCvSj7TKO8nZoVxXASDFUvqNl-QM4M6eEoleHepc_dTE4g2hMYQ7-L6bdCE4Ec1mMjYPCVDXBfXWbb7lUOVaT9Lwy2a-S4o27OqYDqF-6vp3WUHIiG32W325e25NAIb_lyEA-Zc=w1684-h947-no?authuser=0',
                'https://lh3.googleusercontent.com/fKN6LaYjMUfMB8PjQqpT-YosxNZqx-pAtfEJfOr0Woxg-0fZ0cvuy_dmIKTmMU4NfE8NB58zK6xphx0g1F9hj17__9bC-7VUoA-FdyxS5FbXlRTB-4XUTlEQxUg5Ky9HihPdMlC07aL-Wspd42SntsT9VGeQS1tI_Jar2hdlXjqy_2G2FqNL6NLARHastxreS-olK-d8nggxNeKqQSiVtpnFwz7U4GnI3h5bgARbd9szXzKtBM5lTULra7ndpBLkN_qIjtX6-sKbFUHD-T_hmpxvLKAFE1t9ui8Ujo9Y9R_TZCTxOOGRx09IN1ewdRuFyx1MwhirEWhWAatG2BbelBYVFeb9IA6ee6NCqujsApBHcMO8spIgPRPJXzNJu0PSypygb_MO9LhOzcK4az-bhYJ45s5clFCnWe-fR7USXPmra52hgtBtezQhHY-lxiqITWJ4tYXxdJI0vL6TxrVREQOt--qLnsiSs1a0XFzfAtueblmYmxNjgWDXyIhoyZtcmuKVWdcj3ZUYbh15tL5-WI5c7INr8R_Nn5tVQKfsIYg2E7uEC8hRbeCU4ANyR9pyk-LHfkOTH5m3i1OuKm5eO1wGAfTOUwPdgYoXGIkTbExVSEgHcUrFSl9vrfOMhXVjwE8QTDLlAgY4nUJrZk81dRaizp7BYcNfUN6iXN4VpTuJaGpZW3hOcwV3XXCO80b7otst1PowW7o4usVE7QEuXh0=w1684-h947-no?authuser=0',
                'https://lh3.googleusercontent.com/AQ-2zIhl8mdC7SwTyM41lRTpCO4QRHgbMdx3Szt4AJVZl1hj3WlvepToZQBd5DJDTV6dqC3oZ5yzEHj0fde-fsy3m5XBI5E8vGCPXwpLEiquSFFKXJAWaNJ4DeLyjXdRKDYMUErcuH8NjVG0ko4BG3q6amjTYMmKFEH0JmRP2qpAA5k-waHOM93ppwXdvaQG_cfB54r57uFv0CWzztNbxf3-M0h5op6j84TavqkLRP88cWiB0DZMmQBYbJlGn0WjGZduWexykF9Q30zo_wLd-F1FdFXzi8e8yzX1gyQIlcDfC3Y3jkFuao8GXKUK6_VPj5SLw2nUoccF051Yi_tuP7Rg85ezCOc8cWRrX6oTEDQXRaCL6uxo_lsGiAnujKueYFbrXBGOP4KLChdR8t7BBl3WSuTOyQOGCxHGH80DmVITsV7u0TZ2JnJ9xZ92DPmnZfVLfrrP3hQtuELfKB4f54k8GvNzntUmk1GqOsUQPOXRmpNu8EIK7Cx5-fJu2nWZxAPANzq_t7YifFC3oByEQbTfgZe9OvPCcTNYD9y3yhgJ2_dzxGDy-wCGKRkiio6Zq8C2y13F8IoHLTYyiPVq_E20I-oAHmAaBdNVir95vEDH0FLjUNpJAXUhbmCp5uHnVSKv4ecRCzo7oNG4Wqp-bJHttss5CYrf2baP5Z6qlOzhV1EEBFsREgqLIZB__--tQT89QdyDdrdx8Vw5Agu7YI0=w1684-h947-no?authuser=0',
                'https://lh3.googleusercontent.com/Fgnxqz7V22ISRpijLJxYSX18JWGF_8yX5v8N2T1SC1ogOC6RSPrpGWFJd6QkG4zDCPilvzvGzTQx9qN3pSNi5mG0vplNGc2aMJ0JmvSdCB1kK0kN-AbBPkxSZMRcR8Eq1Dem-iq67CA18kl91zjYT_LjFFM9_CvdMinp23q596apSq-lOo0AEADvrm4XpzFQ4eB0ck7deXzoqL4RcZCcjy1NaTlCjIc8XGwRN4MgoLn4bc4iJAZU72MOLUQJW5bvQa3E_3_aIfkXhIRUPyTvnA_wjV4A6WpLFgqsSRW6yjNAF7o-3o1TYv9vRu1ftHd2rlP5F01hQpXI9dA5CaGMgCgkHqedmuLEHuu8zki3--J9SwZdl-Ls4vcQgWU3bvbUonCHcGBtVVO1QVSOj16KvUQanSb2MXxRlWsHimER18hQbRJ__Tfb_IBB7GF3aWx2ryyQ-v_vCzn-IOr7jL-eklTho22B1xx-1Tyf4O02y6KG6rrLFvAXYuyVbUfzizXpVJHLilbLHSLaHgufmCHGZ3KNvIZhzrxalm0ReqYeESisD64K3ORsfa3CVi_lExCEEtxGfgSb0NEgTvAaxoMwwDZujc1Bjy1vT8Z1iDJLTc50O017KX6WIZIiiIUHpZ_jtmxDOIYFnMbFznu82E4lpVM6Zrh6pvg3lX_uEXeyhj5i80W_d9pdG8dQ6Kr4COGpa5aSpYtLXU1bhr9B2Urh6T4=w1684-h947-no?authuser=0',
                'https://lh3.googleusercontent.com/48zjWLknqa9cQflFY0QFrRdaI4JddQe_LQvMFJzbmOHW4XcM_aJoPASUFNM4tMOM5oovd2B0tYgmJyZXBAgGcdlQrzTCz-e_VwOJehaYhWtk6vXRgYY5_HlCkrEXBf0nKe0iu2vxlMRBjeIZby8pul-aawRJ-ef6STfMLPVJfOtM6b2D0Tvx4QNW4UCZ9S12XQT7etFTJLiHIXLV7h7awWuS07j4U-_Y9GElVEFlN_98dX5CGvof5R9E3e5un80mUHC3j8uwlsrabJaTcgHP3NjqaTNR7m5hehqdfTxrfvYXEFbUoUCjMIbrHz0msmSaZ20Kwd8cub7o0l4ND6p2kmiflFn8tvm0APQ0hvLlgHFnd_xOs2JJ_qCLkQjqpMSVLo9IjjXA4PqMaHnI4B2LOX-kyZ3x0rpBflU0_V2vjnB8RgJE9O2KIgBLEwPOGVc-B5TgmokrPXFoT6MYTPMcNNJ4auqjvsvIudEN5-U-uQmoQWweenXYuFRq8dJcDmJYqwJ5_0wg-omLZ1HRfTefX3HpwEzgMhUk30g-7zBUvb2fEOJyoe0VwUzrJvVlUmbQah24Dv6VNnO24Y97XD4DJoFrbyWCw79xMXbDe8E3lDpWyoVJ-aW-NDeZ_hQc6e9VpWqF5-okU-jlLTxymzUqEzTgH46172xJO77Rq1DtutofOY42_U4fT301LW9JpPZtGuYG3l9HiKM7wffXpj1ZB8o=w1684-h947-no?authuser=0',
                'https://lh3.googleusercontent.com/QnQJmpL6OitDn4D68ta43r-Ik4A78YS9SBJ5efYnnksS7spWMdI20vkH0TNLzanER99Nd43jdSPqTTB0G01q4SZRh1SwZNItPZDJoBxgaiOTnP025lox-tl7Lf41r2oF8t1erHaoZbH58zJZFlrKkcfH0OXiE88eaVL51Iau9HgaCZ3bJ4gy8IKl-V3D7o-X_Gq-GnzxxdycCXdN-UXJ9g-NnBzAykYCtdPPiivf8cAmZvmChuoRUXHkeZQfqR4xhukGKak96_9sRsebBKauBE-EkC0TU2Tn_Xv9WqtEeQbB-EUnIWNYypj7Gr8RDKd5c__pZ3IgQD95IvG8kJkcRhZ7z1pr-_3I8Nffyp_WzydwmAxkPt7TVKPqHiDIuokNXqgy0oN6CLwalivUct97J_DDo9HqX09s_SLUkmsa-hlczfJztWDyTkWW6a78C24sWajZItMD5BDMuABb9EFMmu3LHUmcKQPv-QKRAnpdT4YaTVanRRC-nvmLoMtosN7b2Oc61ZFrB96FzqvniHlhXrfeibHKp17bDDa23YkqTRKfsi9SEqeDw9abzBoq9JH5hIo2vBg1u8Wns0LDdbRml3_-PCxT4ytQ67PfHaF9-nzp1fR8wZ7_UvTaFYZ3KcxJcbnF_6lhlGYFwWuRbXe9mocRE7ZnlyNyj7u5QNWLB9b340vY2rjW_ZJt-peWMaesLqwiUqZy976fmCj0tdPrmw8=w1684-h947-no?authuser=0',
                'https://lh3.googleusercontent.com/LnSe8Z0HlJ7JQyn2RS2BGZd6i0UMdemQQDoo09R82auacSKSF3c1yFwLcONxUzq7y6LX_nzNqTmvZSPbq9vfIxQqQ8yZJRMEAezprwKhoecOcRRayJSz_CDkyodb-aWMIetmuyCxOniDscOicZFcOhXAS5EzmOU0IOdyhR5WW8I7IC6piXjnL_a7JeX1LBtnU2BPcj_qnUbbiUqMkkj6PVLu1WfKHi2TLDsct2dRb1pRdRPyZoke1-pzALDWXJtsBAB7J6MVtiYN26fC8jT7J1x4E74Mn3yzPzOkrQkUjnaQTcjcf25O6TsMzxMshTuqno4QZ-r5xXW40YapWXd2ghK3uYOLHX8WB8fOI2CmhTb6bWfU1nTmVAZM97vmdVyliPcO5Nwclk5gZ8TDRcYKrPsth9gpiicPEG6AhF4yDLDjfn2t8_F4uxeRfqJQk7YqzpGNiLLsFXSW1p_BXZ0dgX_8czH8sq6NdPFHOktH-Q7ik2x8vII6TOF4sroezPhQa1f3NEL5YhmtjonyNgLWYP9Ut-fHh4oCIqnmI7yE56YLPe27evlMxkGqZWq4f0Q-2aLTLvLCaAoU4A7F1rxeOizLvVy0CzJXtot6aN2-RmceiLjLSDsqjz4vZDozZWBb_GzapvWOFwkrxMR2WTBomwEeX57Pq7ITU-B6ikbI6otcFOF9X5RsZm_VMP_Z39mB7X8Zd6VZwlMA452rvRoHaDI=w1684-h947-no?authuser=0'
            ],
            title: 'Portfolio',
            caption: 'React and Material-UI Portfolio.',
            description: 'Personal Portfolio.',
            features: 'React.js (React Router, Context API, Pagination, etc), Material-Ui, Bootstrap, Email.js.',
            links: [
                // { link: 'https://www.google.com', icon: <YouTube /> },
                { link: 'https://github.com/zoug86/Personal-Portfolio', icon: <GitHubIcon />, text: 'Github Repo' },
                { link: 'https://personal-portfolio-zoug86.vercel.app/', icon: <Language />, text: 'Live Demo' }
            ],
        },

    ]
}

export default resumeData;