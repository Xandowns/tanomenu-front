/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import api from '../../services/api';

const NewRecipe = () => {
  const initialState = {
    name: '',
    price: 'R$ ',
    cookTime: '',
    ingredientsList: '',
  };

  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const history = useHistory();

  const notify = () => toast.success(
    '😎👍 Aluno adicionado. Você sera redirecionado para o dashboard',
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
    '💀 Um erro ocorreu. Verifique se os campos obrigatorios estão preenchidos',
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

  const handleSubmit = () => {
    api
      .post('/api/clients', values)
      .then((response) => {
        if (response.status === 201) {
          notify();
          setTimeout(() => {
            history.push('/dashboard');
          }, 4000);
        }
      })
      .catch((error) => {
        console.log(error.response);
        if (error.response.status !== 201) {
          notifyError();
        }
      });
  };

  return (
    <>
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
      <div className="flex flex-col mx-auto justify-center p-4 lg:w-4/12 lg:mt-16">
        <h1 className="font-bold text-4xl text-dark_grey">Adicionar prato</h1>
        <label htmlFor="name" className="text-dark_grey text-2xl font-light mt-6">
          Nome
        </label>
        <input
          className="border-b border-gray-600 placeholder-gray-600 py-1 text-dark_grey outline-none"
          type="text"
          name="name"
          placeholder="Digite o nome do prato"
          value={values.name}
          onChange={handleChange}
        />
        <label htmlFor="cookTime" className="text-dark_grey text-2xl font-light mt-6">
          Tempo de preparo
        </label>
        <input
          className="border-b border-gray-600 placeholder-gray-600 py-1 text-dark_grey outline-none"
          type="text"
          name="cookTime"
          placeholder="Digite o tempo de preparo"
          value={values.cookTime}
          onChange={handleChange}
        />
        <label htmlFor="price" className="text-dark_grey text-2xl font-light mt-6">
          Preço
        </label>
        <input
          name="price"
          id="price"
          className="border-b border-gray-600 placeholder-gray-600 py-1 text-dark_grey outline-none"
          placeholder="Digite o preço do prato"
          value={values.price}
          onChange={handleChange}
        />
        <label htmlFor="ingredientsList" className="text-dark_grey text-2xl font-light mt-6">
          Ingredientes
        </label>
        <input
          className="border-b border-gray-600 placeholder-gray-600 py-1 text-dark_grey outline-none"
          type="text"
          name="ingredientsList"
          placeholder="Digite a lista de ingredientes separados por virgula. Ex: Arroz, Feijão..."
          value={values.ingredientsList}
          onChange={handleChange}
        />
        <div className="flex flex-col justify-center items-center ">
          <button
            type="submit"
            className="bg-primary mt-8 p-2 rounded-full text-white font-bold w-1/2 hover:opacity-75 focus:outline-none"
            onClick={handleSubmit}
          >
            Cadastrar
          </button>
          <Link
            to="/dashboard"
            className="bg-gray-400 mt-4 p-2 rounded-full text-dark_grey text-center font-bold w-1/2 hover:opacity-75 focus:outline-none"
          >
            Cancelar
          </Link>
        </div>
      </div>
    </>
  );
};

export default NewRecipe;
