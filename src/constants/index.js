import {
    backend,
    web,
    javascript,
    html,
    css,
    php,
    git,
    SimpleWAy,
    eSW,
    AgW,
    AgS,
    Pharm,
    Mysql,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Frontend Developer",
        icon: web,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },

];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "PHP",
        icon: php,
    },
    {
        name: "MySQL",
        icon: Mysql,
    },

    {
        name: "git",
        icon: git,
    },
];

const experiences = [
    {
        title: "Web Developer",
        company_name: "SimpleWAy",
        icon: SimpleWAy,
        iconBg: "#383E56",
        date: "Nov 2022 - Present",
        points: [
            " Developed and maintained company's website using HTML, CSS, JavaScript, PHP, and MySQL.",
            " Worked on creating a system to improve the workflow and task management for the company.",
            " Collaborate with team members to troubleshoot and solve technical issues.",
            " Implement new features and improvements to existing applications.",
            " Participate in code reviews and contribute to the improvement of software development processes.",
            " Acquired experience in full-stack development, Agile development methodologies, and teamwork.",
            " Improved application performance by 20% through optimization and regular maintenance.",
            " Contributed to the successful delivery of multiple web applications for clients in a timely and efficient manner.",
            "Developing and maintaining web applications.",
            // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            // "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },

];


const projects = [
    {
        name: "My Pharmacy",
        description:
            "I created a mobile application using Flutter, Dart, Firebase, and API technologies. The application allows users to scan medicine and receive information about it. It also has a feature that scans prescriptions and tries to make them clear and readable. I received a B+ for this project, which showcases my proficiency in developing mobile application.",
        tags: [
            {
                name: "Dart",
                color: "blue-text-gradient",
            },
            {
                name: "Firebase",
                color: "pink-text-gradient",
            },
        ],
        image: Pharm,
        source_code_link: "https://github.com/shireef10/My-pharmacy",
    },
    {
        name: "Simple Way Website",
        description:
            "I designed and developed Simple Way, a company website using PHP, HTML, CSS, MySQL, and JavaScript. This project allowed me to showcase my skills in creating dynamic and interactive web pages, as well as my ability to design visually appealing layouts that accurately reflect a brand's identity.",
        tags: [
            {
                name: "HTML",
                color: "blue-text-gradient",
            },
            {
                name: "JS",
                color: "green-text-gradient",
            },
            {
                name: "PHP",
                color: "pink-text-gradient",
            },
            {
                name: "CSS",
                color: "white-text-gradient",
            },
            {
                name: "MySQL",
                color: "pink-text-gradient",
            },
        ],
        image: eSW,
        source_code_link: "https://esimpleway.com/",
    },
    {
        name: "Ashraf Grisha Website",
        description:
            "I created a company website from scratch using HTML, CSS, JavaScript, PHP, and MySQL, handling everything from design to deployment The site is now live on GoDaddy and being used by the company, showcasing my web development and project management skills, and ability to deliver high-quality results.",
        tags: [
            {
                name: "HTML",
                color: "blue-text-gradient",
            },
            {
                name: "JS",
                color: "green-text-gradient",
            },
            {
                name: "PHP",
                color: "pink-text-gradient",
            },
            {
                name: "CSS",
                color: "white-text-gradient",
            },
            {
                name: "MySQL",
                color: "pink-text-gradient",
            },
        ],
        image: AgW,
        source_code_link: "https://ag-audit.com/",

    },
    {
        name: "Ashraf Grisha System",
        description:
            "I created a web application using HTML, CSS, JavaScript, PHP, and MySQL for Ashraf Grisha Company. The web app was then transferred to a desktop application to streamline their internal processes. The system was designed to efficiently assign and manage tasks within the company. This project allowed me to showcase my proficiency in developing cross-platform applications and my ability to solve complex problems through software development.",
        tags: [
            {
                name: "HTML",
                color: "blue-text-gradient",
            },
            {
                name: "React",
                color: "green-text-gradient",
            },
            {
                name: "JS",
                color: "green-text-gradient",
            },
            {
                name: "PHP",
                color: "pink-text-gradient",
            },
            {
                name: "CSS",
                color: "white-text-gradient",
            },
            {
                name: "MySQL",
                color: "pink-text-gradient",
            },
        ],
        image: AgS,
        source_code_link: "https://github.com/esimpleway/ag_system",
    },
];

export { services, technologies, experiences, projects };