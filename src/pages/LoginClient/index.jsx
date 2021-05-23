import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

const LoginClient = () => {
  return (
    <div className="flex flex-col mx-auto justify-center p-4 lg:w-4/12 lg:mt-16">
      <h1 className="font-bold text-4xl text-dark_grey">
        Escolha sua mesa e seu prato
      </h1>
      <h4 className="text-dark_grey font-light text-lg">e faça seu pedido</h4>
      <form className="flex flex-col">
        <label className="text-dark_grey text-2xl font-light mt-6">
          Cidade <span className="text-red-500">*</span>
        </label>
        <select name="Cidade" className="text-dark_grey mt-2">
          <option value="default">Escolha uma cidade</option>
          <option value="Cachoeira Paulista">Cachoeira Paulista</option>
          <option value="Lorena">Lorena</option>
          <option value="Cruzeiro">Cruzeiro</option>
        </select>
        <label className="text-dark_grey text-2xl font-light mt-6">
          Estabelecimentos <span className="text-red-500">*</span>
        </label>
        <select name="Estabelecimentos" className="text-dark_grey mt-2">
          <option value="default">Escolha um estabelecimento</option>
          <option value="Cachoeira Paulista">Padaria pão quentinho</option>
          <option value="Lorena">Pizzaria do Renato</option>
          <option value="Cruzeiro">Pampeiro</option>
        </select>
        <label className="text-dark_grey text-2xl font-light mt-6 w">
          Numero <span className="text-red-500">*</span>
        </label>
        <input
          className="border-b border-gray-600 placeholder-gray-600 py-1 text-dark_grey outline-none"
          type="number"
          name="num"
          placeholder="Digite o numero de sua mesa"
        />
        <label className="text-dark_grey text-2xl font-light mt-6 w">
          Opções <span className="text-red-500">*</span>
        </label>
        {/*To do: Não sei como puxar as informações do restaurante a cima, provavelmente terá de ser feito uma tag, pfv me ajudem by:xandão*/}
        <div className="flex flex-col justify-center items-center ">
          <button
            type="submit"
            className="bg-primary mt-8 p-2 rounded-full text-white font-bold w-1/2 hover:opacity-75 focus:outline-none"
          >
            Completar pedido
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginClient;
