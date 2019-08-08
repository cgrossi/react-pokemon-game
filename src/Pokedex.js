import React, { Component } from 'react'
import { setDigits } from './helpers'
import Pokecard from './Pokecard'
import './Pokedex.css'

class Pokedex extends Component {
  render() {
    return (
      <div className="Pokedex">
        <h2 className="Pokedex-player">{this.props.playerName}</h2>
        <div className="Pokedex-draw">{this.props.p.map(p => (
          <Pokecard id={setDigits(p.id)} name={p.name} type={p.type} exp={p.base_experience} />
        ))} 
        </div>
        <h3>Points: {this.props.points}</h3>
        <h4 className={this.props.isWinner ? `win` : `lose`}>{this.props.isWinner ? `The Winner!! 😎` : `The Loser 😥`}</h4>
      </div>
    )
  }
}

export default Pokedex