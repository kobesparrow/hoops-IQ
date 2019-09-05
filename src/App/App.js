import React, { Component } from 'react';
import Gameboard from '../Gameboard/Gameboard';

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
