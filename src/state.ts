import { createInterface, type Interface } from "node:readline"
import { getCommands } from "./command.js"
import { PokeAPI } from "./pokeapi.js"

export type State = {
  rl: Interface
  commands: Record<string, CLICommand>
  pokeAPI: PokeAPI
  nextLocationsURL: string | null
  prevLocationsURL: string | null
}

export type CLICommand = {
  name: string
  description: string
  callback: (state: State) => Promise<void>
}

export function initState(): State {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "Pokedex > ",
  })
  const newPokeAPi = new PokeAPI()

  return {
    rl,
    commands: getCommands(),
    pokeAPI: newPokeAPi,
    nextLocationsURL: null,
    prevLocationsURL: null,
  }
}
