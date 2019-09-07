import React, { Component } from 'react';
import { connect } from 'react-redux';

export class FinalJeopardy extends Component {
  constructor() {
    super()

    this.state = {
      display: 'intro'
    }
  }

  renderDisplay = (status) => {
    let finalClue = this.props.clues[Math.floor(Math.random() * this.props.clues.length)];
    
    console.log('finalClue', finalClue)
    switch (status) {
      case 'intro':
        return <p>{ this.props.clues.category }</p>
        
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
