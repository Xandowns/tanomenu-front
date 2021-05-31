/* eslint-disable global-require */
import jwtDecode from 'jwt-decode';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';

const Navbar = () => {
  const [value, setValue] = useState(0);
  const [establishmentName, setEstablishmentName] = useState(0);

  const getEstablishmentName = async () => {
    const id = jwtDecode(localStorage.getItem('token')).nameid;
    const response = await api.get(`/Establishment/${id}`);
    setEstablishmentName(response.data.name);
  };

  const checkToken = () => {
    if (!localStorage.getItem('token')) {
      return false;
    }
    getEstablishmentName();
    return true;
  };

  const history = useHistory();

  const logOut = () => {
    localStorage.removeItem('token');
    history.push('/');
    // integer state
    setValue(value + 1); // update the state to force render
  };

  return (
    <div className="bg-primary h-20 px-2 lg:px-64 flex justify-between items-center font-bold">
      <Link to="/" className="text-3xl text-white">
        <img src={require('../../assets/logo.png')} className="h-20" alt="" srcSet="" />
      </Link>
      <div className="flex flex-row">
        {checkToken() ? (
          <div className="flex flex-col justify-center items-center">
            <span className="text-white">
              {' '}
              Bem-vindo,
              {' '}
              {establishmentName}
              !
              {' '}
            </span>
            <div className="mt-2">
              <Link to="/dashboard" className="mr-4 bg-white py-2 px-4 rounded-full text-primary"> Dashboard  </Link>
              <Link to="/" className="mr-4 bg-white py-2 px-4 rounded-full text-primary" onClick={logOut}> Sair  </Link>
            </div>
          </div>
        )
          : (
            <>
              <Link
                to="/login"
                className="mr-4 bg-white py-2 px-4 rounded-full text-primary"
              >
                Login
              </Link>
              <Link
                to="/cadastro-restaurante"
                className="mr-4 bg-white py-2 px-4 rounded-full text-primary"
              >
                Cadastro
              </Link>
              <Link
                to="/fazer-pedido"
                className="mr-4 bg-white py-2 px-4 rounded-full text-primary"
              >
                Fazer pedido
              </Link>
            </>
          )}

      </div>
    </div>
  );
};

export default Navbar;
