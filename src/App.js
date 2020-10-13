import React from 'react';
import { Route,HashRouter ,Switch } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';
import  Home  from './pages/Home.js';

export const App = () => {
  return (
    <HashRouter >
      <GlobalStyles />
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </HashRouter >
  );
};
