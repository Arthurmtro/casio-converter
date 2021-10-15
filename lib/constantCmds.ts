import { checkLineNumber } from "./checkFunctions"
import { MAX_LINE_NUMBER } from "./../constants/index"

export const initResult = (setResultedString: any) => {
  // Add start basic configuration to the resultedString
  setResultedString(`ClrGraphÙ\nAxesOffÙ\nViewWindow 1,127,0,1,63,0ÙÙ\n\n`)
}

export const lineBreak = (setResultedString: any, lineNumber: number, setLineNumber: any, setLineWidth: any) => {
  if (!checkLineNumber(lineNumber, MAX_LINE_NUMBER - 6)) {
    setResultedString((prev: any) => prev + '"Ù\n')
  }
  setLineNumber((prev: number) => prev + 6)
  setLineWidth(0)
}

export const newTextLine = (setResultedString: any, lineNumber: number) => {
  setResultedString((prev: any) => prev + `Text ${lineNumber},2,"`)
}

export const paragraphTextEnd = (setResultedString: any, setLineNumber: any) => {
  setResultedString((prev: string) => prev + `"Ø\nClsÙ\n`)
  setLineNumber(2)
}

export const addProgramEnd = (setResultedString: any) => {
  setResultedString((prev: string) => prev.substr(0, prev.length - 2) + `Ø\nClsÙ\nStop` + prev.substr(prev.length - 2 + `Ø\nClsÙ\nStop`.length))
}
