import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import InputMask from 'react-input-mask';
// import validate from '../../utils/validateInfo';
// import useForm from '../../hooks/useForm';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import api from '../../services/api';

const Signup = () => {
  // const { handleChange, values, handleSubmit } = useForm(validate);

  const history = useHistory();

  const notify = () => toast.success(
    '😎👍 Cadastro efetuado com sucesso. Você sera redirecionado para o login',
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

  const [values, setValues] = useState({
    Name: '',
    Description: '',
    Category: 'Outros',
    Street: '',
    Number: 0,
    Complement: '',
    Neighborhood: '',
    Zip: '',
    City: '',
    Phone: '',
    Picture: null,
    Email: '',
    Password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });

    console.log(values);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    api
      .post('/Establishment', values)
      .then((response) => {
        if (response.status === 200) {
          notify();
          setTimeout(() => {
            history.push('/login');
          }, 4000);
        }
      })
      .catch((error) => {
        console.log(error.response.data);
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
        <h1 className="font-bold text-4xl text-dark_grey">
          Faça o seu cadastro
        </h1>
        <h4 className="text-dark_grey font-light text-lg">
          e tenha acesso a nossa plataforma
        </h4>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <label className="text-dark_grey text-2xl font-light mt-6" htmlFor="Email">
            E-mail
            {' '}
            <span className="text-red-500">*</span>
          </label>
          <input
            className="border-b py-1 text-dark_grey outline-none border-gray-600 placeholder-gray-600"
            type="text"
            name="Email"
            placeholder="Digite seu endereço de e-mail"
            value={values.Email}
            onChange={handleChange}
          />
          <label className="text-dark_grey text-2xl font-light mt-6" htmlFor="Password">
            Senha
            {' '}
            <span className="text-red-500">*</span>
          </label>
          <input
            className="border-b border-gray-600 placeholder-gray-600 py-1 text-dark_grey outline-none border-gray-600 placeholder-gray-600"
            type="password"
            name="Password"
            placeholder="Digite sua senha"
            value={values.Password}
            onChange={handleChange}
          />
          <label className="text-dark_grey text-2xl font-light mt-6" htmlFor="Name">
            Nome do restaurante
            {' '}
            <span className="text-red-500">*</span>
          </label>
          <input
            className="border-b border-gray-600 placeholder-gray-600 py-1 text-dark_grey outline-none"
            type="text"
            name="Name"
            placeholder="Digite o nome do seu restaurante"
            value={values.Name}
            onChange={handleChange}
          />
          <label className="text-dark_grey text-2xl font-light mt-6" htmlFor="Category">
            Categoria
            {' '}
          </label>
          <select
            className="border-b border-gray-600 placeholder-gray-600 py-1 text-dark_grey outline-none"
            type="text"
            name="Category"
            placeholder="Digite o nome do seu restaurante"
            value={values.Category}
            onChange={handleChange}
            defaultValue="Outros"
          >
            <option value="Pizzaria"> Pizzaria </option>
            <option value="Sorveteria"> Sorveteria </option>
            <option value="Esfirraria"> Esfirraria </option>
            <option value="Restaurante"> Restaurante </option>
            <option value="Pastelaria"> Pastelaria </option>
            <option value="Lanchonete"> Lanchonete </option>
            <option value="Churrascaria"> Churrascaria </option>
            <option value="Outros"> Outros </option>
          </select>
          <label className="text-dark_grey text-2xl font-light mt-6" htmlFor="Description">
            Descrição
            {' '}
            <span className="text-red-500">*</span>
          </label>
          <input
            className="border-b border-gray-600 placeholder-gray-600 py-1 text-dark_grey outline-none"
            type="text"
            name="Description"
            placeholder="Digite o nome do seu restaurante"
            value={values.Description}
            onChange={handleChange}
          />
          <label className="text-dark_grey text-2xl font-light mt-6" htmlFor="Neighborhood">
            Bairro
            {' '}
            <span className="text-red-500">*</span>
          </label>
          <input
            className="border-b border-gray-600 placeholder-gray-600 py-1 text-dark_grey outline-none"
            type="text"
            name="Neighborhood"
            placeholder="Digite o bairro do restaurante"
            value={values.Neighborhood}
            onChange={handleChange}
          />
          <label className="text-dark_grey text-2xl font-light mt-6 w" htmlFor="Street">
            Rua
            {' '}
            <span className="text-red-500">*</span>
          </label>
          <input
            className="border-b border-gray-600 placeholder-gray-600 py-1 text-dark_grey outline-none"
            type="text"
            name="Street"
            placeholder="Digite a rua do restaurante"
            value={values.Street}
            onChange={handleChange}
          />
          <label className="text-dark_grey text-2xl font-light mt-6 w" htmlFor="Number">
            Número
            {' '}
            <span className="text-red-500">*</span>
          </label>
          <input
            className="border-b border-gray-600 placeholder-gray-600 py-1 text-dark_grey outline-none"
            type="number"
            name="Number"
            value={values.Number}
            onChange={handleChange}
          />
          <label className="text-dark_grey text-2xl font-light mt-6 w" htmlFor="Complement">
            Complemento
          </label>
          <input
            className="border-b border-gray-600 placeholder-gray-600 py-1 text-dark_grey outline-none"
            type="text"
            name="Complement"
            placeholder="Digite um complemento do restaurante"
            value={values.Complement}
            onChange={handleChange}
          />
          <label className="text-dark_grey text-2xl font-light mt-6 w" htmlFor="Zip">
            CEP
            {' '}
            <span className="text-red-500">*</span>
          </label>
          <InputMask
            mask="99999-999"
            value={values.Zip}
            className="border-b border-gray-600 placeholder-gray-600 py-1 text-dark_grey outline-none border-gray-600 placeholder-gray-600"
            name="Zip"
            placeholder="Digite o cep do restaurante"
            onChange={handleChange}
          />
          <label className="text-dark_grey text-2xl font-light mt-6 w" htmlFor="City">
            Cidade
            {' '}
            <span className="text-red-500">*</span>
          </label>
          <input
            className="border-b border-gray-600 placeholder-gray-600 py-1 text-dark_grey outline-none"
            type="text"
            name="City"
            placeholder="Digite a cidade do restaurante"
            value={values.City}
            onChange={handleChange}
          />
          <label className="text-dark_grey text-2xl font-light mt-6 w" htmlFor="Phone">
            Telefone
            {' '}
            <span className="text-red-500">*</span>
          </label>
          <InputMask
            mask="99 99999-9999"
            name="Phone"
            value={values.Phone}
            className="border-b border-gray-600 placeholder-gray-600 py-1 text-dark_grey outline-none"
            placeholder="Digite o telefone do restaurante"
            onChange={handleChange}
          />
          <div className="flex flex-col justify-center items-center ">
            <button
              type="submit"
              className="bg-primary mt-8 p-2 rounded-full text-white font-bold w-1/2 hover:opacity-75 focus:outline-none"
            >
              Cadastrar
            </button>
          </div>
        </form>

        <p className="font-light mt-4 text-center">
          Já possui uma conta? Faça login
          {' '}
          <Link to="/opcaologin" className="text-primary font-normal">
            clicando aqui
          </Link>
        </p>
      </div>
    </>
  );
};

export default Signup;
