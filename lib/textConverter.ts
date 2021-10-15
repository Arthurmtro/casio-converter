import { useState } from "react"
import { checkLineInfos } from "./checkFunctions"
import { checkUserInput } from "./checkUserInput"
import { addProgramEnd, initResult } from "./constantCmds"

// TODO: UPDATE CORE FUNCTION WITH STATE & CONTEXT

export const TextConverterToCasio = (userInput: string, resultedString: string, setResultedString: any, lineNumber: number, setLineNumber: any, lineWidth: number, setLineWidth: any) => {
  console.clear()

  userInput += "\n" // init userInput by adding a line break

  initResult(setResultedString)

  for (let readIndex = 0; readIndex < userInput.length; readIndex++) {
    // Check for line width to know is he had to line breack or to instantiate new Text
    checkLineInfos(setResultedString, lineNumber, setLineNumber, lineWidth)

    // Chech user input & convert encoding
    checkUserInput(userInput, setResultedString, readIndex, setLineWidth, lineNumber, setLineNumber)
  }

  // Add end basic configuration to the resultedString
  addProgramEnd(setResultedString)

  console.log("userInput :>> ", userInput)
  console.log("resultedString :>> ", resultedString.trim())

  setLineNumber(2)
  setLineWidth(0)
}
