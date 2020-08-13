import React from "react";
import './styles.css';

function Login() {
  return (
    <div id="page-login" className="container">
      <main>
        <form>
          <fieldset>
              <legend className='title'>Fazer Login</legend>
            <input name="email" placeholder="E-mail" />
            <input name="password" placeholder="Senha" /> 
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
