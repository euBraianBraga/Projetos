import React from "react";
import * as S from "./style.js";
import { useHistory } from 'react-router-dom';
import imgFundo from "../../assets/imgFundoLogin.svg";
import logo from "../../assets/BraianHb.svg";
import bemvindo from "../../assets/Bem-Vindo.svg";
import api from "../../services/api.js";


export default function Login() {


    const hist = useHistory();

    async function handleLogin(){
        
        const email = document.getElementById('email').value;
        const senha = document.getElementById('senha').value;

        await api.post(`/login/logar?email=${email}&senha=${senha}`).then(res =>{
            hist.push('/');
        }).catch(error =>{
            if(error){
                console.log(error);
                alert('Credenciais invalidas');
            } else {
                alert('Problemas de conexão')
            }
        });
    }



  return (
    <>
      <S.DivContainer>
        <S.DivFormulario>
          <S.DivLogo>
            <img src={logo} alt="" />
          </S.DivLogo>
          <S.DivFormularioGeral>

          <S.DivBemVindo>
            <img src={bemvindo} alt="" />
          </S.DivBemVindo>
          <S.DivEmail>
            <label htmlFor="">Email</label>
            <input type="text" id="email" placeholder="Digite seu e-mail" />
          </S.DivEmail>
          <S.DivSenha>
            <label htmlFor="">Senha</label>
            <input type="password" id="senha" placeholder="Digite sua senha" />
          </S.DivSenha>
          <S.DivButton onClick={handleLogin}>
            <button >LOG IN</button>
          </S.DivButton>
          </S.DivFormularioGeral>

        </S.DivFormulario>
        <S.DivImagem>
          <img src={imgFundo} alt="Imagem divisoria do login" />
        </S.DivImagem>
      </S.DivContainer>
    </>
  );
}
