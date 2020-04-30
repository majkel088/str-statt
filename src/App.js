import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './css/style.css';
import Navbar from './components/navbar';
import Home from './components/home';
import About from './components/about';
import PokemonsContainer from './components/pokemonsContainer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path="/" render={() => <Home title="Home" />} />
          <Route path="/pokedex" render={() => <PokemonsContainer />} />
          <Route path="/about" render={() => <About />} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
