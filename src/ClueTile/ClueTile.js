import React, { Component } from 'react';
import { connect } from 'react-redux';
import { stashAnswer } from '../actions';
import AnswerForm from '../AnswerForm/AnswerForm';
import DailyDouble from '../DailyDouble/DailyDouble';

export class ClueTile extends Component {
  constructor() {
    super() 

    this.state = {
      status: 'tile'
    }
  }

  showAnswer = () => {
    console.log('clues remaining', this.props.cluesRemaining)
    console.log('daily double', this.props.dailyDouble)
    if (this.props.dailyDouble === this.props.cluesRemaining) {
      this.setState({ status: 'daily double' })
    } else {
      this.setState({ status: 'answer' })
    }
  }

  removeButton = () => {
    this.setState({ status: 'empty' })
  }

  renderTile = (status) => {
    switch(status) {
      case 'tile':
        return <button onClick={this.showAnswer}>{this.props.pointValue}</button>;
      case 'answer':
        return <AnswerForm {...this.props} removeButton={ this.removeButton } />;
      case 'empty':
        return <p></p>
      case 'daily double':
        return <DailyDouble {...this.props} removeButton={ this.removeButton } />
      default:
        return <p></p>
    }
  }

  render() {
    return (
      <article className='clue-tile'>
        { this.renderTile(this.state.status) }
      </article>
    )
  }
}

export const mapDispatchToState = (dispatch) => ({
  stashAnswer: (answer) => dispatch(stashAnswer(answer))
});

export default connect(null, mapDispatchToState)(ClueTile);


