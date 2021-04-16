import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import "../sass/home.scss";
const Home = () => {
  useEffect(() => {
    new Typed(".typed", {
      strings: [
        "<i >Desarrollador Frontend</i>",
        "<i >Futuro Ingeniero de Sistemas</i>",
        "<i >Estudiante en la UNMSM</i>",
        "<i >Apasionado por el mundo de la tecnología </i>",
      ],

      typeSpeed: 60,
      startDelay: 300,
      backSpeed: 30,
      smartBackspace: true,
      shuffle: false,
      backDelay: 1500,
      loop: true,
      loopCount: false,
      showCursor: true,
      cursorChar: "|",
      contentType: "html",
    });
  }, []);
  return (
    <section id="home">
      <div className="container ">
        <h1 className="animate__animated animate__bounceInRight">
          Hola, <br />
          soy <span>Fernando Altamirano</span>
        </h1>
        <div className="container-typed animate__animated animate__bounceInRight">
          <p className="typed text"></p>
        </div>
        <Link
          to="/about"
          className="button animate__animated animate__bounceIn"
        >
          <span>Comencemos</span>
          <ArrowForwardIcon />
        </Link>
      </div>
    </section>
  );
};

export default Home;
