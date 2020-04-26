import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Body from './pages/Home/Body';
import Columns from './pages/Home/Columns';

import { Switch, Route } from 'react-router-dom';
import Commercial from './pages/Commercial';

// ~12 hours worked

function App() {
  return (
    <div className="App" style={{ overflow: "hidden" }}>
      <Navbar/>

      <Switch>
        <Route exact path='/'>
          <Body />
          <Columns />
        </Route>

        <Route path='/about'>

        </Route>
        <Route path='/residential'>

        </Route>
        <Route path='/commercial'>
          <Commercial />
        </Route>
        <Route path='/landscaping'>

        </Route>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
