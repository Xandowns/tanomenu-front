import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { ReactComponent as Dinheiro } from '../../assets/dinheiro.svg';

const NewOrder = () => {
  const [values, setValues] = useState({
    City: 'Cachoeira Paulista',
    Establishment: '',
    Number: 0,
  });
  const [establishmentInfo, setEstablishmentInfo] = useState({});
  const [menu, setMenu] = useState([]);
  const [establishmentsInCity, setEstablishmentsInCity] = useState([]);

  useEffect(() => {
    const searchEstablishment = async () => {
      const resposnse = await api.get('/Establishment');
      const establishments = resposnse.data.filter((item) => item.city === values.City);
      setEstablishmentsInCity(establishments);
    };

    searchEstablishment();
  }, [values.City]);

  useEffect(() => {
    const getEstablishmentInfo = async () => {
      const resposnse = await api.get('/Establishment');
      const establishment = resposnse.data.filter((item) => item.name === values.Establishment);
      setEstablishmentInfo(establishment);
    };

    getEstablishmentInfo();
  }, [values.Establishment]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const getMenu = async (e) => {
    e.preventDefault();
    const resposnse = await api.get(`/Establishment/${establishmentInfo[0].id}`);
    setMenu(resposnse.data.recipes);
  };

  return (
    <div className="flex flex-col mx-auto justify-center p-4 lg:w-4/12 lg:mt-16">
      <h1 className="font-bold text-4xl text-dark_grey">
        Escolha sua mesa e seu prato
      </h1>
      <h4 className="text-dark_grey font-light text-lg">e faça seu pedido</h4>
      <form className="flex flex-col">
        <label className="text-dark_grey text-2xl font-light mt-6" htmlFor="City">
          Cidade
          {' '}
          <span className="text-red-500">*</span>
        </label>
        <select
          name="City"
          className="text-dark_grey mt-2"
          onChange={handleChange}
          value={values.City}
        >
          <option value="default">Escolha uma cidade</option>
          <option value="Cachoeira Paulista">Cachoeira Paulista</option>
          <option value="Lorena">Lorena</option>
          <option value="Cruzeiro">Cruzeiro</option>
          <option value="Canas"> Canas </option>
        </select>
        <label className="text-dark_grey text-2xl font-light mt-6" htmlFor="Establishments">
          Estabelecimentos
          {' '}
          <span className="text-red-500">*</span>
        </label>
        <select
          name="Establishment"
          value={values.Establishment}
          onChange={handleChange}
          className="text-dark_grey mt-2"
        >
          <option value="default"> Escolha um restaurante </option>
          {establishmentsInCity.map((establishments) => (
            <option value={establishments.name}>
              {' '}
              {establishments.name}
              {' '}
            </option>
          ))}
        </select>
        <label className="text-dark_grey text-2xl font-light mt-6 w" htmlFor="Number">
          Numero da mesa
          {' '}
          <span className="text-red-500">*</span>
        </label>
        <input
          className="border-b border-gray-600 placeholder-gray-600 py-1 text-dark_grey outline-none"
          type="number"
          name="Number"
          placeholder="Digite o numero de sua mesa"
          value={values.Number}
          onChange={handleChange}
        />
        <div className="justify-center flex">
          <button
            type="button"
            onClick={getMenu}
            className="bg-primary mt-8 p-2 rounded-full text-white font-bold w-1/2 hover:opacity-75 focus:outline-none"
          >
            Carregar menu
          </button>
        </div>
        <span className="text-dark_grey text-2xl font-light mt-6 w">
          Opções
          {' '}
          <span className="text-red-500">*</span>
        </span>

        <div className="flex flex-col justify-center mt-8">
          {
          menu.length === 0 ? <span className="text-xl"> Esse restaurante não tem pratos cadastrados </span>
            : menu.map((recipe) => (
              <div className="flex flex-row">
                <p className="font-bold text-dark_grey">{recipe.name}</p>
                <Dinheiro className="h-12 w-12 pb-5" />
                <p className="text-dark_grey">
                  R$
                  {' '}
                  {recipe.price}
                </p>
              </div>
            ))
}
        </div>
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

export default NewOrder;
