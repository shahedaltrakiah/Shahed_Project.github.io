import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Home from './components/Home';
import Login from './components/Login';

function App() {
  return (
  <Router>
    <Route exact path="/"><Login/></Route>
    <Route path="/Home/"><Home/></Route>
    </Router>
   
  );
}

export default App;
