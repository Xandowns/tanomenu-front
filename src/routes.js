/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Instructor from './pages/Pedidos';
// Importar páginas aqui
import Home from './pages/Home';
import Login from './pages/LoginEstablishment';
import Signup from './pages/SignupEstablishment';
import NewRecipe from './pages/NewRecipe';
import NewInstructor from './pages/NewInstructor';
import Pedidos from './pages/Pedidos';
import LoginClient from './pages/LoginClient';
import LoginOpt from './pages/LoginOpt';
import SignupOpt from './pages/SignupOpt';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/opcao-login" component={LoginOpt} />
    <Route path="/opcao-login/login-estabelecimento" component={Login} />
    <Route path="/opcao-login/login-cliente" component={LoginClient} />
    <Route exact path="/opcao-cadastro" component={SignupOpt} />
    <Route path="/opcao-cadastro/cadastro-restaurante" component={Signup} />
    <Route exact path="/dashboard" component={Dashboard} />
    <Route path="/dashboard/pedidos" component={Pedidos} />
    <Route path="/dashboard/newrecipe" component={NewRecipe} />
  </Switch>
);

export default Routes;
