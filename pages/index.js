import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Biketastic</title>
        <meta name="description" content="Biketastic" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          Welcome to <a href="https://biketastic.net">Biketastic!</a>
        </h1>

        <p>
          Get started by editing{" "}
          <code>pages/index.js</code>
        </p>
      </main>

      <footer>
        <a href="https://biketastic.net" rel="noopener noreferrer">
          Powered by biketastic.net
        </a>
      </footer>
    </div>
  );
}
