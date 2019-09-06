import React, { Component } from 'react';
import ClueTile from '../ClueTile/ClueTile';
import data from '../utils/mock-data';
import { connect } from 'react-redux';

export class Category extends Component {
  constructor() {
    super()

    this.state = {
      clues: []
      // loading: true
    }
  }

  render() {

    const clueOne = this.props.clues.find(clue => clue.pointValue === 100 && clue.categoryId === this.props.id)
    const clueTwo = this.props.clues.find(clue => clue.pointValue === 200 && clue.categoryId === this.props.id)
    const clueThree = this.props.clues.find(clue => clue.pointValue === 300 && clue.categoryId === this.props.id)
    const clueFour = this.props.clues.find(clue => clue.pointValue === 400 && clue.categoryId === this.props.id)
    
    return (
      <article className='category'>
        <h3>{this.props.category}</h3>
        <p>{ this.props.clues[0].pointValue } </p>
        {/* <p>{this.consoleLodge(categoryOne) }</p> */}
        <ClueTile {...clueOne} {...this.props} />
        <ClueTile {...clueTwo} {...this.props} />
        <ClueTile {...clueThree} {...this.props} />
        <ClueTile {...clueFour} {...this.props} />
      </article>
    )
  }
}

export const mapPropsToState = (state) => ({
  clues: state.clues
})

export default connect(mapPropsToState)(Category);