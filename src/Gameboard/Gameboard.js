import React, {Component} from 'react';
import data from '../utils/mock-data';
import Category from '../Category/Category';

class Gameboard extends Component {
  constructor() {
    super()

    this.state = {
      clues: null,
      categories: data.categories,
      currentCategories: [],
      cluesRemaining: 16,
      loading: true
    }
  }

  async componentDidMount() {
    await this.displayCategories()
    console.log(this.state.currentCategories)
    console.log(this.state.categories)
  }

  displayCategories = () => {
    let shuffledCategories = this.shuffle(this.state.categories).splice(0, 4)
    this.setState({
      currentCategories: [...shuffledCategories],
      loading: false
    });
  }

  shuffle = (toShuffle) => {
    return toShuffle.sort(() => 0.5 - Math.random());
  }

  render() {

    const categories = this.state.currentCategories.map(cat => {
      return <Category {...cat} key={cat.id} shuffle={this.shuffle} />
    })

    let cats = this.state.loading === true 
      ? 'loading' 
      : categories

    return (
      <section className='game-board'>
        <article className='game-tiles'>
          { cats }
        </article>
      </section>
    )
  }
}

export default Gameboard;