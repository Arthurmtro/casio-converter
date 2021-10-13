export const TextConverterToCasio = (userInput: string) => {
  console.clear()
  // init userInput by adding a line break
  userInput += "\n"

  let resultedString: string
  // Add start basic configuration to the resultedString
  resultedString = `ClrGraphÙ\nAxesOffÙ\nViewWindow 1,127,0,1,63,0ÙÙ\n\n`

  let lineWidth: number = 0
  let lineNumber: number = 2

  for (let readIndex: number = 0; readIndex < userInput.length; readIndex++) {
    // Check for line width to know is he as to line breack or to instantiate new Text
    if (lineWidth >= 28) {
      if (!(lineNumber + 6 >= 62)) {
        resultedString += '"Ù\n'
      }
      lineNumber += 6
      lineWidth = 0
    }
    if (lineNumber >= 62) {
      resultedString += `"Ø\nClsÙ\n`
      lineNumber = 2
    }
    if (lineWidth === 0) {
      resultedString += `Text ${lineNumber},2,"`
    }

    // User input encoding merging
    switch (userInput[readIndex]) {
      case '"': {
        resultedString += "'"
        lineWidth++
        break
      }
      case "\n": {
        resultedString += '"Ù\n'
        lineWidth = 0
        lineNumber += 6
        break
      }
      default: {
        resultedString += userInput[readIndex]
        lineWidth++
        break
      }
    }
  }

  // Add end basic configuration to the resultedString
  resultedString = resultedString.substr(0, resultedString.length - 2) + `Ø\nClsÙ\nStop` + resultedString.substr(resultedString.length - 2 + `Ø\nClsÙ\nStop`.length)

  console.log("userInput :>> ", userInput)
  console.log("resultedString :>> ", resultedString.trim())
}
