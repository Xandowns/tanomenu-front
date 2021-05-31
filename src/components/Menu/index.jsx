/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import Modal from 'react-modal';
import { ToastContainer, toast } from 'react-toastify';
import { ReactComponent as Delete } from '../../assets/deletar-usuario.svg';
import { ReactComponent as Edit } from '../../assets/editar.svg';
import { ReactComponent as Dinheiro } from '../../assets/dinheiro.svg';
import { ReactComponent as RecipeIcon } from '../../assets/recipeIcon.svg';
import { ReactComponent as Clock } from '../../assets/clock.svg';
import api from '../../services/api';
import 'react-toastify/dist/ReactToastify.css';

const Menu = ({
  id, name, price, cookTime, description,
}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [data, setData] = useState({
    id,
    name,
    price,
    cookTime,
    description,
  });

  const token = localStorage.getItem('token');
  api.defaults.headers.Authorization = `bearer ${token}`;

  const notifyDeleteSucces = () => toast.success('😎👍 O prato foi deletado com sucesso.', {
    position: 'top-right',
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

  const handleDelete = () => {
    api
      .delete(`/Recipe/${id}`, data)
      .then(() => {
        notifyDeleteSucces();
        setModalIsOpen(false);
      })
      .catch((error) => {
        notifyDeleteSucces();
        // eslint-disable-next-line no-console
        console.log(error.response.data);
      });
  };

  const notifyEditSucces = () => toast.success('😎👍 Edição efetuada com sucesso.', {
    position: 'top-right',
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

  const notifyEditError = () => toast.error(
    '💀 Um erro ocorreu. Verifique se todos os campos estão preenchidos',
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

  const handleEdit = () => {
    api
      .put(`/Recipe/${id}`, data)
      .then(() => {
        notifyEditSucces();
        setModalIsOpen(false);
      })
      .catch((error) => {
        notifyEditError();
        // eslint-disable-next-line no-console
        console.log(error.response.data);
      });
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleChange = (e) => {
    const { name: nameField, value } = e.target;
    setData({
      ...data,
      [nameField]: value,
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
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <div className="flex flex-row justify-between">
          <h1 className="text-xl">
            Editar dados de
            {' '}
            <span className="font-bold">
              {' '}
              {data.name}
              {' '}
            </span>
          </h1>
          <button
            onClick={closeModal}
            className="text-white font-bold p-2 bg-red-500 rounded-full"
          >
            Fechar
          </button>
        </div>

        <div className="flex flex-col mx-auto justify-center p-4 md:w-4/12">
          <label
            htmlFor="name"
            className="text-dark_grey text-2xl font-light mt-6 w"
          >
            Nome
          </label>
          <input
            className="border-b border-gray-600 placeholder-gray-600 py-1 text-dark_grey outline-none"
            type="text"
            name="name"
            value={data.name}
            onChange={handleChange}
          />
          <label
            htmlFor="cookTime"
            className="text-dark_grey text-2xl font-light mt-6 w"
          >
            Tempo de Preparo
          </label>
          <input
            className="border-b border-gray-600 placeholder-gray-600 py-1 text-dark_grey outline-none"
            type="text"
            name="cookTime"
            value={data.cookTime}
            onChange={handleChange}
          />
          <label
            htmlFor="price"
            className="text-dark_grey text-2xl font-light mt-6 w"
          >
            Preço
          </label>
          <input
            className="border-b border-gray-600 placeholder-gray-600 py-1 text-dark_grey outline-none"
            type="text"
            name="price"
            value={data.price}
            onChange={handleChange}
          />
          <label
            htmlFor="description"
            className="text-dark_grey text-2xl font-light mt-6 w"
          >
            Ingredientes
          </label>
          <input
            className="border-b border-gray-600 placeholder-gray-600 py-1 text-dark_grey outline-none"
            type="text"
            name="description"
            value={data.description}
            onChange={handleChange}
          />
          <button
            type="button"
            onClick={handleEdit}
            className="bg-primary mt-8 p-2 rounded-full text-white font-bold w-1/2 hover:opacity-75 focus:outline-none mx-auto"
          >
            Salvar
          </button>
        </div>
      </Modal>
      <div className=" flex flex-col md:flex-row border-t p-4">
        <p className="font-bold text-dark_grey md:w-2/6">{data.name}</p>
        <div className="flex flex-row md:w-1/6">
          <Dinheiro className="h-12 w-12 pb-5" />
          <p className="text-dark_grey md:pl-2">
            R$
            {' '}
            {data.price}
          </p>
        </div>
        <div className="flex flex-row md:w-1/6">
          <Clock className="h-12 w-12 pb-5" />
          <p className="text-dark_grey md:pl-2">
            {data.cookTime}
            {' '}
            min
          </p>
        </div>
        <div className="flex flex-row md:w-11/12">
          <RecipeIcon className="h-12 w-12 pb-5" />
          <p className="text-dark_grey md:pl-2">{data.description}</p>
        </div>
        <div className="flex flex-row md:w-6/6">
          <Delete
            onClick={handleDelete}
            className="h-6 w-6 fill-current text-red-600"
          />
          <Edit
            onClick={openModal}
            className="h-6 w-6 fill-current ml-4 text-primary"
          />
        </div>
      </div>
    </>
  );
};

export default Menu;
