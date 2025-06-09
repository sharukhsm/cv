// CONTENT

const bodyCopy = {
  section_about_title: "About Me",
  section_about_p_1:
    "I am a Software engineer with 4 years of commercial experience, specializing in creating engaging and responsive web applications. I'm a recent Graduate student at the University of Cincinnati. I ❤️ problem solving, photography and building computers.",
  section_about_p_2:
    "My work is focused on delivering responsive and lightweight solutions, ensuring seamless user experiences across various devices and browsers. I take pride in documenting each project meticulously, enabling easy maintenance and scalability for your website or web application as your company grows.",

  section_experience_title: "Experience",
  section_experience_p_1: "I have a proven track record in:",
  section_experience_li_1:
    "Creating pixel-perfect and responsive user interfaces using React, JavaScript, HTML and CSS.",
  section_experience_li_2:
    "Collaborating with cross-functional teams, including designers, backend developers, and project managers.",
  section_experience_li_3:
    "Building data visualizations that present complex information in an intuitive and visually appealing manner.",
  section_experience_li_4:
    "Optimizing website performance to achieve faster loading times and better user engagement.",
  section_experience_li_5:
    "Integrating custom designs into content management systems (CMS) like Sitecore.",
  section_experience_li_6:
    "Ensuring accessibility standards (WCAG) are met to make web content inclusive for all users.",

  section_skills_title: "Skills",
  section_skills_p_1: "My key skills include:",
  section_skills_li_1:
    "Proficient in HTML, CSS, and JavaScript, with a focus on modern frontend frameworks like React and Vue.js.",
  section_skills_li_2:
    "Experience with CSS preprocessors (e.g., Sass) to streamline and organize stylesheets.",
  section_skills_li_3:
    "Familiarity with version control systems like Git for collaborative development.",
  section_skills_li_4:
    "Knowledge of responsive design principles and mobile-first development.",
  section_skills_li_5:
    "Understanding of SEO best practices to optimize website visibility in search engines.",
  section_skills_li_6:
    "Ability to work with design tools such as Figma to interpret and implement UI/UX designs.",
  section_skills_li_7:
    "Continuous learning and keeping up-to-date with the latest trends and technologies in full stack development.",

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
