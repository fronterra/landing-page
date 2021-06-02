import { useState } from 'react'
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import { GlobalStyle, theme, colorSystems } from '../styles/theme';
import { ThemeProvider } from 'styled-components';

function MyApp({ Component, pageProps }) {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(() => !isOpen);
  }
  return (
    <>
      <ThemeProvider theme={() => (theme(colorSystems.dark))}>
        <GlobalStyle />
        <Navbar toggle={toggle} isOpen={isOpen} />
        <Sidebar toggle={toggle} isOpen={isOpen} />    
        <Component {...pageProps} />
        <Footer />    
      </ThemeProvider>
    </>

  )
}

export default MyApp
