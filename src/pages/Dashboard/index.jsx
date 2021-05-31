/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import Menu from '../../components/Menu/index';
import api from '../../services/api';

const Dashboard = () => {
  const [recipeData, setRecipeData] = useState([]);
  const token = localStorage.getItem('token');
  api.defaults.headers.Authorization = token;
  const establishmentId = jwtDecode(token).nameid;

  useEffect(() => {
    const getRecipesData = async () => {
      const response = await api.get(`/Establishment/${establishmentId}`);
      setRecipeData(response.data.recipes);
    };

    getRecipesData();
  }, [recipeData]);

  return (
    <>
      <div className="flex justify-between md:px-32 md:py-6 pl-8 py-3">
        <Link
          to="/dashboard/newrecipe"
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
        {recipeData.map((recipe, i) => (
          <Menu
            key={i}
            id={recipe.id}
            name={recipe.name}
            cookTime={recipe.cookTime}
            price={recipe.price}
            description={recipe.description}
          />
        ))}
      </div>
    </>
  );
};
export default Dashboard;
