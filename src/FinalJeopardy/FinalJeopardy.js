import React, { Component } from 'react';
import { connect } from 'react-redux';

export class FinalJeopardy extends Component {
  constructor() {
    super()

    this.state = {
      display: 'intro',
      playerOneWager: 0,
      playerTwoWager: 0,
      playerThreeWager: 0
    }
  }

  handleChange = (event) => {
    const {name, value} = event.target
    this.setState({ [name]: value })
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
            </form>
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
