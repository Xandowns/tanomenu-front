/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
// Importar páginas aqui
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/SignupEstablishment';
import NewRecipe from './pages/NewRecipe';
import Pedidos from './pages/Pedidos';
import LoginClient from './pages/LoginClient';

const Routes = () => (
  <Switch>
    <Route name="" exact path="/" component={Home} />
    <Route exact path="/login" component={Login} />
    <Route path="/fazer-pedido" component={LoginClient} />
    <Route path="/cadastro-restaurante" component={Signup} />
    <Route exact path="/dashboard" component={Dashboard} />
    <Route path="/dashboard/pedidos" component={Pedidos} />
    <Route path="/dashboard/newrecipe" component={NewRecipe} />
  </Switch>
);

export default Routes;
