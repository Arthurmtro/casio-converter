import { useState, useEffect, useContext } from "react"
import AceEditor from "react-ace"

import brace from "brace"
import "brace/mode/markdown"
import "brace/theme/dracula"
import "brace/theme/xcode"

// Hook
import { UserInput } from "../hooks/UserInputContext"

/*
TODO: 
  * Separate all Chapters(titles) with content. ?? regex ??
*/

const TextEditor = () => {
  const { userInput, setUserInput } = useContext(UserInput)
  const [theme, setTheme] = useState<string>("")

  const getTheme = () => {
    if (String(localStorage.getItem("mtro-theme")) == "false") {
      setTheme("light")
    } else {
      setTheme("dark")
    }
  }

  useEffect(() => getTheme())

  return <AceEditor mode="markdown" value={userInput} theme={`${theme === "light" ? "xcode" : "dracula"}`} onChange={setUserInput} name="AceEditor" editorProps={{ $blockScrolling: true }} fontSize={23} height="90%" width="100%" />
}

export default TextEditor
