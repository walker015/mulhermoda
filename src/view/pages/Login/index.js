import logoLogin from '../../../logoLogin.png';
import React, { useState } from 'react';
import axios from 'axios';
import * as S from './style';

function Login(Props) {
  const [ usuario, setUsuario ] = useState('');
  const [ senha, setSenha ] = useState('');

  function handlePesquisa() {
    const login = axios.get('http://localhost:8000/loginAdmin').then( response => response.data[0] )
    console.log(login);
    if (login === 'admin' && login === '') {
      console.log(true);
    } else {
      console.log(false);
    }
  }

  return (
    <>
      <S.MyGlobalStyle />
      <section>
        <img src={logoLogin} className="App-logo" alt="logo" />
        <input name="usuario" className="usuarioInput" placeholder="Usuário" value={usuario} onChange={ u => { setUsuario(u.target.value) } } />
        <input name="senha" className="senhaInput" placeholder="Senha" value={senha} onChange={ s => { setSenha(s.target.value) } } />
        <button type="button" onClick={handlePesquisa}>ENTRAR</button> 
      </section>
    </>
  );
}

export default Login;
