// Skills Icons
import htmlIcon from "./images/html.svg"
import cssIcon from "./images/css.svg"
import reactIcon from "./images/react.svg"
import jsIcon from "./images/javascript.svg"
import designIcon from "./images/design.svg"
import codeIcon from "./images/code.svg"

// Social Icon
import githubIcon from "./images/github.svg"
import instagramIcon from "./images/instagram.svg"

export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: "Jack",
  headerTagline: [
    //Line 1 For Header
    "Full Stack Web Dev",
    //Line 2 For Header
    "X",
    //Line 3 For Header
    "Software Engineer",
  ],
  //   Header Paragraph
  headerParagraph:
    "I'm Jack, a Software Engineer & Full Stack Web Developer based on the East Coast.",

  //Contact Email
  contactEmail: "henlowgg@gmail.com",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      title: "Date Night", //Project Title - Add Your Project Title Here
      para:
        "Welcome to Date Night. Date Night gives users an idea of what to do for their evening including an alcoholic drink, a meal recipe and a video game.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://github.com/henlowgg/Date-Night/blob/main/assets/images/date-night.jpg?raw=true",
      //Project URL - Add Your Project Url Here
      url: "https://henlowgg.github.io/Date-Night/",
    },
    {
      title: "E-Commerce Back-End", //Project Title - Add Your Project Title Here
      para:
        "This is a command line tool to create an E-Commerce-Backend project. It implements sequelize and express to manage the database and the server. It also implements the authentication, authorization and routes for the different pages.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://github.com/henlowgg/e-commerce-backend/blob/main/Assets/images/insomnia.png?raw=true",
      //Project URL - Add Your Project Url Here
      url: "https://github.com/henlowgg/e-commerce-backend",
    },
    {
      title: "Project Three", //Project Title - Add Your Project Title Here
      para:
        "The goal of this project was to develop a working password generator that can be used by any and all to create and save a secure password for any site they may need.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://github.com/henlowgg/Plus-Ultra-Password-Generator/blob/main/Assets/Images/preview.png?raw=true",
      //Project URL - Add Your Project Url Here
      url: "https://github.com/henlowgg/Plus-Ultra-Password-Generator",
    },

    /*
    If You Want To Add More Project just Copy and Paste This At The End
    ,{
        title: 'Project Five',
        para: 'Something Amazing',
        imageSrc: "",
        url: ''
    }
    */
  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne:
    "Having a strong foundation in Full Stack Development and programming principles, I have been able to become proficient in a variety of platforms, languages and embedded systems with an innate ability to learn and master new technologies.",
  aboutParaTwo:
    "Currently looking for a full-time Software Engineer or Full Stack Web Dev position.",
  aboutParaThree:
    "Because of coding, I am able to truly love what I do. I look forward to every opportunity to learn and grow daily with all of these new technologies constantly evolving!",
  aboutImage:
    "https://avatars.githubusercontent.com/u/89649109?s=400&u=c37a8752ed8d01927a3f9ed1ac676599c0b57407&v=4",

  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      img: htmlIcon,
      para:
        "< HTML5 = 90% />",
    },
    {
      img: cssIcon,
      para:
        "{ CSS: 100% }",
    },
    {
      img: jsIcon,
      para:
        "( JavaScript === 90% )",
    },
    {
      img: reactIcon,
      para:
        '"React": { 80% }',
    },
    {
      img: designIcon,
      para:
        "Adobe x Aseprite: 80%",
    },
    {
      img: codeIcon,
      para:
        "Python > PHP > C++ > SQL > Ruby > and many more..",
    },
  ],

  // End Skills Section --------------------------

  //   Promotion Section --------------------------

  promotionHeading: "01001010",
  promotionPara:
    "My past work experience and current ventures have molded me into the ideal engineer to be placed in any environment and succeed. The amount of effort, studying and constant hours in front of the computer screen have definitely paid off. I truly am looking forward to whatever adventure is coming up next! ",
  // End Promotion Section -----------------

  //   Contact Section --------------

  contactSubHeading: "Looking forward to hearing from you:",
  social: [
    // Add Or Remove The Link Accordingly
    { img: githubIcon, url: "https://github.com/henlowgg" },
    {
      img: instagramIcon,
      url: "https://www.instagram.com/henlowgg",
    },
  ],


}

