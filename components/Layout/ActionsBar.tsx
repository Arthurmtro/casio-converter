import React from "react"
import styled from "styled-components"
import Button from "../Button"

export default function ActionsBar() {
  return (
    <ActionsContainer>
      <ActionsElements>
        <Button>text</Button>
      </ActionsElements>
    </ActionsContainer>
  )
}

const ActionsContainer = styled.nav`
  width: calc(100vw - 9rem);
  height: 4rem;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`

const ActionsElements = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--theme-background-secondary);
  padding: 10px 8px;
  display: flex;
`
