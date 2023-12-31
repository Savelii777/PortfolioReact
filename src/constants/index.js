import {
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  company,
  reutov,
  projpeter,
  fingramota,
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Full stack разработчик",
    company_name: "Outsource компания",
    icon: company,
    iconBg: "#383E56",
    date: "Декабрь 2021 - Март 2022",
    points: [
        "Разработка обучающей платформы для медиков"
    ],
  },
  {
    title: "Full stack разработчик",
    company_name: "Outsource компания",
    icon: company,
    iconBg: "#E6DEDD",
    date: "Май 2022 - Октяюрь 2022",
    points: [
      "Разработка обучающей платформы для студентов военного университета",
    ],
  },
  {
    title: "Full stack разработчик",
    company_name: "Outsource компания",
    icon: company,
    iconBg: "#383E56",
    date: "Ноябрь 2022 - Февраль 2023",
    points: [
      "Разработка интернет магазина для ООО 'КопирТехСервис' ",
    ],
  },
  {
    title: "Frontend разработчик",
    company_name: "Yandex Practicum",
    icon: company,
    iconBg: "#E6DEDD",
    date: "Сентябрь 2022 - Сентябрь 2023",
    points: [
      "Обучение на Frontend разработчик Yandex Practicum",
    ],
  },
  {
    title: "Full stack разработчик",
    company_name: "Outsource компания",
    icon: company,
    iconBg: "#E6DEDD",
    date: "Август 2023 - Нояюрь 2023",
    points: [
      "Разработка модуля для обучающей платформы регионального центра Кузбасса",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Обучающая платформа доктора Реутова",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "Laravel",
        color: "blue-text-gradient",
      },
      {
        name: "Vue.js",
        color: "green-text-gradient",
      },
      {
        name: "Scss",
        color: "pink-text-gradient",
      },
    ],
    image: reutov,
    source_code_link: "https://github.com/Savelii777/reutov",
  },
  {
    name: "Обучающая платформа для студентов военного университета",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "Laravel",
        color: "blue-text-gradient",
      },
      {
        name: "Vue.js",
        color: "green-text-gradient",
      },
      {
        name: "Scss",
        color: "pink-text-gradient",
      },
    ],
    image: projpeter,
    source_code_link: "https://github.com/Savelii777/projPeter",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "Laravel",
        color: "blue-text-gradient",
      },
      {
        name: "Nuxt.js",
        color: "green-text-gradient",
      },
      {
        name: "Vue.js",
        color: "pink-text-gradient",
      },
      {
        name: "Scss",
        color: "pink-text-gradient",
      },
      {
        name: "Pug",
        color: "pink-text-gradient",
      },
    ],
    image: fingramota,
    source_code_link: "https://github.com/Savelii777/finProj",
  },
];

export { services, technologies, experiences, testimonials, projects };
