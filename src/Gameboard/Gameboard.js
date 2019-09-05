import React, {Component} from 'react';
import data from '../utils/mock-data';
import Category from '../Category/Category';
import PlayerForm from '../PlayerForm/PlayerForm';
import PlayerCard from '../PlayerCard/PlayerCard';
import AnswerForm from '../AnswerForm/AnswerForm';
import GameArea from '../GameArea/GameArea';
import { connect } from 'react-redux';
import { stashAnswer } from '../actions';



export class Gameboard extends Component {
  constructor() {
    super()

    this.state = {
      clues: null,
      categories: data.categories,
      currentCategories: [],
      cluesRemaining: 16,
      players: [],
      startGame: false,
      currentPlayer: 0,
      dailyDouble: null,
      currentDisplay: 'game'
    }
  }

  async componentDidMount() {
    await this.displayCategories()
  }

  displayCategories = () => { // potentially create categories here?
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
    this.setDailyDouble()
  }

  displayAnswer = () => {
    this.setState({ currentDisplay: 'answer' })
  }

  correctAnswer = (pointValue) => {
    const players = this.state.players.slice()
    players[this.state.currentPlayer] = { name: players[this.state.currentPlayer].name, score: players[this.state.currentPlayer].score += pointValue }
    this.setState({ players, cluesRemaining: this.state.cluesRemaining - 1, currentDisplay: 'game' })
  }

  wrongAnswer = (pointValue) => {
    const players = this.state.players.slice()
    players[this.state.currentPlayer] = { name: players[this.state.currentPlayer].name, score: players[this.state.currentPlayer].score -= this.props.answer.pointValue }
    this.setState({ players, cluesRemaining: this.state.cluesRemaining - 1, currentDisplay: 'game' })
    this.changePlayer()
  }

  changePlayer = () => {
    this.state.currentPlayer !== 2 
      ? this.setState({ currentPlayer: this.state.currentPlayer += 1 })
      : this.setState({ currentPlayer: 0 })
  }

  setDailyDouble = () => {
    let dailyDouble = Math.floor(Math.random() * 16 - 1) + 1
    this.setState({ dailyDouble })
  }

  shuffle = (toShuffle) => {
    return toShuffle.sort(() => 0.5 - Math.random());
  }

  renderGame = (status) => {



    const categories = this.state.currentCategories.map(cat => {
      return <Category {...cat}
        key={cat.id}
        shuffle={this.shuffle}
        correctAnswer={this.correctAnswer}
        wrongAnswer={this.wrongAnswer}
        displayAnswer={this.displayAnswer}
      />
    })

    const playerCards = this.state.players.map(player => {
      return <PlayerCard {...player} />
    })

    // const categories = 

    let cats = this.state.startGame === false
      ? 'Enter names and press START GAME to begin'
      : categories

    let players = this.state.startGame === false
      ? <PlayerForm startGame={this.startGame} />
      : playerCards


    switch (status) {
      case 'game':
        return <section className='game-area'> 
                <section className='game-tiles'>
                  {cats}
                  <GameArea />
                </section>
                <section className='players'>
                  {players}
                </section>
              </section> 
      case 'answer':
        return <AnswerForm 
                  correctAnswer={ this.correctAnswer }
                  wrongAnswer={ this.wrongAnswer }
                />   
      default:
        break;
    }
  }


  render() {

    return (
      <section className='game-board'>
        { this.renderGame(this.state.currentDisplay) }
      </section>
    )
  }
}

// export default Gameboard;

export const mapPropsToState = (state) => ({
  answer: state.answer
});

export const mapDispatchToState = (dispatch) => ({
  stashAnswer: (answer) => dispatch(stashAnswer(answer))
});

export default connect(mapPropsToState, mapDispatchToState)(Gameboard)
