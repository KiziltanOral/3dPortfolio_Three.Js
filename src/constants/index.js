import { soletanche, bilgeadam } from "../assets/images";
import {
    car,
    contact,
    estate,
    css,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    nextjs,
    nodejs,
    pricewise,
    react,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    csharp,
    sql,
    mysql,
    postgresql,
    netCore,
    python,
    java    
} from "../assets/icons";

export const skills = [
    {
        imageUrl: csharp,
        name: "C#",
        type: "Backend",
    },
    {
        imageUrl: netCore,
        name: ".Net Core",
        type: "Backend",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Backend",
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Backend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: sql,
        name: "SQL",
        type: "Database",
    },
    {
        imageUrl: mysql,
        name: "MYSQL",
        type: "Database",
    },
    {
        imageUrl: postgresql,
        name: "PostgreSQL",
        type: "Database",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Software Developer Intern",
        company_name: "BilgeAdam Technologies",
        icon: bilgeadam,
        iconBg: "#accbe1",
        date: "March 2023 - Still working",
        points: [
            "Developed various applications using the C# .NET Framework, focusing on efficient code structure and user-friendly interfaces. Enhanced skills in object-oriented programming and learned advanced features of C#.",
            "Worked on database design and management using SQL Server. Gained experience in creating, managing, and optimizing databases, as well as writing complex SQL queries.",
            "Actively participated in Agile development teams. Gained experience in Agile methodologies, including Scrum, and improved teamwork and communication skills.Implementing responsive design and ensuring cross-browser compatibility.",
            "Involved in software testing processes, identifying and fixing bugs.",
            "Used Git for version control to manage code changes. Learned how to effectively use branches, merge requests, and resolve conflicts in a collaborative coding environment."
        ],
    },
    {
        title: "Construction Manager",
        company_name: "Soletanche Bachy International LLC - Egypt",
        icon: soletanche,
        iconBg: "#fbc3bc",
        date: "October 2021 - September 2022",
        points: [
            "Managed various construction projects, overseeing all stages from inception to completion. Ensured projects were delivered on time, within budget, and to the required quality standards.",
            "Oversaw both micro and macro aspects of construction sites, ensuring efficient operation and coordination of all site activities, including logistics, material procurement, and workforce management.",
            "Maintained strict adherence to safety standards and building codes. Implemented quality control processes to ensure construction met or exceeded all regulatory and performance criteria.",
            "Led and motivated a diverse team of professionals, including engineers, architects, and laborers. Facilitated effective communication and collaboration between different departments and stakeholders.",
            "Managed budgets meticulously, focusing on cost-effective solutions without compromising quality. Negotiated with suppliers and contractors to secure favorable terms and optimize resource allocation."
        ],
    },    
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        name: 'WatchHub Cart Application',
        description: 'The WatchHub Cart Application is a sophisticated e-commerce shopping cart solution, meticulously crafted using C# .NET and integrated with React for a seamless and dynamic user experience. This application stands as a testament to modern web development practices, combining the robust backend capabilities of C# .NET with the responsive and interactive frontend design enabled by React.',
        link: 'https://watchhub.kiziltanoral.com',
    },
    {
        name: '3d Portfolio with Three.Js',
        description: 'The "3D Portfolio with Three.js" project is an innovative, interactive web-based portfolio designed to showcase creative work in a dynamic and engaging 3D environment. Leveraging the power of Three.js, a JavaScript library that facilitates WebGL rendering, this project transforms traditional portfolio presentations into an immersive, visually stunning experience.',
        link: 'https://3dportfolio.kiziltanoral.com',
    }, 
    {
        name: 'TalentFlow Human Resources Application',
        description: 'The TalentFlow Human Resources Application is an advanced HR management tool, expertly developed to streamline and optimize the complexities of human resources tasks and processes. The application features a sophisticated role-based access system, allowing for customized user experiences depending on the user role within the organization. This ensures enhanced security and tailored functionality for different levels of users, from HR managers to employees. The application also features a robust and intuitive dashboard, allowing users to easily view and manage all aspects of the HR process, including employee information, payroll, and benefits. The TalentFlow Human Resources Application is a powerful tool for any organization, providing a comprehensive solution for all HR needs. The application was developed using C# .NET and JS, and is hosted on Microsoft Azure. Login credentials are provided below for demo purposes. Username: barney.stinson@bilgeadam.com Password: P@ssword1',
        link: 'https://talentflow.kiziltanoral.com',
    }       
];