// Change website animations
const animation = {
  // make it false to switch off fade-up animation
  animate: true,
  // animation playing duration
  duration: 750,
  // if false, animation plays everytime element comes on screen
  once: true,
};
// Change your display name on tha landing display
const header = {
  name: "Rajahni Fields",
};
const background = {
  // Options: Snow or Particle
  type: "Snow",
};
// Write a para about yourself here
// To update your image, go to './styles/images.css'
const section2title = "About Me";
const about = {
  paragraph:
    " My name is Rajahni fields, I am a up and coming web developer, and game developer. I starting coding to learn how to be a web developer,get into the IT field and become a better game developer.",
};
// Edit your skill and the percentage you know about it
// To Add a skill, copy any one below and paste it after the last comma
const skillsBar = [
  {
    name: "HTML5",
    faClass: "fab fa-html5",
  },

  {
    name: "Javascript",
    faClass: "fab fa-js",
  },
  {
    name: "SASS",
    faClass: "fab fa-sass",
  },
  {
    name: "Node",
    faClass: "fab fa-node",
  },

  {
    name: "Java",
    faClass: "fab fa-java",
  },

  {
    name: "Database",
    faClass: "fas fa-database",
  },

  {
    name: "Heroku",
    faClass: "fas fa-h-square",
  },
];
// Edit your projects, its name, your skills used to make it, and the url.
// You can omit freely anything if you dont have it
// To Add a Project, copy any one below and paste it after the last comma and increment the id's project number
const section3Title = "Past Projects";
const projects = [
  {
    // Add image in './styles/images.css' in #project1
    id: "project1",
    name: "Password Generator",
    skills: ["HTML, CSS, JS"],
    deploy: "https://neoblack91.github.io/password-generator-/",
    url: "https://github.com/neoblack91/password-generator-",
  },
  {
    // Add image in './styles/images.css' in #project2
    id: "project2",
    name: "Coding-Quiz",
    skills: ["HTML, CSS, JS"],
    deploy: "https://neoblack91.github.io/Coding-Quiz/",
    url: "https://github.com/neoblack91/Coding-Quiz",
  },
  {
    // Add image in './styles/images.css' in #project3
    id: "project3",
    name: "Day Planner",
    skills: ["HTML, CSS, JS"],
    deploy: "https://neoblack91.github.io/DayPlanner/",
    url: "https://github.com/neoblack91/DayPlanner",
  },
  {
    // Add image in './styles/images.css' in #project4
    id: "project4",
    name: "Note Taker",
    skills: ["HTML, CSS, JS"],
    deploy: "https://vast-falls-25965.herokuapp.com/",
    url: "https://github.com/neoblack91/Note-Taker",
  },
  {
    // Add image in './styles/images.css' in #project6
    id: "project5",
    name: "Burger Town",
    skills: ["HTML, CSS, JS"],
    deploy: "https://sleepy-headland-97443.herokuapp.com/",
    url: "https://github.com/neoblack91/burger",
  },
  {
    // Add image in './styles/images.css' in #project5
    id: "project6",
    name: "iSeePets (Project1)",
    skills: ["HTML, CSS, JS"],
    deploy: "https://streamingturtles.github.io/iSeePets/index.html",
    url: "https://github.com/neoblack91/iSeePets",
  },

  {
    // Add image in './styles/images.css' in #project6
    id: "project7",
    name: "Progressive Budget",
    skills: ["HTML, CSS, JS, Mongodb"],
    deploy: "https://morning-taiga-69555.herokuapp.com/",
    url: "https://github.com/neoblack91/Progressive-Budget",
  },
  {
    // Add image in './styles/images.css' in #project6
    id: "project8",
    name: "Team Profile Generator",
    skills: ["HTML, CSS, JS"],
    deploy: "",
    url: "https://github.com/neoblack91/Team-Profile-Generator",
  },
  {
    // Add image in './styles/images.css' in #project6
    id: "project9",
    name: "Workout Tracker",
    skills: ["HTML, CSS, JS, Mongodb"],
    deploy:
      "https://protected-bayou-60395.herokuapp.com/?id=605185dac716820015deaf9d",
    url: "https://github.com/neoblack91/workout-tracker",
  },
  {
    // Add image in './styles/images.css' in #project6
    id: "project10",
    name: "User Directory",
    skills: ["HTML, CSS, JS, Mongodb"],
    deploy: "https://neoblack91.github.io/User-Directory/",
    url: "https://github.com/neoblack91/User-Directory",
  },
  {
    // Add image in './styles/images.css' in #project6
    id: "project11",
    name: "Google Book Search",
    skills: ["HTML, CSS, JS, React"],
    deploy: "https://agile-lake-47503.herokuapp.com/",
    url: "https://github.com/neoblack91/React-Google-Books-Search",
  },
];
// Edit your Miscellaneous Activities, its name and the url.
// You can omit freely anything if you dont have it
// To Add a Activity, copy any one below and paste it after the last comma and increment the id's Miscellaneous number
// const section4Title = "Miscellaneous";
// const miscellaneous = [
//   {
//     // Add image in './styles/images.css' in #misc1
//     id: "misc1",
//     name: "Miscellaneous 1",
//     url: "https://github.com/kaustubhai",
//   },
//   {
//     // Add image in './styles/images.css' in #misc2
//     id: "misc2",
//     name: "Miscellaneous 2",
//     url: "https://github.com/kaustubhai",
//   },
//   {
//     // Add image in './styles/images.css' in #misc3
//     id: "misc3",
//     name: "Miscellaneous 3",
//     url: "https://github.com/kaustubhai",
//   },
// ];
// Contact form text, and Jotforms link
// To get your own jotform link, go to https://www.jotform.com/
// If you hacve the link already, paste it in the contactUrl below
const section5Title = "Get in Touch";
const contact = {
  pitch: "If you like what you send me a quick email.",
  copyright: "Rajahni Fields",
  contactUrl: "kid101291@hotmail.com",
};
// Paste your respective social media links. You can omit any if you dont have it
// Upload your resume in your drive, get the shaareable link and paste it in the resume section
const social = {
  github: "https://github.com/neoblack91",
  facebook: "",
  linkedin: "www.linkedin.com/in/rajahni-fields",
  instagram: "",
  resume:
    "https://docs.google.com/document/d/1dBrk5KRMCg2xIyV5z8cZChTMRJv9BXOiEW-OlaaIprY/edit",
};
// Dont change anything here
export {
  animation,
  header,
  background,
  about,
  skillsBar,
  projects,
  // miscellaneous,
  contact,
  social,
  section2title,
  section3Title,
  // section4Title,
  section5Title,
};
