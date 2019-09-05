import React, {Component} from 'react';

class PlayerForm extends Component {
  constructor() {
    super()

    this.state = {
      playerOne: 'Player One',
      playerTwo: 'Player Two',
      playerThree: 'Player Three'
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleClick = (event) => {
    event.preventDefault();
    this.props.startGame(this.state)
  }

  render() {
    return (
      <section>
        {this.props.test}
        <form>
          <input
            type='text'
            placeholder='player one'
            name='playerOne'
            onChange={this.handleChange}
          />
          <input
            type='text'
            placeholder='player one'
            name='playerTwo'
            onChange={this.handleChange}
          />
          <input
            type='text'
            placeholder='player one'
            name='playerThree'
            onChange={this.handleChange}
          />
          <button onClick={ this.handleClick }>START GAME</button>
        </form>
      </section>
    )
  }
}

export default PlayerForm;