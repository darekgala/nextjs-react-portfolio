//@flow
import React from 'react';
import NavbarItems from './NavbarItems';
import classNames from 'classnames';
import NavbarLogo from './NavbarLogo';
import Link from 'next/link';

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
    <Link href="/">
      <div className="dg-cursor-pointer">
        <div className="text-center mt-4 mb-3">
          <img src='/static/img/main.jpg' className="dg-navbar__image" />
        </div>
        <NavbarLogo className="my-3" />
      </div>
    </Link>
    <NavbarItems className="my-5" pathname={pathname} />
  </nav>
);

export default NavbarDesktop;
