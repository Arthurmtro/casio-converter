import { lineBreak } from "./constantCmds"
import { IConvertedObj } from "./textConverter"

export function checkUserInput(userInput: string, readIndex: number, convertedObj: IConvertedObj) {
  switch (userInput[readIndex]) {
    case '"': {
      convertedObj.resultedString += "'"
      convertedObj.lineWidth += 1
      break
    }
    case "\n": {
      lineBreak(convertedObj)
      break
    }
    default: {
      convertedObj.resultedString += userInput[readIndex]
      convertedObj.lineWidth += 1
      break
    }
  }
}
