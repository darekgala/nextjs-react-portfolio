//@flow
import React from 'react';
import NavbarItems from './NavbarItems';
import classNames from 'classnames';
import NavbarLogo from './NavbarLogo';

type Props = {
  className?: string,
  pathname: string
};

export const NavbarMobile = ({ className, pathname }: Props) => (
  <nav className={classNames(
    className,
    'navbar navbar-dark bg-dark fixed-top navbar-expand'
  )}
  >
    <NavbarLogo className="navbar-brand mr-2 mr-sm-3" />

    <div className="navbar-collapse" id="navbarSupportedContent">
      <NavbarItems className="navbar-nav mr-auto" pathname={pathname} />
    </div>
  </nav>
);

export default NavbarMobile;
