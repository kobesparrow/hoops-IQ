import React, {Component} from 'react';
import data from '../utils/mock-data';
import GameTile from '../GameTile/GameTile';

class Gameboard extends Component {
  constructor() {
    super()

    this.state = {
      clues: null,
      categories: data.categories,
      currentCategories: [],
      loading: true
    }
  }

  async componentDidMount() {
    await this.displayCategories()
    console.log(this.state.currentCategories)
    console.log(this.state.categories)
  }

  displayCategories = () => {
    let shuffledCategories = this.shuffleCategories()
    let categoriesToDisplay = shuffledCategories.splice(0, 4)
    this.setState({
      currentCategories: [...categoriesToDisplay],
      loading: false
    });
  }

  shuffleCategories = () => {
    return this.state.categories.sort(() => 0.5 - Math.random());
  }

  render() {
    let cats

    if (this.state.loading === true) {
      cats = 'loading...'
    } else {
      cats = this.state.currentCategories[0].category
    }

    // const gameTiles = data.

    return (
      <section className='game-board'>
        <article className='game-tiles'>
          { cats }
          <GameTile />
        </article>
      </section>
    )
  }
}

export default Gameboard;