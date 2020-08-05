import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css'

function TeacherItem(){
return(
    <article className="teacher-item">
    <header>
      <img src="https://avatars1.githubusercontent.com/u/51326247?s=460&u=e7a5a275d8cc7aa91c48d94f1d3d944a8273c658&v=4" alt=""/>
      <div>
        <strong>Nome Professor</strong>
        <span>Inglês</span>
      </div>
    </header>

    <p>
      onaocnaosicnaincsaoiscacccccccccccccccccccccccccccccccccc
      <br /> 
      asccccccccccccccccsccccccccccccccscccccccccccccscsccccccccscsc
    </p>

    <footer>
      <p>
        Preço/hora
        <strong>50,00 </strong>
      </p>
      <button type="button">
         <img src={whatsappIcon} alt=""/>
         entrar em contato
      </button>
    </footer>
  </article>
);
}
export default TeacherItem;