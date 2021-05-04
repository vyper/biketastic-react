import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";

import Header from "./Header";

const Layout = ({ children, pageTitle }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{pageTitle}</title>
      </Head>

      <section className="layout">
        <Header />

        <div className="content">{children}</div>
      </section>

      <footer>Built by me!</footer>
    </>
  );
};

Layout.propTypes = {
  pageTitle: PropTypes.string,
  children: PropTypes.any,
};

export default Layout;
