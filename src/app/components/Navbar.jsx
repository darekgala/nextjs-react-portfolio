import React from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon, { ICON_TYPE } from './Icon';

const PATH = {
  DEFAULT: '/',
  EXPERIENCE: '/experience',
  STACK: '/stack',
  PLAYGROUND: '/playground',
  CONTACT: '/contact'
};

const Navbar = ({ className, router }) => {
  const { pathname } = router;
  const navbarItems = [
    { text: 'About', href: PATH.DEFAULT, icon: ICON_TYPE.USER, active: pathname === PATH.DEFAULT },
    { text: 'Experience', href: PATH.EXPERIENCE, icon: ICON_TYPE.CHART, active: pathname === PATH.EXPERIENCE },
    { text: 'Stack', href: PATH.STACK, icon: ICON_TYPE.TOOLS, active: pathname === PATH.STACK },
    { text: 'Playground', href: PATH.PLAYGROUND, icon: ICON_TYPE.FLASK, active: pathname === PATH.PLAYGROUND },
    { text: 'Contact', href: PATH.CONTACT, icon: ICON_TYPE.CONTACT, active: pathname === PATH.CONTACT }
  ];

  return (
    <nav className={classNames(className, 'dg-navbar')}>
      <div className="text-center mt-4 mb-3">
        <img src='/static/images/main-image.jpg' className="dg-navbar__image" />
      </div>
      <h3 className="text-light text-center my-3 dg-navbar__title">Dariusz Gala</h3>
      <h6 className="text-white-50 text-center text-uppercase my-3 dg-navbar__subtitle">Front-end Developer</h6>

      <ul className="my-5">
        {
          navbarItems.map(({ text, href, icon, active }, index) => (
            <Link href={href} key={index}>
              <li className="dg-navbar__item py-3 text-center">
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
                  <Icon icon={icon} className="mr-4" size="lg" />

                  <a className="text-uppercase">{text}</a>
                </div>
              </li>
            </Link>
          ))
        }
      </ul>
    </nav>
  );
};

Navbar.propTypes = {
  router: PropTypes.object.isRequired,
  className: PropTypes.string
};

export default withRouter(Navbar);
