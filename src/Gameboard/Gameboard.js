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
      players: [],
      startGame: false,
      currentPlayer: 0
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



    this.setState({ startGame: true, players: players })
  }

  correctAnswer = (pointValue) => {
    const players = this.state.players.slice()
    players[this.state.currentPlayer] = { name: players[this.state.currentPlayer].name, score: players[this.state.currentPlayer].score += pointValue }
    this.setState({ players })
  }

  wrongAnswer = (pointValue) => {
    const players = this.state.players.slice()
    players[this.state.currentPlayer] = { name: players[this.state.currentPlayer].name, score: players[this.state.currentPlayer].score -= pointValue }
    this.setState({ players })
  }

  shuffle = (toShuffle) => {
    return toShuffle.sort(() => 0.5 - Math.random());
  }

  render() {

    const categories = this.state.currentCategories.map(cat => {
      return <Category {...cat} 
                key={cat.id} 
                shuffle={this.shuffle} 
                correctAnswer={this.correctAnswer} 
                wrongAnswer={this.wrongAnswer}
              />
    })

    const playerCards = this.state.players.map(player => {
      return <PlayerCard {...player} />
    })

    let cats = this.state.startGame === false 
      ? 'Enter names and press START GAME to begin'
      : categories

    let players = this.state.startGame === false
      ? <PlayerForm startGame={this.startGame}/>
      : playerCards

    return (
      <section className='game-board'>
        <section className='game-tiles'>
          { cats }
        </section>
        <section className='players'>
          {players}
        </section>
      </section>
    )
  }
}

export default Gameboard;