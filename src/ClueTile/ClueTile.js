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
  }

  render() {

    let answerForm = <AnswerForm {...this.props} />

    let tile = this.state.showAnswer === false
      ? <button onClick={this.showAnswer}>{this.props.pointValue}</button> 
      : answerForm 


    return (
      <article>
        {tile}
      </article>
    )
  }

}

export default ClueTile;