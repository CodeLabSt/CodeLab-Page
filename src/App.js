import React from 'react';
import { Route,BrowserRouter,Switch } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';
import  Home  from './pages/Home.js';

export const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </BrowserRouter>
  );
};
