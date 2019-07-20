import React, {Component} from 'react';

class AnswerForm extends Component {
  constructor() {
    super()

    this.state = {
      guess: ''
    }
  }

  checkGuess = (event) => {
    event.preventDefault();
    if (this.state.guess.toLowerCase() === this.props.answer.toLowerCase()) {
      console.log('correct')
    } else {
      console.log('wrong!')
    }
  }

  handleChange = (event) => {
    this.setState({ guess: event.target.value })
  }
  
  render() {
    return (
      <article className='answer-form'>
        <p>{this.props.question}</p>
        <p>{this.props.pointValue}</p>
        <form>
          <input
            type='text'
            placeholder='input guess'
            name='guess'
            onChange={this.handleChange}
          />
          <button onClick={this.checkGuess}>Guess</button>
        </form>
      </article>
    )
  }  
}

export default AnswerForm;