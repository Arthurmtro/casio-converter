import { useContext } from "react"
import styled from "styled-components"

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlay } from "@fortawesome/free-solid-svg-icons"

// Hook
import { UserInput } from "../../hooks/UserInputContext"

// Lib
import { TextConverterToCasio } from "../../lib/textConverter"

// Component
import Button from "../Button"

export default function ActionsBar() {
  const { userInput } = useContext(UserInput)

  const startConversion = () => {
    // setLoading(true)
    TextConverterToCasio(userInput)
    // setLoading(false)
  }

  return (
    <ActionsContainer>
      <ActionsElements>
        <Button action={startConversion}>Run</Button>
        {/* <FontAwesomeIcon icon={faPlay} /> */}
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
