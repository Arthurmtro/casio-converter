import { FC } from "react"
import Navbar from "./Navbar"
import styled from "styled-components"
import ActionsBar from "./ActionsBar"

interface ILayout {
  children: JSX.Element
}

const Layout: FC<ILayout> = ({ children }) => (
  <AppContainer>
    <Navbar />
    <Container>
      <ActionsBar />
      {children}
    </Container>
    <footer></footer>
  </AppContainer>
)

const AppContainer = styled.div`
  display: flex;
`

const Container = styled.header`
  display: flex;
  flex-direction: column;
`

export default Layout
