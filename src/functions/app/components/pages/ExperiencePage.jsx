//@flow
import * as React from 'react';
import Timeline from '../timeline/Timeline';
import ContentSection from '../section/ContentSection';
import { LOGO_TYPE } from '../Logo';

const items = [
  {
    logo: LOGO_TYPE.DROPLABS,
    period: 'Mar. 2018 - now',
    name: 'Droplabs',
    content: (
      <React.Fragment>
        <div className="mb-2"><strong>Front-End Developer</strong></div>
        <div>Development of an administration panel where companies can manage online sale of activities and tickets. The panel is build based on React and Redux libraries. Additionally development of an online shop in the form of an insertable widget on the client’s website (using JavaScript and Preact).</div>
      </React.Fragment>
    )
  },
  {
    logo: LOGO_TYPE.AKAMAI,
    period: 'Aug. 2017 - Dec. 2017',
    name: 'Akamai Technologies',
    content: (
      <React.Fragment>
        <div className="mb-2"><strong>Front-End Software Developer (intern)</strong></div>
        <div>Development and maintenance of reporting application in the Akamai Pulsar Framework based on AngularJS.</div>
      </React.Fragment>
    )
  },
  {
    logo: LOGO_TYPE.KAMBU,
    period: 'Sep. 2015 - Oct. 2015',
    name: 'Kambu',
    content: (
      <React.Fragment>
        <div className="mb-2"><strong>JavaScript Developer</strong></div>
        <div>Implementation of the software for private and public sector with the use of JavaScript MVC/MVVM framework - ExtJS and data visualzation using D3 library.</div>
      </React.Fragment>
    )
  }
];

export const ExperiencePage = (): React.Node => (
  <ContentSection title="Experience">
    <div className="mr-5">
      <Timeline items={items} periodComponentWidth={190} />
    </div>
  </ContentSection>
);

export default ExperiencePage;
