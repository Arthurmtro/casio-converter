import { useState, useEffect } from "react"
import AceEditor from "react-ace"
import styled from "styled-components"

import brace from "brace"
import "brace/mode/markdown"
import "brace/theme/dracula"
import "brace/theme/xcode"

const TextEditor = ({ onChange }: { onChange: (props: string) => "" }) => {
  const [theme, setTheme] = useState<string>("")

  const getTheme = () => {
    if (String(localStorage.getItem("mtro-theme")) == "false") {
      setTheme("light")
    } else {
      setTheme("dark")
    }
  }

  useEffect(() => {
    getTheme()
  })

  return (
    <AceEditor
      mode="markdown"
      theme={`${theme === "light" ? "xcode" : "dracula"}`}
      onChange={onChange}
      name="AceEditor"
      editorProps={{
        $blockScrolling: true,
      }}
      fontSize={23}
      height="90%"
      width="100%"
    />
  )
}

export default TextEditor
