//@flow
import * as React from 'react';
import { throttle } from '../../utils/utils';
import classNames from 'classnames';
import { getSectionsPositionsFromElement, handleElementsSelection } from '../../utils/dom';

const ITEM_ACTIVE_CLASS = 'dg-aside-nav__item--active';
const THROTTLE_OFFSET = 100;

type Section = {
  title: string,
  id: string,
}

type Props = {
  children: React.Node,
  sections: Section[]
}

export const SectionwithNavigation = ({ children, sections }: Props) => {
  const sectionRef = React.useRef(null);
  let sectionsElements = [];

  const scrollListener = throttle((): void =>
    handleElementsSelection(sectionRef.current, sectionsElements, ITEM_ACTIVE_CLASS), THROTTLE_OFFSET
  );

  React.useEffect(() => {
    const $container = sectionRef.current;

    sectionsElements = getSectionsPositionsFromElement($container, sections);

    if (window.innerWidth >= 992) {
      handleElementsSelection($container, sectionsElements, ITEM_ACTIVE_CLASS);

      window.addEventListener('scroll', scrollListener);
    }


    return () => window.removeEventListener('scroll', scrollListener);
  }, []);

  return (
    <div className="d-flex" ref={sectionRef}>
      <div>
        {children}
      </div>

      <aside className="d-none d-lg-block dg-aside">
        <nav className="py-2 my-3 border-left dg-aside-nav">
          <ul className="list-unstyled text-nowrap">
            {
              sections.map(({ title, id }) => (
                <a
                  href={`#${id}`}
                  className={classNames(
                    'text-dark',
                    'dg-aside-nav__item'
                  )}
                  key={id}
                >
                  <li className="px-4 py-2">
                    {title}
                  </li>
                </a>
              ))
            }
          </ul>
        </nav>
      </aside>
    </div>
  );
};

export default SectionwithNavigation;
