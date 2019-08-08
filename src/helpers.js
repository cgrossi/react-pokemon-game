const choose = (pokeList) => {
  return pokeList[Math.floor(Math.random() * pokeList.length)]
}

const draw = (pokeList) => {
  return [choose(pokeList), choose(pokeList), choose(pokeList), choose(pokeList)]
}

const playerHand = (player, pokeList) => {
  let hand = draw(pokeList)
  let totalPoints = hand.reduce((acc,next, index, hand) => {
    acc += hand[index].base_experience + next.base_experience
    return acc
    }, 0)
  return {
    playerName: player,
    pokemon: hand,
    points: totalPoints
  }
}
const setDigits = (id) => {
  let length = id.toString().length
  while(length < 3) {
    id = `0${id}`
    length++
  }
  return id
}

export { choose, playerHand, draw, setDigits }