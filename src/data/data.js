const projects = [
  {
    id: "azri001",
    url: "https://rsuripsumoharjo-mockup.netlify.app/",
    type: "Website",
    title: "RS. Urip Sumoharjo",
    imageLink: "Web1",
    text: [
      "A website design for a local hospital in Bandar Lampung. Inspired by Mayo Clinic's website. A very simple design, easy-to-use, informative but not too crowded with too many useless details.",
      " The core of this website design is ReactJS, supported by Formik, react-router-DOM, and Yup",
    ],
    images: ["urip-website", "urip-tablet", "urip-phone"],
  },
  {
    id: "azri002",
    url: "https://azribook.netlify.app/",
    type: "Website",
    title: "Azribook",
    imageLink: "Web2",
    text: [
      "This website is based on Facebook’s website design, to showcase my ability in accessing and processing data with Rest API. ",
      "The data is thanks to Dummyapi.io whose providing free ready to use API Service filled with dummy data. ",
      " I’m using React JS as the core of this web design with the help of Axios, Figma, and React router DOM ",
    ],
    images: ["azribook-website", "azribook-tablet", "azribook-phone"],
  },
  {
    id: "azri003",
    url: "https://pancakepluspasta.netlify.app/",
    type: "Website",
    title: "Pancake plus Pasta",
    imageLink: "Web3",
    text: [
      "A simple e-commerce website using Gatsby JS with the support of Contentful to manage the website's content which later accessed using GraphQL ",
      "Since the website is very simple I chose to use useContext and useReducer instead of Redux",
    ],
    images: ["P3-website", "P3-tablet", "P3-phone"],
  }, {
    id: "azri004",
    url: "https://azriblog.000webhostapp.com/",
    type: "Website",
    title: "Azriblog",
    imageLink: "Web4",
    text: [
      "I always thought Laravel is only used for back-end side of development. But after learning from a very professional, very thorough Web Programming UNPAS tutorial on Laravel, I realized that it's actually very good for a simple front-end side of web development ",
      "Based on that tutorial, I created this blog website, with the help of the good old Bootstrap and MySQL, show casing my laravel implementation on routing, templating HTML, and authentication",

    ],
    images: ["azriblog-website", "azriblog-tablet", "azriblog-phone"],
  },
]

const aboutData = [
  {
    id: "about01",
    title: "Development Tools",
    tools: [
      "Javascript/Css/Html",
      "Java",
      "ReactJS",
      "React Native",
      "NodeJS",
      "Express",
      "GatsbyJS",
      "PHP",
      "Laravel",
      "MySQL"
    ],
  },
  {
    id: "about02",
    title: "Design Tools",
    tools: [
      "Photoshop",
      "Material-UI",
      "Figma",
      "Sketchup",
      "3dsMax",
      "AutoCAD",
    ],
  },
]
export { projects, aboutData }
