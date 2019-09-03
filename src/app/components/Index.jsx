import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Navbar from './Navbar';
import 'bootstrap/scss/bootstrap.scss';
import '../static/styles/main.scss';

export const Index = ({ title, children }) => (
  <div>
    <Head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <meta name="author" content="Dariusz Gala" />
      <meta name="description" content="Dariusz Gala Fron-End Developer home page" />
      <meta name="keywords" content="web, app, it, web-app, application, website, dariusz, dariusz gala, gala, front-end, front-end developer, portfolio, dariusz gala portfolio, dariusz gala front-end" />
      <link rel="shortcut icon" href="/static/favicon.ico" />
      <title>{title}</title>
    </Head>

    <div className="dg-container">
      <Navbar className="dg-container__navbar" />

      <div className="dg-container__content">
        {children}
      </div>
    </div>
  </div>
);

Index.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default Index;
