import React, { Component } from 'react';
import { connect } from 'react-redux';

export class FinalJeopardy extends Component {
  constructor() {
    super()

    this.state = {
      display: 'intro',
      playerOneWager: 0,
      playerTwoWager: 0,
      playerThreeWager: 0,
      playerOneGuess: '',
      playerTwoGuess: '',
      playerThreeGuess: '',
      // guesses: []
    }
  }

  handleChange = (event) => {
    const {name, value} = event.target
    this.setState({ [name]: value })
  }

  setWagers = (event) => {
    event.preventDefault();
    this.setState({ display: 'question' })
  }

  checkGuesses = (event, finalClue) => {
    event.preventDefault()
    let guesses = []
    let wagers = []
    let spot = 0
    guesses = guesses.push(playerOneGuess, playerTwoGuess, playerThreeGuess)
    wagers = wagers.push(playerOneWager, playerTwoWager, playerThreeWager)
    console.log('guesses', guesses)
    console.log('wagers', wagers)
    this.props.players.forEach(player => {
      if (guesses[spot].toLowerCase() === finalClue.answer) {
        player.score += wager[spot]
        spot++
      } else {
        player.score -= wager[spot]
        spot++
      }
    })
    console.log('players', this.props.players)
    // if (this.state.playerOneGuess.toLowerCase() === finalClue.answer.toLowerCase()){
    //   this.props.players[0].score += playerOneWager
    // } else {
    //   this.props.player[]
    // }
    this.setState({ display: 'answer' })
    console.log('guess logic')
  }

  renderDisplay = (status) => {
    let finalClue = this.props.clues[Math.floor(Math.random() * this.props.clues.length)];
    
    console.log('finalClue', finalClue)
    switch (status) {
      case 'intro': 
          return <section>
            <p>{ this.props.category }</p>
            <form>
              <input
                type='text'
                name='playerOneWager'
                placeholder='Player One Wager'
                onChange={ this.handleChange }
              />
              <input
                type='text'
                name='playerTwoWager'
                placeholder='Player Two Wager'
                onChange={ this.handleChange }
              />
              <input
                type='text'
                name='playerThreeWager'
                placeholder='Player Three Wager'
                onChange={ this.handleChange }
              />
              <button onClick={ this.setWagers }>SUBMIT WAGERS</button>
            </form>
          </section>
      case 'question':
        return <section>
          <p>{finalClue.question}</p>
          <form>
            <input
              type='text'
              name='playerOneGuess'
              placeholder='Player One Guess'
              onChange={this.handleChange}
            />
            <input
              type='text'
              name='playerTwoGuess'
              placeholder='Player Two Guess'
              onChange={this.handleChange}
            />
            <input
              type='text'
              name='playerThreeGuess'
              placeholder='Player Three Guess'
              onChange={this.handleChange}
            />
            <button onClick={ () => this.checkGuesses(finalClue) }>SUBMIT WAGERS</button>
          </form>
        </section>
      case 'answer':
        return <section>
                <p>{ finalClue.answer }</p>
              </section>
      case 'winner':
        return <section>
                <p>Has won the game</p>
              </section>
      default:
        return <p>There was an error, please reload the game.</p>
    }
  }

  render() {
    return (
      <article className='final-jeopardy'>
        <h3>Final Jeopardy</h3>
        { this.renderDisplay(this.state.display) }
      </article>
    )
  }
}

// export default FinalJeopardy;

export const mapPropsToState = (state) => ({
  clues: state.clues
})

export default connect(mapPropsToState)(FinalJeopardy);
