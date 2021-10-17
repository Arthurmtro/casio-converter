import { lineBreak, newTextLine, paragraphTextEnd } from "./constantCmds"

import { MAX_TEXT_WIDTH, MAX_LINE_NUMBER } from "./../constants/index"

import { IConvertedObj } from "./textConverter"

export function checkLineInfos(convertedObj: IConvertedObj) {
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
  if (!equal) {
    if (convertedObj.lineWidth === maxWidth) {
      return true
    }
  }
  if (convertedObj.lineWidth >= maxWidth) {
    return true
  }
  return false
}

export function lineNumberLimit(convertedObj: IConvertedObj, maxNumber: number) {
  if (convertedObj.lineNumber >= maxNumber) {
    return true
  }
  return false
}
