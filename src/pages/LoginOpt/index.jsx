/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
import React from 'react';
import { Link } from 'react-router-dom';

const LoginOpt = () => (
  <div className="flex flex-col mx-auto justify-center p-4 lg:w-2/12 lg:mt-20">
    <Link
      to="/login-estabelecimento"
      className=" bg-primary p-2 rounded-full text-white font-bold text-center"
    >
      Estabelecimento
    </Link>
    <span className="text-dark_grey m-6 text-center">Ou</span>
    <Link
      to="/login-cliente"
      className=" bg-primary p-2 rounded-full text-white font-bold text-center"
    >
      Cliente
    </Link>
  </div>
);
export default LoginOpt;
