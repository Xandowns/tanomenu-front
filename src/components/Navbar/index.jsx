import React from 'react';
import { Link } from 'react-router-dom';
//import { ReactComponent as Logo } from '../../assets/logo.svg';

const Navbar = () => {
  return (
    <div className="bg-primary h-20 px-2 lg:px-64 flex justify-between items-center font-bold">
      <Link to="/" className="text-3xl text-white">
        <p> TaNoMenu </p>
      </Link>
      <div className="flex flex-row">
        <Link
          to="/opcaologin"
          className="mr-4 bg-white py-2 px-4 rounded-full text-primary"
        >
          Login
        </Link>
        <Link
          to="/opcaocadastro"
          className="mr-4 bg-white py-2 px-4 rounded-full text-primary"
        >
          Cadastro
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
