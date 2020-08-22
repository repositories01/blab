import React from "react";
import "./styles.css";

function Signup() {
    return (
        <div id="page-login" className="container">
            <main>
                <form>
                    <fieldset>
                        <legend className="title">Cadastro </legend>
                        <span className="subtitle">Preencha os dados abaixo<br/>
                        para começar.
                        </span>

                        <input
                            type="text"
                            className="input"
                            name="email"
                            placeholder="Nome"
                        />
                        <input
                            type="text"
                            className="input"
                            name="password"
                            placeholder="E-mail"
                        />
                        <input
                            type="password"
                            className="input"
                            name="password"
                            placeholder="Senha"
                        />

                    </fieldset>


                    <fieldset>
                        <button className="button-login" type="button">
                        Concluir cadastro
            </button>
                    </fieldset>
                </form>
              
            </main>
        </div>
    );
}

export default Signup;
