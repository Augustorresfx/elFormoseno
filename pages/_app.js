import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import { ParallaxProvider } from 'react-scroll-parallax'
// 1. Import the extendTheme function
import { extendTheme } from '@chakra-ui/react'
import { useEffect } from 'react'
import { init } from '../utils/ga'

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: '#c69c6d',
    800: '#1a1a1a',
    700: '#2a69ac',
  },
}

const theme = extendTheme({ colors,
  fonts: {
    heading: `'Merriweather', serif`,
  }
})

// 3. Pass the `theme` prop to the `ChakraProvider`
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    init(process.env.NEXT_PUBLIC_G);
  }, []);
  
  return (
    <ParallaxProvider scrollAxis='vertical'>
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
    </ParallaxProvider>
  )
}

export default MyApp
