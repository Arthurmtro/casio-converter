import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  @font-face {
  font-family: "Wotfard";
  src: url("/assets/fonts/Wotfard-Regular.otf") format("otf");
  font-style: normal;
  font-weight: 400;
  font-display: swap;
}

  :root {
    --theme-background-primary: #2d3748;
    --theme-background-secondary: #1a202c;
    --theme-primary: #cad7ee;
    --theme-secondary: #df9629;
    --theme-link-primary: #df9629;

    // Global
    --font-size-title: calc(3rem);
    --font-size-medium: calc(1.4rem);
  }
  
  html.light {
    --theme-background-primary: #e2e8f0;
    --theme-background-secondary: #ffffffe6;
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
    line-height: 1.4;
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
