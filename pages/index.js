import Head from 'next/head';
import HeroSection from '../components/Hero';

const Home = (props) => {
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
      <HeroSection {...props.hero} />
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  return {
    props: {
      hero: {
        id: "home",
        heading: "Crowdsourced Solutions to Pollution Reporting",
        subheading: "A free, open-source software aimed at helping communities fight industrial pollution from the local level.",
        cta: "Check out our San Diego - Tijuana pilot program!",
        ctaButton: {
            content: "Binational Pilot",
            href: "/fronterra"
        },
        images: {
            image1: require('../public/images/hero/image1.svg'),
        }
      }
    }
  };
};
