import React, { useState, useEffect } from 'react';
import Instructors from '../../components/Instructors';
import { Link } from 'react-router-dom';
import api from '../../services/api';

const Pedidos = () => {
  const [instructorsData, setInstructorsData] = useState([]);

  const token = localStorage.getItem('token');
  api.defaults.headers.Authorization = token;

  useEffect(() => {
    const getInstructorData = async () => {
      const response = await api.get('/api/instructors/gym/1');
      setInstructorsData(response.data.instructors.data);
    };
    getInstructorData();
  }, [instructorsData]);

  return (
    <>
      <div className="flex justify-between md:px-32 md:py-6 pl-8 py-3">
        <Link to="/dashboard" className="mt-12 text-primary font-bold">
          &lt; Voltar ao cardápio
        </Link>
      </div>
      <div className="flex flex-col justify-center p-4 lg:px-40 ">
        {/* {instructorsData.map((instructor, i) => {
          return (
            <Instructors
              key={i}
              id={instructor.id}
              name={instructor.name}
              phone={instructor.phone}
              email={instructor.email}
              gym_id={instructor.gym_id}
              arrive={instructor.arrive}
              leave={instructor.leave}
            />
          );
        })} */}
      </div>
    </>
  );
};
export default Pedidos;
