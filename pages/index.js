import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Biketastic</title>
        <meta name="description" content="Biketastic" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://biketastic.net">Biketastic!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>
      </main>

      <footer className={styles.footer}>
        <a href="https://biketastic.net" rel="noopener noreferrer">
          Powered by biketastic.net
        </a>
      </footer>
    </div>
  );
}
