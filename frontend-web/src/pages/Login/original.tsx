import React from "react";
import "./styles.css";

function Login() {
  return (
    <div id="page-login" className="container">
      <main>
        <form>
          <fieldset>
            <legend className="title">Fazer Login</legend>
            <input
              type="text"
              className="input"
              name="email"
              placeholder="E-mail"
            />
            <input
              type="password"
              className="input"
              name="password"
              placeholder="Senha"
            />
          </fieldset>

          <fieldset className="password-remember">
            <input type="checkbox" />
            <label> Lembrar-me </label>
            <a href="#">Esqueci minha senha</a>
          </fieldset>

          <fieldset>
            <button className="button-login" type="button">
              Entrar
            </button>
          </fieldset>
        </form>
        <footer className="singup-link">
          <span>Não tem conta?</span> <br />
          <a href="">Cadastre-se </a>
        </footer>
      </main>
    </div>
  );
}

export default Login;
