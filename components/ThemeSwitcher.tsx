import React, { FC } from "react"
import styled from "styled-components"

// utils
import { toggleTheme } from "../utils/theme"

interface IThemeSwitcher {}

const ThemeSwitcher: FC<IThemeSwitcher> = (props) => <Button onClick={toggleTheme}>Click here</Button>

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
