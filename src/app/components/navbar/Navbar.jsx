//@flow
import React from 'react';
import { withRouter, NextRouter } from 'next/router';
import NavbarDesktop from './NavbarDesktop';
import NavbarMobile from './NavbarMobile';

type Props = {
  router: NextRouter
}

const Navbar = ({ router }: Props) => {
  const { pathname } = router;

  return (
    <aside>
      <NavbarDesktop className="dg-container__navbar d-none d-lg-block" pathname={pathname} />
      <NavbarMobile className="d-lg-none" pathname={pathname} />
    </aside>
  );
};

export default withRouter(Navbar);
