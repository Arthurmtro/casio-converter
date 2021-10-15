import React, { FC, useState } from "react"
import Image from "next/image"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch, faUser, faTh, faCalendar } from "@fortawesome/free-solid-svg-icons"
import ThemeSwitcher from "../ThemeSwitcher"

export default function Navbar() {
  const elements = [
    { text: "search", icon: faSearch },
    { text: "sign ups", icon: faUser },
    { text: "menu", icon: faTh },
    { text: "calendar", icon: faCalendar },
  ]

  return (
    <>
      <NavbarElement>
        {/* <!--dark mode - tight side navigation with yellow notification--> */}
        <NavbarContainer>
          {/* <Image width={16} height={16} src="/assets/images/spotify.png" alt="alt placeholder" className="w-8 h-8 mx-auto mb-5 " />
          <span className="cursor-pointer px-2 py-1 hover:text-gray-300 rounded block mb-5">
            <i className="w-8 fas fa-stream p-2 bg-gray-800 rounded-full"></i>
          </span> */}
          {elements.map(({ text, icon }, idx) => (
            <NavElement key={idx}>
              <Icon icon={icon} />

              <Text>{text}</Text>
            </NavElement>
          ))}
          <ThemeSwitcher />
        </NavbarContainer>
      </NavbarElement>
    </>
  )
}

{
  /* <div 
className="w-full py-4 px-2  h-screen text-gray-700 bg-gray-900 rounded-lg text-left capitalize font-medium shadow-lg"
> */
}

const NavbarElement = styled.nav`
  width: 15vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`

const NavbarContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--theme-background-secondary);
  padding: 10px 8px;
  display: flex;
  flex-direction: column;
`

const NavElement = styled.span`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 1px 2px;
  border-radius: 35;
  margin-bottom: 5;
  color: var(--theme-primary);
  border-radius: 0.45rem;

  &:hover {
    background-color: var(--theme-background-primary);
  }
`

const Icon = styled(FontAwesomeIcon)`
  width: 25%;
  padding: 5px;
`
const Text = styled.span`
  margin: 0 4px;
`
