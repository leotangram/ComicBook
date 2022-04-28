import type { AppProps } from 'next/app'
import { NextUIProvider } from '@nextui-org/react'
import '../styles/globals.css'
import { darkTheme } from '../themes'
import { UIProvider } from '../context/ui'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider theme={darkTheme}>
      <UIProvider>
        <Component {...pageProps} />
      </UIProvider>
    </NextUIProvider>
  )
}

export default MyApp
