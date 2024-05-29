// importing bootswatch
import 'bootswatch/dist/cosmo/bootstrap.min.css'
import 'animate.css/animate.min.css'
import { ThemeProvider } from 'next-themes'


// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return(
  <ThemeProvider enableSystem={true} attribute='class'>
  <Component {...pageProps} />
  </ThemeProvider>
  )
}