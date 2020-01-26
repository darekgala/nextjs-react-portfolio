//@flow
import * as React from 'react';
import classNames from 'classnames';

type Item = {
  link: string,
  alt?: string,
  icon: string
}

type Items = {
  items: Item[],
  title: string,
  className?: string
}

export const ContactIcons = ({ items, title, className }: Items): React.Node => (
  <div className={className}>
    <h6 className="mb-3 text-center"><b>{title}</b></h6>
    <ul className="list-unstyled d-flex justify-content-center">
      {
        items.map(({ icon, link, alt }) => (
          <a href={link} alt={alt} key={icon} className="text-dark" target="_blank" rel="noopener noreferrer">
            <li>
              <i className={classNames('dg-icon', 'icon', `icon-${icon}`)} style={{ fontSize: '3rem' }} />
            </li>
          </a>
        ))
      }
    </ul>
  </div>
);

export default ContactIcons;
