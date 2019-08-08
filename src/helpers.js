const choose = (pokeList) => {
  return pokeList[Math.floor(Math.random() * pokeList.length)]
}

const draw = (pokeList) => {
  return [choose(pokeList), choose(pokeList), choose(pokeList), choose(pokeList)]
}
const setDigits = (id) => {
  let length = id.toString().length
  while(length < 3) {
    id = `0${id}`
    length++
  }
  return id
}

export { choose, draw, setDigits }