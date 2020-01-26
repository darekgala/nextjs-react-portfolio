//@flow
import * as React from 'react';
import ContentSection from '../../section/ContentSection';
import StackSection from './StackSection';
import { LOGO_TYPE } from '../../Logo';

const coreItems = [
  { name: 'HTML', logo: LOGO_TYPE.HTML },
  { name: 'CSS', logo: LOGO_TYPE.CSS },
  { name: 'JavaScript', logo: LOGO_TYPE.JS },
  { name: 'TypeScript', logo: LOGO_TYPE.TS }
];

const frameworksItems = [
  { name: 'React', logo: LOGO_TYPE.REACT },
  { name: 'Redux', logo: LOGO_TYPE.REDUX },
  { name: 'NextJS', logo: LOGO_TYPE.NEXT },
  { name: 'Preact', logo: LOGO_TYPE.PREACT },
  { name: 'AngularJS', logo: LOGO_TYPE.ANGULARJS },
  { name: 'Backbone.js', logo: LOGO_TYPE.BACKBONE }
];

const testingItems = [
  { name: 'Jest', logo: LOGO_TYPE.JEST },
  { name: 'Enzyme', logo: LOGO_TYPE.ENZYME },
  { name: 'Jasmine', logo: LOGO_TYPE.JASMINE }
];

const stylingItems = [
  { name: 'Sass', logo: LOGO_TYPE.SASS },
  { name: 'Bootstrap', logo: LOGO_TYPE.BOOTSTRAP },
  { name: 'Bulma', logo: LOGO_TYPE.BULMA }
];

const environmentItems = [
  { name: 'GIT', logo: LOGO_TYPE.GIT },
  { name: 'Webpack', logo: LOGO_TYPE.WEBPACK },
  { name: 'Babel', logo: LOGO_TYPE.BABEL },
  { name: 'ESLint', logo: LOGO_TYPE.ESLINT },
  { name: 'Flow', logo: LOGO_TYPE.FLOW },
  { name: 'Firebase', logo: LOGO_TYPE.FIREBASE }
];

const databaseItems = [
  { name: 'MySQL', logo: LOGO_TYPE.MYSQL },
  { name: 'SQLite', logo: LOGO_TYPE.SQLITE }
];

const backendItems = [
  { name: 'PHP', logo: LOGO_TYPE.PHP },
  { name: 'NodeJS', logo: LOGO_TYPE.NODE },
  { name: 'R', logo: LOGO_TYPE.R }
];

export const StackPage = (): React.Node => (
  <ContentSection title="Tech stack">
    <StackSection title="Core" items={coreItems} />
    <StackSection title="JS frameworks/libraries" items={frameworksItems} />
    <StackSection title="Testing" items={testingItems} />
    <StackSection title="Styling" items={stylingItems} />
    <StackSection title="Environemnt" items={environmentItems} />
    <StackSection title="Database" items={databaseItems} />
    <StackSection title="Back-End" items={backendItems} />
  </ContentSection>
);

export default StackPage;
