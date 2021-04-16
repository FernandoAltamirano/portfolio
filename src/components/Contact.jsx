import React from "react";
import "../sass/contact.scss";
import { Container, makeStyles } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import GitHubIcon from "@material-ui/icons/GitHub";
import MailIcon from "@material-ui/icons/Mail";
const useStyles = makeStyles(() => ({
  container: {
    width: "80vw",
    height: "100%",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },

  icon: {
    color: "var(--principal)",
    margin: "0 5px",
  },
}));
const Contact = () => {
  const styles = useStyles();
  return (
    <div className="contact">
      <div className="bg">
        <h1 className="title animate__animated animate__fadeIn">CONTACTO</h1>
      </div>
      <div className="container animate__animated animate__fadeIn">
        <Container maxWidth="sm" className={styles.container}>
          <a
            target="_blank"
            href="mailto:fernando.altamirano@unmsm.edu.pe"
            className="item"
          >
            <MailIcon />
            <h2>Enviame un correo</h2>
          </a>
          <a
            target="_blank"
            href="https://wa.me/51986175271?text=Hola! me interesa tu trabajo, porfavor comunicate conmigo :D"
            className="item"
          >
            <WhatsAppIcon />
            <h2>Enviame un WhatsApp</h2>
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/fernando-eli-altamirano-alca-51b717208/"
            className="item"
          >
            <LinkedInIcon />
            <h2>Contactame vía Linkedin</h2>
          </a>
          <a
            target="_blank"
            href="https://github.com/FernandoAltamirano"
            className="item"
          >
            <GitHubIcon />
            <h2>Visita mi GitHub</h2>
          </a>
        </Container>
      </div>
    </div>
  );
};

export default Contact;
