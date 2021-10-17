import React, { useEffect, useState } from "react"
import styled from "styled-components"

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons"

// utils
import { toggleTheme } from "../utils/theme"

const ThemeSwitcher = () => {
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

  const handleClick = () => {
    setTheme((prev: string) => (prev === "light" ? "dark" : "light"))
    toggleTheme()
  }

  return <Button>{theme === "dark" ? <FontAwesomeIcon onClick={handleClick} icon={faMoon} /> : <FontAwesomeIcon onClick={handleClick} icon={faSun} />}</Button>
}

const Button = styled.button`
  width: 50px;
  height: 50px;
  padding: 12px;
  border-radius: 100%;
  border: 0;
  color: var(--theme-primary);
  background: var(--theme-background-primary);
  cursor: pointer;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;
`

export default ThemeSwitcher
