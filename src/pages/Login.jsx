import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../config/axios';
import { mensagemSucesso, mensagemErro } from '../componentes/toastr';
import './Login.css'
import axios from 'axios';

export const Login = () => {
  const[login, setLogin] = useState("");
  const[senha,setSenha] = useState("");

  const navigate = useNavigate();

  async function logar () {
    // const loginUrl = `${BASE)URL}/login`;
    // const response = await axios.post(loginUrl, { email, password });
    // return response.data;
    let data = {login, senha};
    data = JSON.stringify(data);
    await axios
    .post(`${BASE_URL}/usuarios/auth`, data, {
      headers: { 'Content-Type': 'application/json' },
    })
    .then(function (response) {
        mensagemSucesso(`Usuário ${response.data.login} logado com sucesso!`)
        localStorage.setItem('token', response.data.token);
        navigate(`/home`);
    })
    .catch(function (error) {
      mensagemErro(`Usuário ou senha errados`);
    });
  }

  return (
    <div class="container-login">
    <div class="login-box">
      <h2>Login</h2>
      <form>
        <div class="user-box">
          <input 
            type="text" 
            name="email" 
            value={login}
            required
            onChange={(e) => setLogin(e.target.value)}
            />
          <label>Email</label>
        </div>
        <div class="user-box">
          <input 
            type="password" 
            name="senha" 
            required
            onChange={(e) => setSenha(e.target.value)}
            />
          <label>Senha</label>
        </div>
        <div class="button-container">
          <button onClick={() => {
                    logar()
                  }}  type="button">Entrar</button>
        </div>
      </form>
    </div>
    </div>
  )
}
