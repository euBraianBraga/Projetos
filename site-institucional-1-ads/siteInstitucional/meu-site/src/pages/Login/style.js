import styled from "styled-components";

export const DivContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  border-style: none;
`;

export const DivImagem = styled.div`
  background-color: #f2d5c5;
  width: 70%;
  height: 100%;
  height: 100vh;

  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 85%;
    height: 100%;
  }
`;

export const DivFormulario = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 99vh;
  align-items: center;
`;

export const DivLogo = styled.div`
  margin-right: 26.5vw;
`;

export const DivBemVindo = styled.div`
  margin-top: 100px;
`;

export const DivEmail = styled.div`
    margin-top: 15%;
  input {
    width: 100%;
    height: 4vh;
    border-radius: 40px;
    padding-left: 4%;
    border-style: double;
    outline: 0;
    border-color: #EA6E90;
  }

  label {
      color: #EA6E90;
      font-size: 2.5vh;
  }
`;



export const DivSenha = styled.div`
    margin-top:3%;
  input {
    width: 100%;
    height: 4vh;
    border-radius: 40px;
    padding-left: 4%;
    outline: 0;
    border-radius: 100px;
    border-style: double;
    border-color: #EA6E90;
  }

  label {
      color: #EA6E90;
      font-size: 2.5vh;
  }
`;


export const DivButton = styled.div`


   
   button {
        cursor: pointer;
        margin-top: 10%;
        width:8vw;
        padding: 3%;
        font-size: 15px;
        color: #FFF;
        background-color: #EA6E90;
        border-radius: 100px;
        border-style: none;
        outline: 0;
   }
           
`;


export const DivFormularioGeral = styled.div`

   margin-top:15%;
`;