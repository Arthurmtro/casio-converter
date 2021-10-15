import { lineBreak, newTextLine, paragraphTextEnd } from "./constantCmds"

import { MAX_TEXT_WIDTH, MAX_LINE_NUMBER } from "./../constants/index"

export const checkLineInfos = (setResultedString: any, lineNumber: number, setLineNumber: any, lineWidth: any) => {
  if (checkLineWidth(lineWidth, MAX_TEXT_WIDTH)) {
    lineBreak(setResultedString, lineNumber, setLineNumber, lineWidth)
  }
  if (checkLineNumber(lineNumber, MAX_LINE_NUMBER)) {
    paragraphTextEnd(setResultedString, setLineNumber)
  }
  if (checkLineWidth(lineWidth, 0, true)) {
    newTextLine(setResultedString, lineNumber)
  }
}

export const checkLineWidth = (lineWidth: number, maxWidth: number, equal: boolean = false) => {
  if (!equal) {
    if (lineWidth === maxWidth) {
      return true
    }
  }
  if (lineWidth >= maxWidth) {
    return true
  }
  return false
}

export const checkLineNumber = (lineNumber: number, maxNumber: number) => {
  if (lineNumber >= maxNumber) {
    return true
  }
  return false
}
