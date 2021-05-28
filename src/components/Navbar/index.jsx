/* eslint-disable global-require */
import React from 'react';
import { Link } from 'react-router-dom';
// import { ReactComponent as Logo } from '../../assets/logo.svg';

const Navbar = () => (
  <div className="bg-primary h-20 px-2 lg:px-64 flex justify-between items-center font-bold">
    <Link to="/" className="text-3xl text-white">
      <img src={require('../../assets/logo.png')} className="h-20" alt="" srcSet="" />
    </Link>
    <div className="flex flex-row">
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
    </div>
  </div>
);

export default Navbar;
