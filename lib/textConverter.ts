import { checkLineInfos } from "./checkFunctions"
import { checkUserInput } from "./checkUserInput"
import { addProgramEnd, initResult } from "./constantCmds"

export interface IConvertedObj {
  resultedString: string
  lineNumber: number
  lineWidth: number
}

export const TextConverterToCasio = async (userInput: string) => {
  console.clear()
  console.group()

  userInput += "\n" // init userInput by adding a line break

  const convertedObj: IConvertedObj = {
    resultedString: "",
    lineNumber: 2,
    lineWidth: 0,
  }

  initResult(convertedObj)

  for (let readIndex = 0; readIndex < userInput.length; readIndex++) {
    // Check for line width to know is he had to line breack or to instantiate new Text
    checkLineInfos(convertedObj)

    // Chech user input & convert encoding
    checkUserInput(userInput, readIndex, convertedObj)
  }

  // Add end basic configuration to the resultedString
  addProgramEnd(convertedObj)

  console.log("userInput :>> ", userInput)
  console.log("resultedString :>> ", convertedObj.resultedString.trim())
  console.groupEnd()
}
