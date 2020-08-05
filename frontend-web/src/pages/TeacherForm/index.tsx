import React from "react";
import PageHeader from "../../components/PageHeader";
import './styles.css'

function TeacherForm() {
  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incrível que você quer dar aulas"
        description="O primeiro passo é preencher o formulário"
      />

      <main>
        <fieldset>
          <legend>Seus dados </legend>

          <div className="input-block">
            <label htmlFor="name">Nome Completo</label>
            <input type="text" id="name" />
          </div>

          <div className="input-block">
            <label htmlFor="avatar">Foto</label>
            <input type="text" id="avatar" />
          </div>

          <div className="input-block">
            <label htmlFor="whatsapp">Whatsapp</label>
            <input type="text" id="whatsapp" />
          </div>
        </fieldset>
      </main>
    </div>
  );
}

export default TeacherForm;
