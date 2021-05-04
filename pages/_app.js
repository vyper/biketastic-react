import React from "react";
import PropTypes from "prop-types";

const Biketastic = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

Biketastic.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any,
};

export default Biketastic;
