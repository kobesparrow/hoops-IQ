import React, {Component} from 'react';
import data from '../utils/mock-data';
import Category from '../Category/Category';
import PlayerForm from '../PlayerForm/PlayerForm';
import PlayerCard from '../PlayerCard/PlayerCard';

class Gameboard extends Component {
  constructor() {
    super()

    this.state = {
      clues: null,
      categories: data.categories,
      currentCategories: [],
      cluesRemaining: 16,
      loading: true,
      players: [],
      startGame: false
    }
  }

  async componentDidMount() {
    await this.displayCategories()
  }

  displayCategories = () => {
    let shuffledCategories = this.shuffle(this.state.categories).splice(0, 4)
    this.setState({
      currentCategories: [...shuffledCategories],
      loading: false
    });
  }

  startGame = (playerNames) => {
    let players = Object.keys(playerNames).map(name => {
      return { name: playerNames[name], score: 0 }
    });
    console.log(players)
    // const players = playerNames.
    // [{ id: 1, name: 'player One', score: 0 }, { id: 2, name: 'player Two', score: 0 }]
    this.setState({ startGame: true, players: players })
  }

  shuffle = (toShuffle) => {
    return toShuffle.sort(() => 0.5 - Math.random());
  }

  render() {

    const categories = this.state.currentCategories.map(cat => {
      return <Category {...cat} key={cat.id} shuffle={this.shuffle} />
    })

    const playerCards = this.state.players.map(player => {
      return <PlayerCard {...player} />
    })

    let cats = this.state.loading === true 
      ? 'loading' 
      : categories

    let players = this.state.startGame === false
      ? <PlayerForm startGame={this.startGame}/>
      : playerCards

    return (
      <section className='game-board'>
        <section className='players'>
          {players}
        </section>
        <article className='game-tiles'>
          { cats }
        </article>
      </section>
    )
  }
}

export default Gameboard;