const choose = (pokeList) => {
  return pokeList[Math.floor(Math.random() * pokeList.length)]
}

const draw = (pokeList) => {
  return [choose(pokeList), choose(pokeList), choose(pokeList), choose(pokeList)]
}

export { choose, draw }