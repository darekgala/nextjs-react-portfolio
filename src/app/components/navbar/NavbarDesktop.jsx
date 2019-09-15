//@flow
import React from 'react';
import NavbarItems from './NavbarItems';
import classNames from 'classnames';
import NavbarLogo from './NavbarLogo';

type Props = {
  pathname: string,
  className?: string
}

export const NavbarDesktop = ({ pathname,  className }: Props) => (
  <nav className={classNames(
    className,
    'dg-navbar'
  )}
  >
    <div className="text-center mt-4 mb-3">
      <img src='/static/img/main.jpg' className="dg-navbar__image" />
    </div>
    <NavbarLogo className="my-3" />
    <NavbarItems className="my-5" pathname={pathname} />
  </nav>
);

export default NavbarDesktop;
