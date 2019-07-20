import React, { Component } from 'react';
import Gameboard from '../Gameboard/Gameboard';
import PlayerForm from '../PlayerForm/PlayerForm';

class App extends Component {

  render () {

    return (
      <section className="App">
        <header>
          <h1>Hoops IQ</h1>
        </header>
        <section>
          <Gameboard />
        </section>
      </section>
    );
  }
}

export default App;
