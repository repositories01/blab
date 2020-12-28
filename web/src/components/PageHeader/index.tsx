import React, { useCallback } from "react";
import { Link } from "react-router-dom";

import { useAuth } from "../../hooks/auth";

import { FiPower } from "react-icons/fi";
import logoImg from "../../assets/images/logo.png";
import backIcon from "../../assets/images/icons/back.svg";

import "./styles.css";
import { Button, Profile } from "./style";

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
  const { user, signOut } = useAuth();

  return (
    <header className="page-header">
      <div className="top-bar-container">
        <Link to={to === "/study" ? `${to}` : "/"}>
          <img src={backIcon} alt="Voltar" />
        </Link>

        <img src={logoImg} alt="blab" />

        <Link className="link-name" to={`${to}`}>
          <span>{linkName}</span>
        </Link>
        {user && (
          <>
          {console.log(user)}
            <Button type="button" onClick={signOut}>
              <FiPower />
            </Button>

            <Profile></Profile>
          </>
        )}
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
