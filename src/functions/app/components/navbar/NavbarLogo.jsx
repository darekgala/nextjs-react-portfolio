//@flow
import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';

type Props = {
  className?: string
}

export const NavbarLogo = ({ className }: Props) => {
  const spanClass = 'd-none d-sm-inline';

  return (
    <Link href="/">
      <div className={classNames(className, 'dg-cursor-pointer')}>
        <h3 className="text-light text-center mb-sm-3 dg-navbar-logo__title">
          D<span className={spanClass}>ariusz </span>G<span className={spanClass}>ala</span>
        </h3>
        <h6 className="text-white-50 text-center text-uppercase dg-navbar-logo__subtitle d-none d-sm-block">Front-end Developer</h6>
      </div>
    </Link>
  );
};

export default NavbarLogo;
