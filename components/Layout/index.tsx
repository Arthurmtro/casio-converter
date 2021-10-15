import { FC } from "react"
import Navbar from "./Navbar"
import styled from "styled-components"
import ActionsBar from "./ActionsBar"

interface ILayout {
  children: JSX.Element
}

const Layout: FC<ILayout> = ({ children }) => (
  <AppContainer>
    <HeaderContainer>
      <Navbar />
      <ActionsBar />
    </HeaderContainer>
    {children}
    <footer></footer>
  </AppContainer>
)

const AppContainer = styled.div`
  display: flex;
`

const HeaderContainer = styled.header`
  display: flex;
`

export default Layout
