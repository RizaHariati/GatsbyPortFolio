const projects = [
  {
    id: "azri001",
    url: "https://rsuripsumoharjo-model.netlify.app/",
    type: "Website",
    title: "RS. Urip Sumoharjo",
    imageLink: "Web1",
    text: [
      "A website design for a local hospital in Bandar Lampung. Inspired by Mayo Clinic's website. A very simple design, easy-to-use, informative but not too crowded with too many useless details.",
      "The core of this website design is Next.JS, supported by Redux ToolkitFormik, Yup, React leaflet and Tailwinds",
    ],
    images: ["urip-website", "urip-phone"],
  },
  {
    id: "azri002",
    url: "https://azribook.netlify.app/",
    type: "Website",
    title: "Azribook",
    imageLink: "Web2",
    text: [
      "This website is based on Facebook’s website design, mainly to showcase my ability in accessing and processing data with Rest API. ",
      "Since the focus is on the API only some of the elements, related to API are functional and the rest is just dummies ",
      "The data is thanks to DUMMYAPI.IO whose providing free ready to use API Service filled with dummy data",
      " I’m using React JS as the core of this web design with the help of Axios, Figma, and React router DOM ",
    ],
    images: ["azribook-website", "azribook-phone"],
  },
  {
    id: "azri003",
    url: "https://pancakepluspasta.netlify.app/",
    type: "Website",
    title: "Pancake plus Pasta",
    imageLink: "Web3",
    text: [
      "A simple e-commerce website where you can order as a guest or as a member. Using a map and a phone number to identify the customer. After register, customer can put the food and beverages into the cart list, and then put the order in. And paying in cash",
      "This website uses Gatsby JS with the support of Contentful to manage the website's content which later accessed using GraphQL ",
      "Since the website is very simple I chose to use useContext and useReducer instead of Redux",
    ],
    images: ["P3-website", "P3-phone"],
  },
  {
    id: "azri004",
    url: "https://azriblog.000webhostapp.com/",
    type: "Website",
    title: "Azriblog",
    imageLink: "Web4",
    text: [
      "I always thought Laravel is only used for back-end side of development. But after learning from a very professional, very thorough Web Programming UNPAS tutorial on Laravel, I realized that it's actually very good for a simple front-end side of web development ",
      "Based on that tutorial, I created this blog website, with the help of the good old Bootstrap and MySQL, show casing my laravel implementation on routing, templating HTML, and authentication",
    ],
    images: ["azriblog-website", "azriblog-phone"],
  },

  {
    id: "azri005",
    url: "https://sudahnonton.000webhostapp.com/",
    type: "Website",
    title: "SudahNonton-API",
    imageLink: "Web5",
    text: [
      "This is a project for my own amusement. I love watching movies and tv shows. But I tend to forget, whether I have watched the show or not. So using Laravel 8, I created the database website. This web also serves as REST API provider, so I can consume the data using other data that I created next. The design is based on the Netflix website design. All the data is thanks to The Movie DB",
    ],
    images: ["sudahnonton-api-website", "sudahnonton-api-phone"],
  },
  {
    id: "azri006",
    url: "https://expo.dev/@rizahariati/sudahnonton-client",
    type: "Website",
    title: "SudahNonton-Client",
    imageLink: "Web6",
    text: [
      "I watched so many movies and tv shows over the years, so when I'm about to watch a new show, I want to check whether I've already watched it or not. That's what this app is for. With my phone, I can check anywhere, anytime, all of those shows. \n This is an Android App that can access the database from the Rest API that I've created earlier. I can also add a new show, put shows on my watch list, if I want to watch it again. Other users can also use this app if they are looking for ideas of what movies or tv shows they are going to watch next. All the data is thanks to The Movie DB",
    ],
    images: [
      "sudahnonton-client-3-phone",
      "sudahnonton-client-2-phone",
      "sudahnonton-client-1-phone",
    ],
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
      "MySQL",
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
