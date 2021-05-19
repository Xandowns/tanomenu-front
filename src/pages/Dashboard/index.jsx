import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Students from '../../components/Students/index';
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
          to="/dashboard/instrutores"
          className="mt-12 text-primary font-bold hidden"
        >
          Visualizar pratos
        </Link>
      </div>
      <div className="flex flex-col justify-center p-4 lg:px-40 ">
        <Students
          key={1}
          id={1}
          name="Feijoada"
          price="R$ 13,99"
          weight="Teste"
          cookTime="20 Min"
          ingredientsList="Feijão Preto, Couve, Porco, Torresmo, Limão"
        />
        {clientsData.map((student, i) => (
          <Students
            key={i}
            id={student.id}
            email={student.email}
            name={student.name}
            phone={student.phone}
            weight={student.weight}
            height={student.height}
            street={student.street}
            number={student.number}
            neighborhood={student.neighborhood}
            city={student.city}
            zipcode={student.zipcode}
            sex={student.sex}
          />
        ))}
      </div>
    </>
  );
};
export default Dashboard;
