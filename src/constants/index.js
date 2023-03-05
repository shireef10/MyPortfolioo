import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    php,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
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
        title: "Web Developer",
        icon: web,
    },
    // {
    //     title: "React Native Developer",
    //     icon: mobile,
    // },
    {
        title: "Backend Developer",
        icon: backend,
    },
    // {
    //     title: "Content Creator",
    //     icon: creator,
    // },
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

    // {
    //     name: "TypeScript",
    //     icon: typescript,
    // },
    // {
    //     name: "React JS",
    //     icon: reactjs,
    // },
    // {
    //     name: "Redux Toolkit",
    //     icon: redux,
    // },
    // {
    //     name: "Tailwind CSS",
    //     icon: tailwind,
    // },
    // {
    //     name: "Node JS",
    //     icon: nodejs,
    // },
    // {
    //     name: "MongoDB",
    //     icon: mongodb,
    // },
    // {
    //     name: "Three JS",
    //     icon: threejs,
    // },
    {
        name: "git",
        icon: git,
    },
    // {
    //     name: "figma",
    //     icon: figma,
    // },
    // {
    //     name: "docker",
    //     icon: docker,
    // },
];

const experiences = [
    {
        title: "Web Developer",
        company_name: "SimpleWAy",
        icon: SimpleWAy,
        iconBg: "#383E56",
        date: "Nov 2022 - Present",
        points: [
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
            "A mobile app developed using Flutter. It uses APIs to scan medicines and prescriptions to provide users with quick and easy access to important information.",
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
            "SimpleWay Website: The official website for SimpleWay For Digital Solution, designed and built by me",
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
        source_code_link: "https://github.com/",
    },
    {
        name: "Ashraf Grisha Website",
        description:
            "A complete web design and development project for Ashraf Grisha Company.",
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
        source_code_link: "https://github.com/",
    },
    {
        name: "Ashraf Grisha System",
        description:
            "A web-based system aimed at streamlining the workflow and tasks of Ashraf Grisha Company. Developed to assign and manage tasks efficiently",
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
        source_code_link: "https://github.com/",
    },
];

export { services, technologies, experiences, projects };