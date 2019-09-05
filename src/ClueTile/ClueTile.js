import React, { Component } from 'react';
import { connect } from 'react-redux';
import { stashAnswer } from '../actions';
import AnswerForm from '../AnswerForm/AnswerForm';

export class ClueTile extends Component {
  constructor() {
    super() 

    this.state = {
      answer: null,
      answerValue: 0,
      status: 'tile'
    }
  }

  showAnswer = () => {
    this.props.displayAnswer()
    this.props.stashAnswer(this.props)

    // console.log(this.props.cluesRemaining)
    // this.props.displayAnswer(this.props.question, this.props.pointValue)
    // this.setState({ status: 'answer' });
    // this.props.showAnswer()
    // if (this.props.cluesRemaining === this.props.dailyDouble) {
    //   this.setState({status: 'daily double'})
    // } else {
    //   this.setState({status: 'answer'})
    // }
    // // this.props.changeDisplay()
  }

  removeButton = () => {
    this.setState({status: 'empty'})
  }

  renderTile = (status) => {
    switch(status) {
      case 'tile':
        // return <button onClick={() => this.props.stashAnswer(this.props)}>{this.props.pointValue}</button>;
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
        <p>{ this.props.answer }</p>
        <p>{ this.props.question }</p>
        <p>{ this.props.pointValue }</p>
        { this.renderTile(this.state.status) }
      </article>
    )
  }
}

export const mapDispatchToState = (dispatch) => ({
  stashAnswer: (answer) => dispatch(stashAnswer(answer))
});

export default connect(null, mapDispatchToState)(ClueTile);


