import React from "react";
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";
import "./styles.css";
import api from "../../services/api";

export interface Teacher {
  id: number;
  avatar: string;
  bio: string;
  cost: number;
  name: string;
  subject: string;
  whatsapp: string;
}

interface TeacherItemProps {
  teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {

  function createNewConnection(){
    api.post('connections',{
      user_id: teacher.id,
    })
  }
  return (
    <article className="teacher-item">
      <header>
        <img src={teacher.avatar} alt="" />
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>

      <p>{teacher.bio}</p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ {teacher.cost} </strong>
        </p>
        <button onclick={createNewConnection } type="button">
          <img src={whatsappIcon} alt="" />
          entrar em contato
        </button>
      </footer>
    </article>
  );
};
export default TeacherItem;
