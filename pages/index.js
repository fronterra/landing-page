import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Navbar from '../components/Nav';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { MenuProvider } from '../state';
import NumberedCircle from '../components/Circle';


const GlobalStyle = createGlobalStyle`
  ${reset};

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
  
`;

const steps = ["Clone Github Repo", "Follow deployment instructions in README.md file", "Start Reporting Corporate Pollutors"
]


export default function Home() {
  return (

    <div className={styles.container}>
      <Head>

      </Head>
      <GlobalStyle />
      <MenuProvider>
        <Navbar />
      </MenuProvider>
      <main className={styles.main}>
        <div className={styles.grid}>
          <div className={{...styles.center, ...styles.section}}>
            <h1 className={styles.title}>
              <a style={{ textDecoration: 'none'}} href="#">Community Supported</a> Pollution Reporting
            </h1>

            <p className={styles.description}>
              Fronterra is an open source pollution reporting system. It is comprised of a fully maintained UI and API, designed for easy implementation in any region.  
            </p>               
          </div>
    
          <div className={{...styles.center, ...styles.section, ...styles.examples}}>
              <img src="/elections_10.svg" className={styles.illustration} alt="Git Clone Example" />          
          </div>

        </div>
        <div className={styles.grid}>
          
          <div className={{...styles.center, ...styles.section, ...styles.examples}}>
            <div className={styles.staticCard}>
              <h3> <NumberedCircle Character="1"/> Clone GitHub Repo &rarr;</h3>
              <img src="/git-clone.png" className={styles.codeSample} alt="Git Clone Example" />
            </div>
            
            <div className={styles.staticCard}>
              <h3> <NumberedCircle Character="2"/> Configure Deployment &rarr;</h3>
              <img src="/config-file.png" className={styles.codeSample} alt="Git Clone Example" />
            </div>            
          </div>
        </div>

        <div className={styles.grid}>
          <a href="https://github.com/fronterra" className={styles.card}>
            
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Fronterra UI features and API.</p>
          </a>

          <a href="https://ucsd.edu/" className={styles.card}>
            <h3>Resources &rarr;</h3>
            <p>Discover valuable resources for community organizing</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>Learn how to deploy a pollution reporting system for your region in less than 5 hours.</p>
          </a>

          <a
            href="https://google.com"
            className={styles.card}
          >
            <h3>Partners &rarr;</h3>
            <p>
              Learn more about our sponsors and supporting partners.
            </p>
          </a>
        </div>
      </main>






      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sponsored by{' '}
          <img src="/bath.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
