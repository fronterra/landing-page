import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { MenuProvider } from '../state';
import NumberedCircle from '../components/Circle';
import Main from '../components/Main';
import Section from '../components/Section';
import Footer from '../components/Footer';
import InfoSection from '../components/InfoSection';
import { homeObjOne } from '../components/InfoSection/Data';
import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import HeroSection from '../components/Hero';

const steps = ["Clone Github Repo", "Follow deployment instructions in README.md file", "Start Reporting Corporate Pollutors"
]


export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (

    <>
      <Head>
          <link
            rel="preload"
            href="/fonts/SoulcraftGX.ttf"
            as="font"
            crossOrigin=""
          />
        {/* <link rel="stylesheet" href="https://use.typekit.net/kgt4trk.css" /> */}
      </Head>
      <Navbar toggle={toggle} />
      <Sidebar toggle={toggle} isOpen={isOpen} />   
      <HeroSection />
    </>
  )
}
