//@flow
import React from 'react';
import classNames from 'classnames';
import Link from 'next/link';

type Props = {
  pathname: string,
  className?: string
}

const PATH = {
  ABOUT: '/about',
  EXPERIENCE: '/experience',
  STACK: '/stack',
  PORTFOLIO: '/portfolio',
  PLAYGROUND: '/playground',
  CONTACT: '/contact'
};

export const NavbarItems = ({ pathname, className }: Props) => {
  const navbarItems = [
    { text: 'About', href: PATH.ABOUT, icon: 'icon-user', active: pathname === PATH.ABOUT },
    { text: 'Experience', href: PATH.EXPERIENCE, icon: 'icon-cup', active: pathname === PATH.EXPERIENCE },
    { text: 'Stack', href: PATH.STACK, icon: 'icon-database', active: pathname === PATH.STACK },
    { text: 'Portfolio', href: PATH.PORTFOLIO, icon: 'icon-desktop', active: pathname === PATH.PORTFOLIO },
    // { text: 'Playground', href: PATH.PLAYGROUND, icon: 'icon-beaker', active: pathname === PATH.PLAYGROUND },
    { text: 'Contact', href: PATH.CONTACT, icon: 'icon-comment', active: pathname === PATH.CONTACT }
  ];

  return (
    <ul className={classNames(className, 'w-100')}>
      {
        navbarItems.map(({ text, href, icon, active }, index) => (
          <Link href={href} key={index}>
            <li className="dg-navbar__item pb-lg-4 m-auto">
              <div
                className={classNames(
                  'dg-navbar__item-link',
                  {
                    'dg-navbar__item-link--active': active
                  },
                  'd-flex',
                  'align-items-center'
                )}
              >
                <i className={classNames(
                  icon,
                  'icon',
                  'mr-lg-3',
                )}
                style={{ fontSize: '1.5rem' }}
                />

                <span className="text-uppercase d-none d-lg-inline">{text}</span>
              </div>
            </li>
          </Link>
        ))
      }
    </ul>
  );
};

export default NavbarItems;
