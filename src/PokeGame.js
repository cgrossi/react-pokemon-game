import React, { Component } from 'react'
import { playerHand } from './helpers'
import Pokedex from './Pokedex'

class PokeGame extends Component {

  static defaultProps = {
    pokemon: [
      {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
      {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
      {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
      {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
      {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
      {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
      {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
      {id: 133, name: 'Eevee', type: 'normal', base_experience: 65},
    ]
  }

  render() {
    let p1 = playerHand('Player One', this.props.pokemon)
    let p2 = playerHand('Player Two', this.props.pokemon)
    let winner;
    if(p1.points > p2.points) {
      winner = 'p1'
    } else {
      winner = 'p2'
    }

      
    return (
      <div className="PokeGame">
        <Pokedex playerName={p1.playerName} p={p1.pokemon} points={p1.points} isWinner={winner === 'p1'}/>
        <Pokedex playerName={p2.playerName} p={p2.pokemon} points={p2.points} isWinner={winner === 'p2'}/>
      </div>
    )
  }
}

export default PokeGame