import React from 'react';
import {Route, Switch} from 'react-router-dom';
import { Searching } from './components/Searching';
import {Home} from './components/Home'
import {Search} from './components/Search';
import {Select} from './components/single/Select';
import {Results} from './components/single/Results';
import 'bulma/css/bulma.css';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/one' component={Select}/>
      <Route path='/search/one' component={Results}/>
      <Route exact path='/search' component={Search}/>
      <Route path='/searching' component={Searching}/>
    </Switch>
  );
}

export default App;
