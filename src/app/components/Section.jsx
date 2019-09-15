//@flow
import * as React from 'react';
import classNames from 'classnames';

type Props = {
  children: React.Node,
  className?: string,
  id?: string
}

export const Section = ({children, className, id}: Props) => (
  <section className={classNames('dg-section', className)} id={id}>
    {children}
  </section>
);

export default Section;
