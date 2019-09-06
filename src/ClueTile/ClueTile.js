import React, { Component } from 'react';
import { connect } from 'react-redux';
import { stashAnswer } from '../actions';
import AnswerForm from '../AnswerForm/AnswerForm';

export class ClueTile extends Component {
  constructor() {
    super() 

    this.state = {
      status: 'tile'
    }
  }

  showAnswer = () => {
    this.setState({ status: 'answer' })
  }

  removeButton = () => {
    this.setState({ status: 'empty' })
  }

  renderTile = (status) => {
    switch(status) {
      case 'tile':
        return <button onClick={this.showAnswer}>{this.props.pointValue}</button>;
      case 'answer':
        return <AnswerForm {...this.props} removeButton={this.removeButton} />;
      case 'empty':
        return <p></p>
      case 'daily double':
        return <p>Daily Double</p>
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


