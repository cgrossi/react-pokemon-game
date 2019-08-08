import React, { Component } from 'react'
import Pokedex from './Pokedex'

class PokeGame extends Component {

  render() {
    
    return (
      <div className="PokeGame">
        <Pokedex playerName={"Player One"}/>
        <Pokedex playerName={"Player Two"}/>
      </div>
    )
  }
}

export default PokeGame