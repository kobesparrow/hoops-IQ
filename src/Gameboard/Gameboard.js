import React, {Component} from 'react';
import GameTile from '../GameTile/GameTile';

class Gameboard extends Component {

  render() {
    return (
      <section className='game-board'>
        <article className='game-tiles'>
          <GameTile />
        </article>
      </section>
    )
  }
}

export default Gameboard;