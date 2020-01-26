//@flow
import * as React from 'react';
import classNames from 'classnames';

export const LOGO_TYPE = {
  REACT: 'react',
  REDUX: 'redux',
  SASS: 'sass',
  SQLITE: 'sqlite',
  TS: 'ts',
  WEBPACK: 'webpack',
  AGH: 'agh',
  BABEL: 'babel',
  CSS: 'css',
  ENZYME: 'enzyme',
  FIREBASE: 'firebase',
  FLOW: 'flow',
  AKAMAI: 'akamai',
  GIT: 'git',
  ANGULARJS: 'angularjs',
  BOOTSTRAP: 'bootstrap',
  NODE: 'node',
  PHP: 'php',
  PREACT: 'preact',
  BULMA: 'bulma',
  IBM: 'ibm',
  HTML: 'html',
  R: 'r',
  NEXT: 'next',
  DROPLABS: 'droplabs',
  ESLINT: 'eslint',
  JASMINE: 'jasmine',
  JEST: 'jest',
  JS: 'js',
  IVLO: 'ivlo',
  KAMBU: 'kambu',
  MYSQL: 'mysql',
  BACKBONE: 'backbone'
};

type Props = {
  type: string,
  className?: string
}

export const Logo = ({ type, className }: Props): React.Node => (
  <div className={classNames(`dg-logo dg-logo--${type}`, className)}></div>
);

export default Logo;
