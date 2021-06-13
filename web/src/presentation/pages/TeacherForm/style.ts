import styled from 'styled-components';


export const Profile = styled.div`
display: flex;
margin-bottom: 20px;
justify-content: space-between;


span{
   font: 600 2.5rem Archivo;
   margin-left:0px;
   margin-top: 50px;
   
}
    

@media(max-width: 800px) {
    flex-direction: column;
    align-items: center;

    span{
        margin-right: auto;
        margin-left: auto;
        margin-top:10px;
    }
  }
`;



export const ErrorMessage = styled.div`

display: flex;
align-items:center;
justify-content:center;
font: 700 2.5rem Archivo;

img{
    margin-right: 2rem;
}
`;


export const AvatarInput = styled.div`

position: relative; 
align-self: center; 
img{
  width: 100px;
  height: 100px;
  border-radius: 50%;
  }

label{
  position:absolute;
  width:30px;
  height:30px;
  background: var(  --color-primary-lighter);
  border-radius: 50%;
  right: 0px;
  bottom: 0px;
  cursor: pointer;
  border: 0;
  display:flex;
  align-items:center;
  justify-content: center;
  input{
    display: none;  
  }
  svg{
    height: 20px;
    width: 20px;
    color:  #ffff;
  }
}
`;