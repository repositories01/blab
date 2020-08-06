import React, { useState, FormEvent } from "react";
import {useHistory} from 'react-router-dom';
import PageHeader from "../../components/PageHeader";
import Input from "../../components/Input";
import warningIcon from "../../assets/images/icons/warning.svg";
import Textarea from "../../components/Texarea";
import Select from "../../components/Select";
import "./styles.css";
import api from "../../services/api";

function TeacherForm() {
  const history = useHistory();
  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: "", to: "" },
  ]);
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [bio, setBio] = useState("");
  const [subject, setSubject] = useState("");
  const [cost, setCost] = useState("");

  function addNewScheduleItem() {
    setScheduleItems([...scheduleItems, { week_day: 0, from: "", to: "" }]);
  }

  function handleCreateClass(e: FormEvent) {
    e.preventDefault();
    

    api.post('classes', {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost: Number(cost),
      schedule: scheduleItems

    }).then(()=>{
      history.push('/')
      alert('cadastro realizado')
    }).catch(() =>{
      alert('erro')
    })

  }

  function setScheduleItemValue(index: any, field: string, value: string) {
    const newArray = scheduleItems.map((item, index) => {
      if (index === index) {
        return {
          ...item,
          [field]: value,
        };
      }
      return item;
    });

    setScheduleItems(newArray);
  }

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incrível que você quer dar aulas"
        description="O primeiro passo é preencher o formulário"
      />

      <main>
        <form onSubmit={handleCreateClass}>
          <fieldset>
            <legend>Seus dados </legend>

            <Input
              name="name"
              label="Nome Completo"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <Input
              name="avatar"
              label="Foto"
              onChange={(e) => setAvatar(e.target.value)}
              value={avatar}
            />
            <Input
              name="whatsapp"
              label="Whatsapp"
              onChange={(e) => setWhatsapp(e.target.value)}
              value={whatsapp}
            />
            <Textarea
              name="bio"
              label="biografia"
              onChange={(e) => setBio(e.target.value)}
              value={bio}
            />
          </fieldset>

          <fieldset>
            <legend>Sobre a aula </legend>

            <Select
              name="subject"
              label="Matéria"
              onChange={(e) => setSubject(e.target.value)}  
              options={[
                { value: "Artes", label: "Artes" },
                { value: "Ingles", label: "Ingles" },
              ]}
            />
            <Input
              name="const"
              label="Custo da hora/aula"
              onChange={(e) => setCost(e.target.value)}
              value={cost}
            />
          </fieldset>
          <fieldset>
            <legend>
              Horários disponíveis
              <button type="button" onClick={addNewScheduleItem}>
                + Novo horário
              </button>
            </legend>

            {scheduleItems.map((e, index) => {
              return (
                <div key={e.week_day} className="schedule-item">
                  <Select
                    name="week_day"
                    label="Dias da semana"
                    value={e.week_day}
                    onChange={(e) =>
                      setScheduleItemValue(index, "week_day", e.target.value)
                    }
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
                  <Input
                    name="from"
                    label="Das"
                    type="time"
                    value={e.from}
                    onChange={(e) =>setScheduleItemValue(index, "from", e.target.value)    }
                  />
                  <Input
                    name="to"
                    label="Até"
                    type="time"
                    value={e.to}
                    onChange={(e) =>
                      setScheduleItemValue(index, "to", e.target.value)
                    }
                  />
                </div>
              );
            })}
          </fieldset>

          <footer>
            <p>
              <img src={warningIcon} />
              Importante <br />
              Preencha todos os dados
            </p>
            <button type="submit"> Salvar Cadastro</button>
          </footer>
        </form>
      </main>
    </div>
  );
}

export default TeacherForm;
