import { useState } from 'react'
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import { GlobalStyle } from '../styles/theme';
import { ThemeProvider } from 'styled-components';
import useDarkMode from '../hooks/useDarkMode';

function MyApp({ Component, pageProps }) {

  const [ theme, darkMode, toggleTheme ] = useDarkMode(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = (close=true) => {
    if (!close) {
      return setIsOpen(false); // check for close override flag
    } else {
      setIsOpen(() => !isOpen);      
    }
  };
  
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Navbar toggleTheme={toggleTheme} darkMode={darkMode} toggle={toggle} isOpen={isOpen} />
        <Sidebar toggleTheme={toggleTheme} darkMode={darkMode} toggle={toggle} isOpen={isOpen} />    
        <Component {...pageProps} />
        <Footer />    
      </ThemeProvider>
    </>

  )
}

export default MyApp
