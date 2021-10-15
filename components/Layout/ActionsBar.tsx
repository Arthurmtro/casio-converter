import React from "react"
import styled from "styled-components"

export default function ActionsBar() {
  return (
    <ActionsElement>
      <ActionsContainer>test</ActionsContainer>
    </ActionsElement>
  )
}

const ActionsElement = styled.nav`
  width: calc(100vw - 15rem);
  height: 6rem;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`

const ActionsContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--theme-background-secondary);
  padding: 10px 8px;
  display: flex;
  flex-direction: column;
`
