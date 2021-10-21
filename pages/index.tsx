import type { NextPage } from "next"
import dynamic from "next/dynamic"
import Head from "next/head"
import styled from "styled-components"

const TextEditor = dynamic(import("../components/TextEditor"), {
  ssr: false,
})

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Casio Converter</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <InputZone>
          <TitleInput type="text" placeholder="Title" />
          <TextEditor />
          {/* <InputArea value={userInput} onChange={(e) => setUserInput(e.target.value)} placeholder="Enter text here" /> */}
        </InputZone>
      </Main>
    </>
  )
}

const Main = styled.main`
  display: flex;
  height: 100%;
`

const InputZone = styled.section`
  background-color: var(--theme-background-primary);
  color: var(--theme-primary);
  flex-direction: column;
  display: flex;
  width: 100%;
`

const TitleInput = styled.input`
  background-color: var(--theme-background-primary);
  font-size: var(--font-size-title);
  color: var(--theme-primary);
  border: none;
  width: 100%;
  outline: 0;
`

const InputArea = styled.textarea`
  background-color: var(--theme-background-primary);
  font-size: var(--font-size-medium);
  color: var(--theme-primary);
  height: 100%;
  width: 100%;
  resize: none;
  border: none;
  outline: 0;
`

export default Home
