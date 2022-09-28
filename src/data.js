import { IoCodeWorking, IoLogoGithub, IoLogoGoogle } from "react-icons/io5";

export const Experience =[
    {
        id: 1,
        date: "2021-pursuing",
        iconsSrc: <IoCodeWorking/>,
        title: "MCA",
        grade: "-",
        description: "Sandip University Nashik",
    },
    {
        id: 2,
        date: "2016-2021",
        iconsSrc: <IoCodeWorking/>,
        title: "BCA",
        grade: "CGPA-6.17",
        description: "Yashwantrao Chavan Open University",
    },
    {
        id: 3,
        date: "2015-2016",
        iconsSrc: <IoCodeWorking/>,
        title: "HSC",
        grade: "50%",
        description: "From Nashik University",
    },
{
    id: 4,
    date: "2013-2014",
    iconsSrc: <IoCodeWorking/>,
    title: "SSC",
    grade: "52%",
    description: "From Nashik University",
},
];

export const Projects = [
    {
        Pid : 1,
        Pname : "Food Delivery App",
        PimageSrc: "https://firebasestorage.googleapis.com/v0/b/portfolio-a2774.appspot.com/o/food%20delivery.jpg?alt=media&token=29f2d41d-fcd8-4527-80de-e31c60a456ff",
        Ptechs: "React js, Tailwind Css",
        github: "https://github.com/Codemaaz/Food-delivery-app",
    },
]

export const SocialLinks =[
    {
        id: 1,
        iconsSrc: <IoLogoGithub className=" text-textBase text-3xl cursor-pointer"/>,
        name: "GitHub",
        link: "https://github.com/Codemaaz",
    },
    {
        id: 2,
        iconsSrc: <IoLogoGoogle className=" text-white text-3xl cursor-pointer"/>,
        name: "Gmail",
        link: "mailto:codemaaz1953@gmail.com",
    },
]