import React from "react";
import { Link } from "react-router-dom";
import "../sass/portfolio.scss";
import Project from "./Project.jsx";
import portfolio from "../images/portfolio.png";
import weather from "../images/weather.png";
import todo from "../images/todo.png";
import amazon from "../images/amazon.png";
import dashboard from "../images/dashboard.png";
const projects = [
  {
    title: "Weather App",
    linkProject: "https://weather-app-fb291.web.app",
    linkCode: "https://github.com/FernandoAltamirano/weather-app",
    image: weather,
  },
  {
    title: "ToDo App",
    linkProject: "https://todoapp-fernando.herokuapp.com",
    linkCode: "https://github.com/FernandoAltamirano/todo-app",
    image: todo,
  },
  {
    title: "Social Media Dashboard",
    linkProject: "https://fernandoaltamirano.github.io/social-media-dashboard/",
    linkCode: "https://github.com/FernandoAltamirano/social-media-dashboard",
    image: dashboard,
  },
  {
    title: "Amazon Clone",
    linkProject: "https://clone-46db0.web.app",
    linkCode: "https://github.com/FernandoAltamirano/Amazon-clone/tree/master",
    image: amazon,
  },
];
const Portfolio = () => {
  return (
    <div id="portfolio">
      <div className="container">
        <div className="bg">
          <h1 className="title animate__animated animate__fadeIn">
            PORTAFOLIO
          </h1>
        </div>
        <div className="image animate__animated animate__fadeIn">
          <img src={portfolio} alt="" />
        </div>
        <div className="container-projects">
          {projects.map((project) => (
            <Project
              key={project.linkCode}
              title={project.title}
              linkCode={project.linkCode}
              linkProject={project.linkProject}
              image={project.image}
            />
          ))}
          <a
            target="_blank"
            href="https://github.com/FernandoAltamirano?tab=repositories"
            className="button more"
          >
            <span>View more</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
