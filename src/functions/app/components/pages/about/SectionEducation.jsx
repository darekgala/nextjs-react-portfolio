//@flow
import * as React from 'react';
import ContentSection from '../../section/ContentSection';
import Timeline from '../../timeline/Timeline';
import { LOGO_TYPE } from '../../Logo';

const items = [
  {
    logo: LOGO_TYPE.AGH,
    period: '2015 - 2017',
    name: 'AGH University of Science and Technology in Kraków',
    content: 'Computer Science and Econometrics (Masters Degree)'
  },
  {
    logo: LOGO_TYPE.AGH,
    period: '2012 - 2015',
    name: 'AGH University of Science and Technology in Kraków',
    content: 'Computer Science and Econometrics (Bachelors Degree)'
  },
  {
    logo: LOGO_TYPE.IVLO,
    period: '2009 - 2012',
    name: '4th Secondary School in Tarnów',
    content: 'Mathematics and Information Technology'
  }
];

export const SectionEducation = (): React.Element<any> => (
  <ContentSection id="education" title="Education">
    <Timeline items={items} />
  </ContentSection>
);

export default SectionEducation;
