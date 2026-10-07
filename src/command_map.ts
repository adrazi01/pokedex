import { State } from "./state.js"

export async function commandMap(state: State) {
  const url = state.nextLocationsURL ?? undefined
  const response = await state.pokeAPI.fetchLocations(url)
  response.results.forEach((el) => console.log(el.name))
  state.nextLocationsURL = response.next
  state.prevLocationsURL = response.previous
}

export async function commandMapB(state: State) {
  const url = state.prevLocationsURL ?? undefined
  const response = await state.pokeAPI.fetchLocations(url)
  response.results.forEach((el) => console.log(el.name))
  state.nextLocationsURL = response.next
  state.prevLocationsURL = response.previous
}
