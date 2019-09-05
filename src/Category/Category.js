import React, { Component } from 'react';
import ClueTile from '../ClueTile/ClueTile';
import data from '../utils/mock-data';

class Category extends Component {
  constructor() {
    super()

    this.state = {
      clues: []
      // loading: true
    }
  }

  async componentDidMount() { // This is where the issue happens, because every time it mounts, it goes through this process again
    await this.cluesToState()
  }

  cluesToState = () => {
    console.log('test cluesToState')
    const clues = this.props.shuffle(data.clues.filter(clue => {
      return clue.categoryId === this.props.id}));
    this.setState({ clues })
  }

  render() {

    const clueOne = this.state.clues.find(clue => clue.pointValue === 100)
    const clueTwo = this.state.clues.find(clue => clue.pointValue === 200)
    const clueThree = this.state.clues.find(clue => clue.pointValue === 300)
    const clueFour = this.state.clues.find(clue => clue.pointValue === 400)
    
    return (
      <article className='category'>
        <h3>{this.props.category}</h3>
        <ClueTile {...clueOne} {...this.props} />
        <ClueTile {...clueTwo} {...this.props} />
        <ClueTile {...clueThree} {...this.props} />
        <ClueTile {...clueFour} {...this.props} />
      </article>
    )
  }
}

export default Category