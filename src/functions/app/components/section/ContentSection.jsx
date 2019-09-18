//@flow
import * as React from 'react';
import Section from './Section';

type Props = {
  id?: string,
  title: string,
  children: React.Node
}

export const ContentSection = ({ id, title, children }: Props) => (
  <Section id={id}>
    <header className="mb-3">
      <h1 className="font-weight-bold d-none d-md-block">{title}</h1>
      <h3 className="font-weight-bold d-md-none">{title}</h3>
    </header>

    <div className="dg-content-text text-justify">
      {children}
    </div>
  </Section>
);

export default ContentSection;
