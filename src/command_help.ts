import type { State } from "./state.js"

export async function commandHelp(state: State) {
  console.log(`Welcome to the Pokedex!\nUsage:\n`)

  Object.values(state.commands).forEach((el) =>
    console.log(`${el.name}: ${el.description}`),
  )
}
