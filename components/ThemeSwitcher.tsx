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

  return <>{theme === "dark" ? <FontAwesomeIcon onClick={handleClick} icon={faMoon} /> : <FontAwesomeIcon onClick={handleClick} icon={faSun} />}</>
}

const Button = styled.button`
  /* TODO: THEME IS INLINE WITH NAVBAR AT START BUT BECOME FLOATING AFTER SCROLL  */

  padding: 8px 16px;
  color: var(--theme-primary);
  background: var(--theme-background-primary);
  outline: none;
  border-radius: 4px;
  border: 1px solid var(--theme-primary);
  cursor: pointer;
`

export default ThemeSwitcher
