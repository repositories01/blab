import styled from 'styled-components';


export const Profile = styled.div`
display: flex;

margin-bottom: 20px;
justify-content: space-around;



@media(max-width: 800px) {
    flex-direction: column;
  }
`;

export const Avatar = styled.div`
display:flex;
align-items:center;
margin-top: 15px;
margin-right: auto;
margin-bottom: 15px;

img{
    border-radius: 50%;
    height: 80px;
    width: 80px;
    margin-right: 10px;
}

span{
    font: 500 2.5rem Archivo;
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

