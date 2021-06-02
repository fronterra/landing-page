import Head from 'next/head';
import HeroSection from '../components/Hero';

export default function Home() {
  return (
    <>
      <Head>
        <title>Pollution Project</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Crowdsourced solutions to pollution reporting" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="stylesheet" href="https://use.typekit.net/kgt4trk.css"></link>
        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200;600;900&display=swap" rel="stylesheet" />
      </Head>
      <HeroSection />
    </>
  )
}
