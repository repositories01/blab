import React from "react";
import { Link } from "react-router-dom";

import logoImg from "../../assets/images/logo.png";
import backIcon from "../../assets/images/icons/back.svg";

import "./styles.css";

interface PageHeaderProps {
  linkName?: string;
  title: string;
  to?: string;
  description?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  description,
  to,
  linkName,
  title,
  children,
}) => {
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <Link to={ to === '/study' ? `${to}` : '/' }>
          <img src={backIcon} alt="Voltar" />
        </Link>

        <img src={logoImg} alt="Proffy" />
        <Link className="link-name" to={`${to}`}>
          <span>{linkName}</span>
        </Link>
      </div>

      <div className="header-content">
        <strong>{title}</strong>
        {description && <p>{description}</p>}

        {children}
      </div>
    </header>
  );
};

export default PageHeader;
