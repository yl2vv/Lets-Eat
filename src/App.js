import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {Home} from './components/Home';
import {Results} from './components/Results';
import 'bulma/css/bulma.css';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/search' component={Results}/>
    </Switch>
  );
}

export default App;
