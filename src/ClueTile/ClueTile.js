import React, { Component } from 'react';
import AnswerForm from '../AnswerForm/AnswerForm';

class ClueTile extends Component {
  constructor() {
    super() 

    this.state = {
      clicked: false,
      showAnswer: false
    }
  }

  showAnswer = () => {
    this.setState({showAnswer: true})
    console.log('test')
  }

  render() {

    let answerForm = <AnswerForm {...this.props} />

    let tile = this.state.showAnswer === false
      ? <button onClick={this.showAnswer}>{this.props.pointValue}</button> 
      : answerForm 

    // if (this.state.showAnswer === false) {
    // } else {
    //   tile = answerForm
    // }

    return (
      <article>
        {tile}
        {/* {this.props.question} */}
        {/* <button onClick={this.showAnswer}>{this.props.pointValue}</button> */}
      </article>
    )
  }

}

export default ClueTile;