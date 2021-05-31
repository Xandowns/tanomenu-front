import React from 'react';
import Typewriter from 'typewriter-effect';
import hero from '../../assets/hero.svg';
import Step from '../../components/Step';

const Home = () => (
  <>
    <div className="p-4 flex flex-col items-center justify-center lg:px-24 lg:py-16 lg:flex-row bg-#fcecdd">
      <div className=" lg:w-2/3 mr-32 pr-8">
        <h1 className="text-3xl font-bold text-dark_grey">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString('Adapte-se para atender seus clientes')
                .start();
            }}
          />
        </h1>
        <p className="text-dark_grey text-2xl">
          Usando o TaNoMenu
          você tem disponibilidade para gerir seu
          cardápio de maneira dinâmica e virtual, para atender seus clientes
          com mais flexibilidade e adaptabilidade!
        </p>
      </div>
      <div className="lg:mr-4">
        <img src={hero} alt="Um Chef" />
      </div>
    </div>
    <div className="p-4 lg:px-24 flex flex-col lg:flex-row">
      <Step
        stepNumber={1}
        title="Você cadastra seu restaurante"
        description="Cadastre seu restaurante no aplicativo para ter todas as funcionalidades!"
      />
      <Step
        stepNumber={2}
        title="Você monta seus cardápios"
        description="Monte seu cardápio e faça as alterações a hora que quiser!"
      />
      <Step
        stepNumber={3}
        title="Se prepare para o futuro"
        description="Mordernize seu restaurante com um cardápio que cabe na palma da mão!"
      />
    </div>
  </>
);

export default Home;
