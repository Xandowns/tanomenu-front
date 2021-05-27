/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
import React, { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import AuthContext from '../../context/auth';

const SignupOpt = () => {
  return (
    <div className="flex flex-col mx-auto justify-center p-4 lg:w-4/12 lg:mt-20">
      <Link
        to="/opcao-cadastro/cadastro-restaurante"
        className=" bg-primary p-2 rounded-full text-white font-bold text-center"
      >
        Estabelecimento
      </Link>
    </div>
  );
};
export default SignupOpt;
