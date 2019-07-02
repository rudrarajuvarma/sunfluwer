import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import loin from '../src/components/login'
import DashBoard from '../src/components/dashBoard'
import './App.css';

function App() {
  return (

    <Router>
     <Route exact path="/" component={loin} />
      <Route path="/DashBoard" component={DashBoard}/>
     </Router>

  );
}

export default App;
