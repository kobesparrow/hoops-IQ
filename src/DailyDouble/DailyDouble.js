import React, { Component } from 'react';

class DailyDouble extends Component {
  constructor() {
    super()

    this.state = {
      status: 'value',
      wager: '0',
      guess: ''
    }
  }

  checkGuess = (event) => {
    event.preventDefault();
    if (this.state.guess.toLowerCase() === this.props.answer.toLowerCase()) {
      this.props.correctAnswer(parseInt(this.state.wager))
      this.props.removeButton()
    } else {
      this.props.wrongAnswer(parseInt(this.state.wager))
      this.props.removeButton()
    }
  }

  storeWager = (event) => {
    this.setState({ wager: event.target.value })
  }

  handleChange = (event) => {
    this.setState({ guess: event.target.value })
  }

  goToQuestion = () => {
    this.setState({ status: 'guess' })
  }

  renderDailyDouble = (status) => {
    switch (status) {
      case 'value':
        return <article className='wager-form'>
                <p>{this.props.category}</p>
                <form>
                  <input
                    type='text'
                    placeholder='wager amount'
                    name='wager'
                    onChange={this.storeWager}
                  />
                  <button onClick={this.goToQuestion}>Wager</button>
                </form>
              </article>
      case 'guess':
        return <article className='answer-form'>
                  <p>wager: {this.state.wager}</p>
                  <p>{this.props.question}</p>
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
      default:
        return null
    }
  }

  render() {

    return (

      <article>
        { this.renderDailyDouble(this.state.status) }
      </article>
    )
  }
}

export default DailyDouble;