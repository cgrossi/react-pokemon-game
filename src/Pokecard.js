import React, { Component } from 'react'
import './Pokecard.css'

class Pokecard extends Component {
  render() {
    return (
      <div className="Pokecard">
        <p className="Pokecard-name">{this.props.name}</p>
        <img className="Pokecard-img" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.id}.png`} alt={`${this.props.name}`}/>
        <p className="Pokecard-type"><strong>Type:</strong> {this.props.type}</p>
        <p className="Pokecard-exp"><strong>EXP:</strong> {this.props.exp}</p>
      </div>
    )
  }
}

export default Pokecard