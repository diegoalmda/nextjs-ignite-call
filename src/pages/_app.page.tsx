import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'

globalStyles() // inicia junto com a aplicação

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
