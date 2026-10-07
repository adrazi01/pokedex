import { State } from "./state.js"

export function startREPL(state: State) {
  state.rl.prompt()

  state.rl.on("line", async (input) => {
    const words = cleanInput(input)
    if (words.length === 0) {
      state.rl.prompt()
      return
    }
    const command = state.commands[words[0]]
    if (command) {
      try {
        command.callback(state)
      } catch (err) {
        console.log(err)
      }
    } else {
      console.log("Unknown command")
    }
    state.rl.prompt()
  })
}

export function cleanInput(input: string): string[] {
  const stripped = input.toLowerCase().trim().split(/\s+/)
  return stripped.filter((element) => element !== "")
}
