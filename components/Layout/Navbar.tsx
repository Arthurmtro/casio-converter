import React, { FC, useState } from "react"
import Image from "next/image"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch, faUser, faTh, faCalendar, faStream } from "@fortawesome/free-solid-svg-icons"
import ThemeSwitcher from "../ThemeSwitcher"

export default function Navbar() {
  const elements = [
    { text: "search", icon: faSearch },
    { text: "category", icon: faStream },
    { text: "menu", icon: faTh },
  ]

  return (
    <NavbarElement>
      <NavbarContainer>
        <div>
          <Image width={64} height={64} src="/assets/images/spotify.png" alt="alt placeholder" />

          {elements.map(({ text, icon }, idx) => (
            <NavElement key={idx}>
              <IconBox>
                <FontAwesomeIcon icon={icon} />
              </IconBox>

              <Text>{text}</Text>
            </NavElement>
          ))}
        </div>
        <ThemeSwitcher />
      </NavbarContainer>
    </NavbarElement>
  )
}

const NavbarElement = styled.nav`
  width: 9rem;
  height: 100vh;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`

const NavbarContainer = styled.div`
  background-color: var(--theme-background-secondary);
  width: 100%;
  height: 100%;
  padding: 10px 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-bottom-right-radius: 0.55rem;
`

const NavElement = styled.span`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 1px 2px;
  margin-bottom: 5px;
  color: var(--theme-primary);
  border-radius: 0.45rem;
  margin: 10px 0;

  &:hover {
    background-color: var(--theme-background-primary);
  }
`

const IconBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  padding: 8px;
  background-color: var(--theme-background-primary);
  border-radius: 100%;
`

const Text = styled.span`
  margin: 0 10px;
  font-family: var(--font-family);
`
