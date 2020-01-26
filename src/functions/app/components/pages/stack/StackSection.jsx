//@flow
import * as React from 'react';
import Logo from '../../Logo';

type StackItem = {
  name: string,
  logo: string
}

type StackSectionProps = {
  items: StackItem[],
  title: string
}

export const StackSection = ({ items, title }: StackSectionProps): React.Node => (
  <div className="col-12 mb-5">
    <div className="mb-3 border-bottom borde text-center"><b>{title}</b></div>
    <ul className="list-unstyled d-flex flex-wrap justify-content-center dg-stack-list">
      {
        items.map(({ name, logo }) => (
          <li key={name} className="d-flex flex-column align-items-center mx-4 my-2 dg-stack-list__item">
            <Logo type={logo} className="mb-2 dg-stack-list__item-image" />
            <span>{name}</span>
          </li>
        ))
      }
    </ul>
  </div>
);

export default StackSection;
