import { lineBreak } from "./constantCmds"

export const checkUserInput = (userInput: string, setResultedString: any, readIndex: number, setLineWidth: any, lineNumber: number, setLineNumber: any) => {
  switch (userInput[readIndex]) {
    case '"': {
      setResultedString((prev: string) => prev + "'")
      setLineWidth((prev: number) => prev + 1)
      break
    }
    case "\n": {
      lineBreak(setResultedString, lineNumber, setLineNumber, setLineWidth)
      break
    }
    default: {
      setResultedString((prev: string) => prev + userInput[readIndex])
      setLineWidth((prev: number) => prev + 1)
      break
    }
  }
}
