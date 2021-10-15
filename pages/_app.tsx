import type { AppProps } from "next/app"
import { useEffect } from "react"
import { createGlobalStyle } from "styled-components"

// Utils
import { toggleTheme } from "../utils/theme"

// Components
import Layout from "../components/Layout"

const GlobalStyle = createGlobalStyle`
  :root {
    --theme-background-primary: #2d3748;
    --theme-background-secondary: #1a202c;
    --theme-primary: #cad7ee;
    --theme-secondary: #df9629;
    --theme-link-primary: #df9629;

    // Global
    --font-size-title: calc(2.5rem);
    --font-size-medium: calc(1.1875rem);
  }
  
  html.light {
    --theme-background-primary: #e2e8f0;
    --theme-background-secondary: #fff;
    --theme-primary: #151618;
    --theme-secondary: #dd8a0e;
    --theme-link-primary: #e49a2c;
  }

  html {
    background: var(--theme-background-primary);
  }

  html.theming,
  html.theming * {
    transition: all 0.2s linear; 
  }

  * {
    margin: 0;
    padding: 0;
    line-height: 1.6;
    text-decoration: none;
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-family: Wotfard, Futura, -apple-system, sans-serif;
    color: var(--theme-primary);
  }

  a {
    color: var(--theme-link-primary);

    &:hover {
      text-decoration: underline; 
    }
  }
`

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const theme = localStorage.getItem("mtro-theme")

    if (theme !== null && theme === String(document.documentElement.classList.contains("light"))) {
      toggleTheme()
    }
  })

  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
