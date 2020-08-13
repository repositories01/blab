import React from "react";
import "./styles.css";

function Login() {
  return (
    <div id="page-login" className="container">
      <main>
        <form>
          <fieldset>
            <legend className="title">Fazer Login</legend>
            <input className="input" name="email" placeholder="E-mail" />
            <input className="input" name="password" placeholder="Senha" />
          </fieldset>
          <fieldset className="password-remember">
            <input className="check" name="password-remember" type="checkbox" />
            <label>Lembrar-me</label> 
            <a>Esqueci minha senha</a>
          </fieldset>

          <fieldset>
            <button className="button-login" type="button">
              Entrar
            </button>
          </fieldset>
        </form>
      </main>
    </div>
  );
}

export default Login;
