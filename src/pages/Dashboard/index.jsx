import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Menu from '../../components/Menu/index';
import api from '../../services/api';

const Dashboard = () => {
  const [clientsData, setClientsData] = useState([]);
  const token = localStorage.getItem('token');
  api.defaults.headers.Authorization = token;

  useEffect(() => {
    const getClientData = async () => {
      const response = await api.get('/api/clients/gym/1');
      setClientsData(response.data.clients.data);
    };

    getClientData();
  }, [clientsData]);

  return (
    <>
      <div className="flex justify-between md:px-32 md:py-6 pl-8 py-3">
        <Link
          to="/newrecipe"
          className="bg-primary mt-8 px-4 py-2 rounded-full text-white font-bold "
        >
          Adicionar Prato
        </Link>
        <Link
          to="/dashboard/pedidos"
          className="bg-primary mt-8 px-4 py-2 rounded-full text-white font-bold  "
        >
          Visualizar pedidos
        </Link>
      </div>
      <div className="flex flex-col justify-center p-4 lg:px-40 ">
        <Menu
          key={1}
          id={1}
          name="Feijoada"
          price="R$ 13,99"
          weight="Teste"
          cookTime="20 Min"
          ingredientsList="Feijão Preto, Couve, Porco, Torresmo, Limão"
        />
        {clientsData.map((recipe, i) => (
          <Menu
            key={i}
            id={recipe.id}
            image={recipe.img}
            name={recipe.name}
            description={recipe.description}
          />
        ))}
      </div>
    </>
  );
};
export default Dashboard;
