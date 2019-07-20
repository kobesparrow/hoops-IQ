import React, { Component } from 'react';
import ClueTile from '../ClueTile/ClueTile';
import data from '../utils/mock-data';

class Category extends Component {
  constructor() {
    super()

    this.state = {
      clues: [],
      loading: true
    }
  }

  async componentDidMount() {
    await this.stashClues()
    console.log(this.state.clues)
  }

  stashClues = () => {
    const clues = this.props.shuffle(data.clues.filter(clue => {
      return clue.categoryId === this.props.id}));
    this.setState({ clues })
  }

  displayClues = () => {
    const clueOne = this.state.clues.find(clue => clue.pointValue === 100)
  }


  render() {

    const clueOne = this.state.clues.find(clue => clue.pointValue === 100)
    const clueTwo = this.state.clues.find(clue => clue.pointValue === 200)
    const clueThree = this.state.clues.find(clue => clue.pointValue === 300)
    const clueFour = this.state.clues.find(clue => clue.pointValue === 400)
    


    let clueCards = this.state.clues.map(clue => {
      return <ClueTile { ...clue } />
    })

    return (
      <article className='category'>
        <h3>{this.props.category}</h3>
        <ClueTile {...clueOne} />
        <ClueTile {...clueTwo} />
        <ClueTile {...clueThree} />
        <ClueTile {...clueFour} />
      </article>
    )
  }
}

export default Category