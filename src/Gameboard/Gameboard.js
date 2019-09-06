import React, {Component} from 'react';
import data from '../utils/mock-data';
import Category from '../Category/Category';
import PlayerForm from '../PlayerForm/PlayerForm';
import PlayerCard from '../PlayerCard/PlayerCard';
import AnswerForm from '../AnswerForm/AnswerForm';
import { connect } from 'react-redux';
import { stashAnswer, storeClues } from '../actions';



export class Gameboard extends Component {
  constructor() {
    super()

    this.state = {
      clues: null,
      categories: data.categories,
      currentCategories: [],
      cluesRemaining: 15,
      players: [],
      startGame: false,
      currentPlayer: 0,
      dailyDouble: 14,
      currentDisplay: 'game'
    }
  }

  async componentDidMount() {
    await this.displayCategories()
  }

  displayCategories = () => { 
    let shuffledCategories = this.shuffle(this.state.categories).splice(0, 4);
    this.setState({
      currentCategories: [...shuffledCategories],
      loading: false
    });
    this.categoryCluesToStore(shuffledCategories);
  }

  categoryCluesToStore = (cats) => {
    let currentClues = [];

    cats.forEach(category => {
      data.clues.forEach(clue => {
        if (category.id === clue.categoryId) {
          currentClues.push(clue)
        }
      })
    })

    this.props.storeClues(currentClues)
  }

  startGame = (playerNames) => {
    let players = Object.keys(playerNames).map(name => {
      return { name: playerNames[name], score: 0 }
    });
    this.setState({ startGame: true, players: players })
    // this.setDailyDouble()
  }

  displayAnswer = () => {
    this.setState({ currentDisplay: 'answer' })
  }

  correctAnswer = (pointValue) => {
    const players = this.state.players.slice()
    players[this.state.currentPlayer] = { name: players[this.state.currentPlayer].name, score: players[this.state.currentPlayer].score += pointValue }
    this.setState({ players, cluesRemaining: this.state.cluesRemaining - 1 })
  }

  wrongAnswer = (pointValue) => {
    const players = this.state.players.slice()
    players[this.state.currentPlayer] = { name: players[this.state.currentPlayer].name, score: players[this.state.currentPlayer].score -= pointValue }
    this.setState({ players, cluesRemaining: this.state.cluesRemaining - 1 })
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

  // renderGame = (status) => {

  //   const categories = this.state.currentCategories.map(cat => {  
  //     return <Category {...cat}
  //       key={cat.id}
  //       shuffle={this.shuffle}
  //       correctAnswer={this.correctAnswer}
  //       wrongAnswer={this.wrongAnswer}
  //       displayAnswer={this.displayAnswer}
  //     />
  //   })

  //   const playerCards = this.state.players.map(player => {
  //     return <PlayerCard {...player} />
  //   })

  //   let cats = this.state.startGame === false
  //     ? 'Enter names and press START GAME to begin'
  //     : categories

  //   let players = this.state.startGame === false
  //     ? <PlayerForm startGame={this.startGame} />
  //     : playerCards


  //   switch (status) {
  //     case 'game':
  //       return <section className='game-area'> 
  //               <section className='game-tiles'>
  //                 {cats}
  //               </section>
  //               <section className='players'>
  //                 {players}
  //               </section>
  //             </section> 
  //     case 'answer':
  //       return <AnswerForm 
  //                 correctAnswer={ this.correctAnswer }
  //                 wrongAnswer={ this.wrongAnswer }
  //               />   
  //     default:
  //       return <p>Trouble loading, please refresh page</p>;
  //   }
  // }


  render() {

    const categories = this.state.currentCategories.map(cat => {
      return <Category {...cat}
        key={cat.id}
        shuffle={this.shuffle}
        correctAnswer={this.correctAnswer}
        wrongAnswer={this.wrongAnswer}
        displayAnswer={this.displayAnswer}
        cluesRemaining={ this.state.cluesRemaining }
        dailyDouble={ this.state.dailyDouble }
      />
    })

    const playerCards = this.state.players.map(player => {
      return <PlayerCard {...player} />
    })

    let cats = this.state.startGame === false
      ? 'Enter names and press START GAME to begin'
      : categories

    let players = this.state.startGame === false
      ? <PlayerForm startGame={this.startGame} />
      : playerCards

    return (
      <section className='game-area'>
        <section className='game-tiles'>
          {cats}
        </section>
        <section className='players'>
          {players}
        </section>
      </section>
      
      // <section className='game-board'>
      //   { this.renderGame(this.state.currentDisplay) }
      // </section>
    )
  }
}

// export default Gameboard;

export const mapPropsToState = (state) => ({
  // answer: state.answer,
  clues: state.clues
});

export const mapDispatchToState = (dispatch) => ({
  stashAnswer: (answer) => dispatch(stashAnswer(answer)),
  storeClues: (clues) => dispatch(storeClues(clues))
});

export default connect(mapPropsToState, mapDispatchToState)(Gameboard)
