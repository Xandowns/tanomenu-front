/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Instructor from './pages/Instructor';
// Importar páginas aqui
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import NewRecipe from './pages/NewRecipe';
import NewInstructor from './pages/NewInstructor';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/login" component={Login} />
    <Route exact path="/dashboard" component={Dashboard} />
    <Route path="/dashboard/instrutores" component={Instructor} />
    <Route path="/cadastro" component={Signup} />
    <Route path="/newrecipe" component={NewRecipe} />
    <Route path="/newinstructor" component={NewInstructor} />
  </Switch>
);

export default Routes;
