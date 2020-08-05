import React from "react";
import PageHeader from "../../components/PageHeader";
import Input from "../../components/Input";
import warningIcon from "../../assets/images/icons/warning.svg";
import Textarea from "../../components/Texarea";
import Select from "../../components/Select";
import "./styles.css";

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

          <Input name="name" label="Nome Completo" />
          <Input name="avatar" label="Foto" />
          <Input name="whatsapp" label="Whatsapp" />
          <Textarea name="bio" label="biografia" />
        </fieldset>

        <fieldset>
          <legend>Sobre a aula </legend>

          <Select 
          name="subject" 
          label="Matéria" 
          options={[
            {value: "Artes", label: 'Artes'},
            {value: "Ingles", label: 'Ingles'},
          ]}
          />
          <Input name="const" label="Custo da hora/aula" />
        </fieldset>
        <fieldset>
          <legend>
            Horários disponíveis 
            <button type="button">
            + Novo horário
          </button>
          </legend>

          <div className="schedule-item">
          <Select
            name="week_day"
            label="Dias da semana"
            options={[
              { value: "0", label: "Domingo" },
              { value: "1", label: "Segunda-Feira" },
              { value: "2", label: "Terça-Feira" },
              { value: "3", label: "Quarta-feira" },
              { value: "5", label: "Quita-Feira" },
              { value: "5", label: "Sexta-Feira" },
              { value: "6", label: "Sábado" },
            ]}
          />
          <Input name="from"  label="Das" type="time"/>
          <Input name="to"  label="Até" type="time"/>

          </div>
        
        </fieldset>

        <footer>
          <p>
            <img src={warningIcon} />
            Importante <br />
            Preencha todos os dados
          </p>
          <button type="button"> Salvar Cadastro</button>
        </footer>
      </main>
    </div>
  );
}

export default TeacherForm;
