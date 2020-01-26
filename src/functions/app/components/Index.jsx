//@flow
import * as React from 'react';
import Head from 'next/head';
import 'bootstrap/scss/bootstrap.scss';
import '../static/styles/main.scss';
import Navbar from './navbar/Navbar';

type Props = {
  title: string,
  children: React.Node
};

export const Index = ({title, children}: Props) => (
  <div>
    <Head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <meta name="author" content="Dariusz Gala" />
      <meta name="description" content="Strona wizytówka/portfolio, gdzie poza moimi projektami znajdziesz dodatkowe informacje o moich umiejętnościach, doświadczeniu, edukacji czy zainteresowaniach" />
      <meta name="keywords" content="website, dariusz, dariusz gala, gala, front-end, front-end developer, dariusz gala portfolio, dariusz gala front-end developer" />
      <link rel="shortcut icon" href="/static/img/favicon.ico" />
      <title>{title}</title>
    </Head>

    <div className="dg-container">
      <Navbar />

      <main className="dg-container__content">
        {children}
      </main>
    </div>
  </div>
);

export default Index;
