//@flow
import * as React from 'react';
import ContentSection from '../../section/ContentSection';
import classNames from 'classnames';

const items = [
  {
    type: 'pzme',
    link: 'http://www.pzme.zarz.agh.edu.pl/',
    title: 'Department of Applications of Mathematics In Economics Website',
    description: 'An interactive website for students and employees of depatment'
  },
  {
    type: 'droplabs-panel',
    link: 'https://panel.droplabs.pl/',
    title: 'Droplabs - Client Panel',
    description: 'Administration panel where companies can manage online sale of activities and tickets'
  },
  {
    type: 'droplabs-widget',
    link: 'https://www.parkwodny.pl/kup-bilet/',
    title: 'Droplabs - Widget',
    description: 'Online shop in the form of an insertable widget where customers can buy activities and tickets'
  },
  {
    type: 'proeko2',
    link: 'https://www.proeko2.pl/',
    title: 'Pro Eko 2 - Elżbieta Bech',
    description: 'Company homepage for the Pro-Eko 2 Elżbieta Bech'
  }
];

export const PortfolioPage = (): React.Node => (
  <ContentSection title="Portfolio">
    <div className="row dg-portfolio-list">
      {
        items.map(({title, description, type, link}) => (
          <div className="col-12 col-lg-6 mb-5" key={title}>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="dg-portfolio-list__item border d-flex flex-column h-100"
            >
              <div
                className={classNames(
                  'dg-portfolio-list__item-background',
                  {[`dg-portfolio-list__item-background--${type}`]: type}
                )}
              />

              <div className="dg-portfolio-list__item-content border-top p-3">
                <div className="dg-portfolio-item__item-title mb-2 w-100"><b>{title}</b></div>
                <span className="dg-portfolio-list__item-description">{description}</span>
              </div>
            </a>
          </div>
        ))
      }
    </div>
  </ContentSection>
);

export default PortfolioPage;
