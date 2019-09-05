import React, {Component} from 'react';
import { connect } from 'react-redux';

class AnswerForm extends Component {
  constructor() {
    super()

    this.state = {
      guess: ''
      // dailyDouble: 
    }
  }

  checkGuess = (event) => {
    event.preventDefault();
    if (this.state.guess.toLowerCase() === this.props.answer.toLowerCase()) {
      this.props.correctAnswer(this.props.pointValue)
      this.props.removeButton()
    } else {
      this.props.wrongAnswer(this.props.pointValue)
      this.props.removeButton()
    }
  }

  handleChange = (event) => {
    this.setState({ guess: event.target.value })
  }
  
  render() {
    return (
      <article className='answer-form'>
        <p>{this.props.answer.question}</p>
        <p>{this.props.pointValue}</p>
        <form>
          <input
            type='text'
            placeholder='input guess'
            name='guess'
            onChange={this.handleChange}
          />
          <button onClick={ this.checkGuess }>Guess</button>
        </form>
      </article>
    )
  }  
}

// export default AnswerForm;

export const mapPropsToState = (state) => ({
  answer: state.answer
})

export default connect(mapPropsToState, null)(AnswerForm);