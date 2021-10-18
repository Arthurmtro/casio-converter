import { lineBreak, newTextLine, paragraphTextEnd } from "./constantCmds"

import { MAX_TEXT_WIDTH, MAX_LINE_NUMBER } from "./../constants/index"

import { IConvertedObj } from "./textConverter"

export function checkLineInfos(userInput: string, readIndex: number, convertedObj: IConvertedObj) {
  // Check if the word is cut
  // if(userInput[readIndex])
  // var word = "foo"
  // var regex = new RegExp("\\b" + word + "\\b")
  // "I went to the foobar and ordered foo.".search(regex)

  if (lineWidthLimit(convertedObj, MAX_TEXT_WIDTH)) {
    lineBreak(convertedObj)
  }
  if (lineNumberLimit(convertedObj, MAX_LINE_NUMBER)) {
    paragraphTextEnd(convertedObj)
  }
  if (lineWidthLimit(convertedObj, 0, true)) {
    newTextLine(convertedObj)
  }
}

export function lineWidthLimit(convertedObj: IConvertedObj, maxWidth: number, equal: boolean = false) {
  if (equal && convertedObj.lineWidth === maxWidth) {
    return true
  } else if (!equal && convertedObj.lineWidth >= maxWidth) {
    return true
  } else {
    return false
  }
}

export function lineNumberLimit(convertedObj: IConvertedObj, maxNumber: number) {
  if (convertedObj.lineNumber >= maxNumber) {
    return true
  } else {
    return false
  }
}
