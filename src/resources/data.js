const categories = ["Personal", "University"];

class project {
  constructor(name, category, year, img, githubURL, websiteURL, description) {
    this.name = name;
    this.category = category;
    this.year = year;
    this.img = img;
    this.githubURL = githubURL;
    this.websiteURL = websiteURL;
    this.description = description;
  }
}

export const projects = [
  new project(
    "Wedding Invitation",
    categories[0],
    2023,
    null,
    "https://tanyandaniel.netlify.app/",
    "Digital wedding invitation made using React, deployed on Nelify. With the ability to RSVP from the site, the backend is using the Netlify built in form recognition."
  ),
  new project(
    "Portfolio V1",
    categories[0],
    2023,
    null,
    "https://tanyadeveykin.netlify.app/",
    "First Version of portfolio made using the knowledge of HTML, CSS and JS I knew at the time."
  ),
  new project(
    "BreakPoint",
    categories[1],
    2018,
    "./resources/Breakpoint_feature.png",
    null,
    "An android app developed for a coffee spot at the CS faculty at the Technion"
  ),
  new project(
    "GRUT",
    categories[1],
    2019,
    "./resources/ic_launcher-web.png",
    "https://github.com/Tanya9kin/GRUT",
    null,
    "GRUT is an IoT project, it is a robot that drives around checking how plants are doing via different sensors attached to it. It then sends the data to a server on Azure that updates an Android app about the walefatre of the plants."
  ),
];
