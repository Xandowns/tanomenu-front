/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import api from '../../services/api';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const history = useHistory();

  const notify = () => toast.success(
    '😎👍 Login efetuado com sucesso. Você sera redirecionado para a dashboard',
    {
      position: 'top-right',
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    },
  );
  const notifyError = () => toast.error(
    '💀 Um erro ocorreu. Verifique se o email e a senha estão corretos',
    {
      position: 'top-right',
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    },
  );

  const handleSignIn = async (e) => {
    e.preventDefault();
    api
      .post('/Authentication/login', values)
      .then((response) => {
        if (response.status === 200) {
          localStorage.setItem('token', response.data.token);
          notify();
          setTimeout(() => {
            history.push('/dashboard');
          }, 4000);
        }
      })
      .catch((error) => {
        notifyError();
        // eslint-disable-next-line no-console
        console.log(error.response.data);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <div className="flex flex-col mx-auto justify-center p-4 lg:w-4/12 lg:mt-32">
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <h1 className="font-bold text-4xl text-dark_grey">Faça Login</h1>
      <h4 className="text-dark_grey font-light text-lg">
        Para visualizar o painel de ações é necessario fazer login
      </h4>
      <label className="text-dark_grey text-2xl font-light mt-6">E-mail</label>
      <input
        className="border-b border-gray-600 placeholder-gray-600 py-1 text-dark_grey outline-none"
        type="email"
        name="email"
        value={values.email}
        onChange={handleChange}
        placeholder="Digite seu endereço de e-mail"
      />

      <label htmlFor="password" className="text-dark_grey text-2xl font-light">
        Senha
      </label>
      <input
        className="border-b border-gray-600 placeholder-gray-600 py-1 text-dark_grey outline-none"
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
        placeholder="Digite sua senha"
      />

      <div className="flex flex-col justify-center items-center">
        <button
          onClick={handleSignIn}
          className="bg-primary mt-8 p-2 rounded-full text-white font-bold w-1/2"
        >
          Entrar
        </button>
        <p className="font-light mt-4">
          Ainda não tem uma conta? Faça seu cadastro
          {' '}
          <Link to="/opcao-cadastro" className="text-primary font-normal">
            clicando aqui
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
