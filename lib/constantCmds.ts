import { lineNumberLimit } from "./checkFunctions"
import { MAX_LINE_NUMBER } from "./../constants/index"

import { IConvertedObj } from "./textConverter"

export function initResult(convertedObj: IConvertedObj) {
  // Add start basic configuration to the resultedString
  convertedObj.resultedString = `ClrGraphÙ\nAxesOffÙ\nViewWindow 1,127,0,1,63,0ÙÙ\n\n`
}

export function lineBreak(convertedObj: IConvertedObj) {
  if (!lineNumberLimit(convertedObj, MAX_LINE_NUMBER - 6)) {
    convertedObj.resultedString += '"Ù\n'
  }
  convertedObj.lineNumber += 6
  convertedObj.lineWidth = 0
}

export function newTextLine(convertedObj: IConvertedObj) {
  convertedObj.resultedString += `Text ${convertedObj.lineNumber},2,"`
}

export function paragraphTextEnd(convertedObj: IConvertedObj) {
  convertedObj.resultedString += `"Ø\nClsÙ\n`
  convertedObj.lineNumber = 2
}

export function addProgramEnd(convertedObj: IConvertedObj) {
  convertedObj.resultedString = convertedObj.resultedString.substr(0, convertedObj.resultedString.length - 2) + `Ø\nClsÙ\nStop` + convertedObj.resultedString.substr(convertedObj.resultedString.length - 2 + `Ø\nClsÙ\nStop`.length)
}
