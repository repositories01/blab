import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

import logoImg from "../../assets/images/logo.svg";
import landingImg from "../../assets/images/landing.svg";
import stydyIcon from "../../assets/images/icons/study.svg";
import giveClassesIcon from "../../assets/images/icons/give-classes.svg";
import purpleHeartIcon from "../../assets/images/icons/purple-heart.svg";
import api from "../../services/api";

function Landing() {
  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    api.get('connections').then(res =>{
      const {total} = res.data;
      setTotalConnections(total);
    })
  }, []);

  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logoImg} alt="" />
          <h2>Sua Plataforma de estudos online</h2>
        </div>
        <img src={landingImg} alt="" className="hero-image" />
        <div className="buttons-container">
          <Link to="/study" className="study">
            <img src={stydyIcon} alt="Estudar" />
            Estudar
          </Link>

          <Link to="/give-classes" className="give-classes">
            <img src={giveClassesIcon} alt="Dar Aula" />
            Dar Aula
          </Link>
        </div>
        <span className="total-connections">
          Total de {totalConnections} conexões já realizadas
          <img src={purpleHeartIcon} alt="coração" />
        </span>
      </div>
    </div>
  );
}

export default Landing;
