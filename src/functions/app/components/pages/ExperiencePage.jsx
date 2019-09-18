//@flow
import * as React from 'react';
import Timeline from '../timeline/Timeline';
import ContentSection from '../section/ContentSection';

const items = [
  {
    logo: 'droplabs.png',
    period: 'Mar. 2018 - now',
    name: 'Droplabs',
    content: (
      <React.Fragment>
        <div className="mb-2">Front-End Developer</div>
        <div>Development of an administration panel where companies can manage online sale of activities and tickets. The panel is build based on React and Redux libraries. Additionally development of an online shop in the form of an insertable widget on the client’s website (using JavaScript and Preact).</div>
      </React.Fragment>
    )
  },
  {
    logo: 'akamai.png',
    period: 'Aug. 2017 - Dec. 2017',
    name: 'Akamai Technologies',
    content: (
      <React.Fragment>
        <div className="mb-2">Front-End Software Developer (intern)</div>
        <div>Development and maintenance of reporting application in the Akamai Pulsar Framework based on AngularJS.</div>
      </React.Fragment>
    )
  },
  {
    logo: 'kambu.png',
    period: 'Sep. 2015 - Oct. 2015',
    name: 'Kambu',
    content: (
      <React.Fragment>
        <div className="mb-2">JavaScript Developer</div>
        <div>Implementation of the software for private and public sector with the use of JavaScript MVC/MVVM framework - ExtJS and data visualzation using D3 library.</div>
      </React.Fragment>
    )
  }
];

export const ExperiencePage = (): React.Node => (
  <ContentSection title="Professional experience">
    <div className="mr-5">
      <Timeline items={items} periodComponentWidth={190} />
    </div>
  </ContentSection>
);

export default ExperiencePage;
