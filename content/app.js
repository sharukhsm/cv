// CONTENT

const bodyCopy = {
  section_about_title: "About Me",
  section_about_p_1:
    "I’m a Software Engineer with over 4 years of professional experience, specializing in building scalable and efficient software systems across web, backend, and cloud platforms. I hold a Master’s degree in Information Technology from the University of Cincinnati.",
  section_about_p_2:
    "I thrive on solving complex engineering problems, whether it’s designing robust APIs, optimizing data flows, or automating infrastructure. Outside work, I enjoy building custom PCs, modifying Car's and Photography - anything that combines creativity with precision.",

  section_experience_title: "Experience",
  section_experience_p_1: "I have a proven track record in:",
  section_experience_li_1:
    "Designing and implementing RESTful APIs",
  section_experience_li_2:
    "Collaborating with cross-functional teams, including designers, backend developers, and project managers.",
  section_experience_li_3:
    "Developing backend systems integrated with SQL and NoSQL databases like MySQL and MongoDB",
  section_experience_li_4:
    "Automating infrastructure and deployment using AWS, Docker, and CI/CD tools like Jenkins",
  section_experience_li_5:
    "Improving system performance, data models, and scalability for global rollouts",
  section_experience_li_6:
    "Writing and maintaining end-to-end test frameworks with tools like Playwright and Postman",

  section_skills_title: "Skills",
  section_skills_p_1: "My key skills include:",
  section_skills_li_1:
    "Java, Python, JavaScript (ES6), TypeScript, Spring Boot, React, Node.js, Next.js, Express",
  section_skills_li_2:
    "AWS (EC2, S3, Lambda), Azure, Docker, Kubernetes, Jenkins, GitHub Actions",
  section_skills_li_3:
    "MySQL, SQL Server, PostgreSQL, MongoDB, DynamoDB",
  section_skills_li_4:
    "JUnit, Playwright, Postman",
  section_skills_li_5:
    "Git, Figma, REST APIs, GraphQL, Agile/Scrum, Data Structures & Algorithms",

  section_projects_title: "Projects",
  section_projects_p_1: "Some of the projects I have worked on include:",
  section_contact_title: "Contact Me",
  section_contact_p_1:
    "If you are interested in collaborating on development projects or want to discuss anything, feel free to reach out:",
  section_contact_li_1:
    "Email: [sharukhsm@gmail.com](mailto:sharukhsm@gmail.com)",
  section_contact_li_2:
    "GitHub: [github.com/sharukhsm](https://github.com/sharukhsm)",
  footer: "&copy; %YEAR% Mohamed Sharukh. All rights reserved.",
};
const projects = [
  {
    projectTitle: "Speed Eats",
    description:
      "Uber Eats but better! A food delivery app built using Redux, Node, Express, MongoDB",
    image: "dots.png",
    projectLink: "https://github.com/sharukhsm/SpeedEats",
  },
  {
    projectTitle: "Attendance tracker",
    description:
      "An attendance tracking app demonstrating CRUD operations with React hooks, and Axios.",
    image: "grotebeef.png",
    projectLink: "https://nbzmr.csb.app/",
  },
  {
    projectTitle: "College Enquiry Bot",
    description:
      "A cloud-based chatbot for college inquiries Built using Google Dialogflow. Responds to student queries on school information.",
    image: "outgun.png",
    projectLink:
      "https://bot.dialogflow.com/3f7ac4a5-9674-441e-98aa-3507f6503d97",
  },
  {
    projectTitle: "Meal Planner",
    description:
      "Try this when you have a hard time deciding what to eat for the next meal.",
    image: "js-synth.png",
    projectLink: "https://sharukhsm.github.io/RandomFoodGenerator/",
  },
  {
    projectTitle: "Notes",
    description:
      "Enjoy journaling? Give this straightforward note-taking app a try!",
    image: "localhost-list.png",
    projectLink: "https://qqcj0.csb.app/",
  },
  {
    projectTitle: "Weather App",
    description: "Real-time weather app based on Google Maps and Weather API",
    image: "palaea.png",
    projectLink: "https://github.com/sharukhsm/Weather-project",
  },
];

window.addEventListener("DOMContentLoaded", () => {
  let year = new Date();
  // BODY COPY
  document.querySelector("nav").innerHTML += `<ul></ul>`;
  Object.keys(bodyCopy)
    .filter((key) => key.indexOf("title") > -1)
    .forEach((key) => {
      document.querySelector("nav ul").innerHTML += `<li><a href="#${bodyCopy[
        key
      ]
        .split(" ")[0]
        .toLowerCase()}">${bodyCopy[key].split(" ")[0]}</a></li>`;
      let newSection = document.createElement("section");
      newSection.id = bodyCopy[key].split(" ")[0].toLowerCase();
      newSection.innerHTML += `<h2>${bodyCopy[key]}</h2>`;
      Object.keys(bodyCopy)
        .filter((childKey) => childKey.indexOf(key.split("_")[1]) > -1)
        .filter((childKey) => childKey.indexOf("title") === -1)
        .forEach((childKey) => {
          let txt = bodyCopy[childKey];
          if (txt.indexOf("%YEAR%") > -1) {
            txt = txt.replace("%YEAR%", year.getFullYear() - 2016);
          }
          if (childKey.split("_")[2] === "li") {
            if (newSection.innerHTML.indexOf("<ul>") === -1) {
              newSection.innerHTML += "<ul></ul>";
            }
            if (txt.indexOf("](") > -1) {
              let ckArr = [
                ...txt.split("](")[0].split("["),
                txt.split("](")[1].split(")")[0],
              ];
              txt = `${ckArr[0]}<a href="${ckArr[2]}">${ckArr[1]}</a>`;
            }
            newSection.querySelector("ul").innerHTML += `<${
              childKey.split("_")[2]
            }>${txt}</${childKey.split("_")[2]}>`;
          } else {
            newSection.innerHTML += `<${childKey.split("_")[2]}>${txt}</${
              childKey.split("_")[2]
            }>`;
          }
          if (!document.querySelector("section")) {
            document.querySelector("header").after(newSection);
          } else {
            document
              .querySelectorAll("section")
              [document.querySelectorAll("section").length - 1].after(
                newSection
              );
          }
        });
    });

  document.querySelector("#projects").innerHTML += `<div></div>`;
  projects.forEach((el, i) => {
    document.querySelector(
      "#projects div"
    ).innerHTML += `<div class="card project">
			<div class="card-img" style="background-image: url('img/${el.image}');" alt="${el.projectTitle}"></div>
			<div class="card-body">
				<h5 class="card-title">${el.projectTitle}</h5>
				<p class="card-text">${el.description}</p>
				<a href="${el.projectLink}" class="card-btn">Visit Project</a>
			</div>
		</div>`;
  });

  document.querySelector("footer").innerHTML = bodyCopy.footer.replace(
    "%YEAR%",
    year.getFullYear()
  );

  // ==========
  // All content is now on screen
  // ==========

  // Add smooth scrolling for nav links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Add link highlighting
  const sections = [...document.querySelectorAll("section")];
  const navUl = document.querySelector("nav ul");
  function getClosestSection() {
    const sectionTops = sections.map((s) => s.getBoundingClientRect().y);
    const paddingTop = 48;
    const current = sectionTops.reduce((prev, curr) =>
      Math.abs(curr - paddingTop) < Math.abs(prev - paddingTop) ? curr : prev
    );
    return sections.filter((s) => s.getBoundingClientRect().y === current)[0];
  }
  window.addEventListener("scroll", () => {
    if (window.innerWidth >= 700) {
      const prevCurrent = navUl.querySelector(".current");
      const trueCurrent = navUl.querySelector(
        `a[href="#${getClosestSection().id}"]`
      );
      if (!!prevCurrent && prevCurrent !== trueCurrent) {
        prevCurrent.classList.remove("current");
      }
      trueCurrent.classList.add("current");
    }
  });
});
