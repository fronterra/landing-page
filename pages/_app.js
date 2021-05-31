import '../styles/globals.css'
import { useState } from 'react'
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(() => !isOpen);
  }
  return (
    <>
      <Navbar toggle={toggle} isOpen={isOpen}/>
      <Sidebar toggle={toggle} isOpen={isOpen} />    
      <Component {...pageProps} />
      <Footer />
    </>

  )
}

export default MyApp
