import logoLogin from '../../../logoLogin.png';
import React, { useState } from 'react';
import axios from 'axios';
import * as S from './styled';
import { useHistory } from 'react-router-dom';

function Login(Props) {
  const [ usuario, setUsuario ] = useState('');
  const [ senha, setSenha ] = useState('');
  const history = useHistory();

  function handlePesquisa() {
    axios.get('http://localhost:8000/loginAdmin').then( response => {
      const login = response.data
      const loginAdmin = []
      login.map((logins) => { 
        loginAdmin.push(logins.login)
      })

      const password = response.data
      const passwordAdmin = []
      password.map((psw) => { 
        passwordAdmin.push(psw.senha)
      })
      
      if (JSON.stringify(loginAdmin[0]) === JSON.stringify(usuario) && JSON.stringify(passwordAdmin[0]) === JSON.stringify(senha)) {
        history.push('/Home')
      } else {
        window.alert('LOGIN/SENHA INCORRETA')
      }
    })
  }

  return (
    <>
      <S.MyGlobalStyle />
      <S.Section>
        <img src={logoLogin} className="App-logo" alt="logo" width="auto" height="100%" />
        <S.LoginDiv>
          <S.usuarioInput name="usuario" className="usuarioInput" placeholder="Usuário" value={usuario} onChange={ u => { setUsuario(u.target.value) } } />
          <S.senhaInput name="senha" className="senhaInput" placeholder="Senha" value={senha} onChange={ s => { setSenha(s.target.value) } } />
          <button type="button" onClick={handlePesquisa}>ENTRAR</button> 
        </S.LoginDiv>
      </S.Section>
    </>
  );
}

export default Login;
