import React, { Component } from 'react'
import './Pokecard.css'

class Pokecard extends Component {
  render() {
    const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'
    return (
      <div className="Pokecard">
        <p className="Pokecard-name">{this.props.name}</p>
        <img className="Pokecard-img" src={`${POKE_API}${this.props.id}.png`} alt={`${this.props.name}`}/>
        <p className="Pokecard-type"><strong>Type:</strong> {this.props.type}</p>
        <p className="Pokecard-exp"><strong>EXP:</strong> {this.props.exp}</p>
      </div>
    )
  }
}

export default Pokecard