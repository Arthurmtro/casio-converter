import React, { FC } from "react"
import styled from "styled-components"

interface IButton {
  children: JSX.Element | string
  action?: () => {}
}

export default function Button({ children, action = undefined }: IButton) {
  return <ButtonBox onClick={action}>{children}</ButtonBox>
}

const ButtonBox = styled.button`
  padding: 8px 16px;
  color: var(--theme-primary);
  background: var(--theme-background-primary);
  outline: none;
  border-radius: 4px;
  border: 1px solid var(--theme-primary);
  cursor: pointer;
`
