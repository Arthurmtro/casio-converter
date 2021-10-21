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
  const { userInput, setUserInput } = useContext(UserInput)
  const startConversion = () => TextConverterToCasio(userInput)

  const addHeader = (level: number) => {
    //TODO: Get cursor position to ajust position
    switch (level) {
      case 1:
        userInput.length ? setUserInput(userInput + "\n# Titre\n") : setUserInput("# Titre\n")
        break
      case 2:
        userInput.length ? setUserInput(userInput + "\n## Titre\n") : setUserInput("## Titre\n")
        break
      default:
        userInput.length ? setUserInput(userInput + "\n# Titre\n") : setUserInput("# Titre\n")
    }
  }

  return (
    <ActionsContainer>
      <ActionsElements>
        <Button action={startConversion}>Run</Button>
        <Button action={() => addHeader(1)}>Header 1</Button>
        <Button action={() => addHeader(2)}>Header 2</Button>
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
