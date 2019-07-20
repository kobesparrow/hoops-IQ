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
    await this.getClues()
    console.log(this.state.clues)
  }

  getClues = () => {
    const clues = data.clues.filter(clue => clue.categoryId === this.props.id)
    this.setState({ clues })
  }


  render() {
    return (
      <article>
        {this.props.category}
        <ClueTile />
      </article>
    )
  }
}

export default Category