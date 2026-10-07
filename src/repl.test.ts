import { cleanInput } from "./repl.js"
import { describe, expect, test } from "vitest"

describe.each([
  {
    input: "  hello world  ",
    expected: ["hello", "world"],
  },
  {
    input: "  HELLO world hello ",
    expected: ["hello", "world", "hello"],
  },
  {
    input: "  myNameWorld  ",
    expected: ["mynameworld"],
  },
])("cleanInput($input)", ({ input, expected }) => {
  test(`Expected: ${expected}`, () => {
    const actual = cleanInput(input)
    expect(actual).toHaveLength(expected.length)
    for (const i in expected) {
      expect(actual[i]).toBe(expected[i])
    }
  })
})
