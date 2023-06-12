import breakpointImage from "./resources/Breakpoint_feature.png";
import grutImage from "./resources/ic_launcher-web.png";
import weddingImage from "./resources/invitation.png";
import portfolioV1Image from "./resources/portfolioV1.png";

const categories = ["Personal", "University"];

class project {
  constructor(
    name,
    category,
    year,
    img,
    githubURL,
    websiteURL,
    description,
    summery
  ) {
    this.name = name;
    this.category = category;
    this.year = year;
    this.img = img;
    this.githubURL = githubURL;
    this.websiteURL = websiteURL;
    this.description = description;
    this.summery = summery;
  }
}

export const projects = [
  new project(
    "Wedding Invitation",
    categories[0],
    2023,
    weddingImage,
    "https://github.com/Tanya9kin/wedding-invite",
    "https://tanyandaniel.netlify.app/",
    "Digital wedding invitation made using React, deployed on Nelify. With the ability to RSVP from the site, the backend is using the Netlify built in form recognition.",
    "Digital wedding invitation"
  ),
  new project(
    "Portfolio V1",
    categories[0],
    2023,
    portfolioV1Image,
    "https://github.com/Tanya9kin/portfolio",
    "https://tanyadeveykin.netlify.app/",
    "First Version of portfolio made using the knowledge of HTML, CSS and JS I knew at the time.",
    "First Version of portfolio"
  ),
  new project(
    "BreakPoint",
    categories[1],
    2018,
    breakpointImage,
    null,
    "https://drive.google.com/file/d/1UZVXgDEq7BIr8WTecf35kNU6u5sfPC5u/view?usp=sharing",
    "An android app developed for a coffee spot at the CS faculty at the Technion",
    "An android app developed for a coffee spot at the CS faculty at the Technion"
  ),
  new project(
    "GRUT",
    categories[1],
    2019,
    grutImage,
    "https://github.com/Tanya9kin/GRUT",
    "https://drive.google.com/file/d/1rRUSxhkSI2pSmSEJKsmqNqrWCbtwp5Bt/view?usp=sharing",
    "GRUT is an IoT project, it is a robot that drives around checking how plants are doing via different sensors attached to it. It then sends the data to a server on Azure that updates an Android app about the walefatre of the plants.",
    "GRUT is an IoT project, that helps in caring for houseplants"
  ),
];
