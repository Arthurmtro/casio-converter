import type { AppProps } from "next/app"
import Head from "next/head"
import { useEffect } from "react"

// Utils
import { GlobalStyle } from "../GlobalStyle"
import { toggleTheme } from "../utils/theme"

// Components
import Layout from "../components/Layout"

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const theme = localStorage.getItem("mtro-theme")

    if (theme !== null && theme === String(document.documentElement.classList.contains("light"))) {
      toggleTheme()
    }
  })

  return (
    <>
      <Head>{/* <link rel="preload" href="/assets/fonts/Wotfard-Regular.otf" as="font" crossOrigin="" /> */}</Head>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
