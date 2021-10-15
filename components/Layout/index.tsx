import { FC } from "react"
import Navbar from "./Navbar"
import styled from "styled-components"

interface ILayout {
  children: JSX.Element
}

const Layout: FC<ILayout> = ({ children }) => (
  <AppContainer>
    <header>
      <Navbar />
    </header>
    {children}
    <footer></footer>
  </AppContainer>
)

const AppContainer = styled.div`
  display: flex;
`

export default Layout
