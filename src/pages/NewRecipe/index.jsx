/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import jwtDecode from 'jwt-decode';
import api from '../../services/api';

const NewRecipe = () => {
  const initialState = {
    EstablishmentId: null,
    Name: '',
    Description: '',
    Price: '',
    CookTime: 0,
  };

  const [values, setValues] = useState(initialState);

  useEffect(() => {
    const getEstablishmentId = () => {
      const token = localStorage.getItem('token');
      const establishmentId = jwtDecode(token).nameid;
      setValues({ ...values, EstablishmentId: establishmentId });
    };

    getEstablishmentId();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const history = useHistory();

  const notify = () => toast.success(
    '😎👍 Prato adicionado. Você sera redirecionado para o dashboard',
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
      .post('/Recipe', values)
      .then((response) => {
        if (response.status === 200) {
          notify();
          setTimeout(() => {
            history.push('/dashboard');
          }, 4000);
        }
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error.response);
        notifyError();
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
        <label
          htmlFor="Name"
          className="text-dark_grey text-2xl font-light mt-6"
        >
          Nome
        </label>
        <input
          className="border-b border-gray-600 placeholder-gray-600 py-1 text-dark_grey outline-none"
          type="text"
          name="Name"
          placeholder="Digite o nome do prato"
          value={values.Name}
          onChange={handleChange}
        />
        <label
          htmlFor="img"
          className="text-dark_grey text-2xl font-light mt-6"
        >
          Imagem
        </label>
        <input type="file" name="Upload de arquivo" className="mt-6" />
        <label
          htmlFor="Price"
          className="text-dark_grey text-2xl font-light mt-6"
        >
          Preço
        </label>
        <input
          name="Price"
          id="price"
          className="border-b border-gray-600 placeholder-gray-600 py-1 text-dark_grey outline-none"
          placeholder="Digite o preço do prato"
          value={values.Price}
          onChange={handleChange}
        />
        <label
          htmlFor="CookTime"
          className="text-dark_grey text-2xl font-light mt-6"
        >
          Tempo de preparo em minutos
        </label>
        <input
          type="number"
          name="CookTime"
          id="cookTime"
          className="border-b border-gray-600 placeholder-gray-600 py-1 text-dark_grey outline-none"
          placeholder="Digite o tempo de preparo do prato"
          value={values.CookTime}
          onChange={handleChange}
        />
        <label
          htmlFor="Description"
          className="text-dark_grey text-2xl font-light mt-6"
        >
          Ingredientes
        </label>
        <input
          className="border-b border-gray-600 placeholder-gray-600 py-1 text-dark_grey outline-none"
          type="text"
          name="Description"
          placeholder="Digite a lista de ingredientes separados por virgula. Ex: Arroz, Feijão..."
          value={values.Description}
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
