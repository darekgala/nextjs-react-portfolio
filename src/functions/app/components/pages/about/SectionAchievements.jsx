//@flow
import * as React from 'react';
import ContentSection from '../../section/ContentSection';
import Timeline from '../../timeline/Timeline';

const items = [
  {
    logo: 'agh.png',
    period: '2016',
    name: 'Scientific publication in "Zeszyty Studenckiego Towarzystwa Naukowego"',
    content: 'Article title: What does the multidimensional analysis say about the ranking of universities?'
  },
  {
    logo: 'ibm.png',
    period: '2015',
    name: 'IBM Certificate of Attendance',
    content: 'Introduction to the IBM Pure Data for Analytics Data Warehause Appliance'
  }
];

export const SectionAchievements = (): React.Element<any> => (
  <ContentSection id="achievements" title="Achievements">
    <Timeline items={items} />
  </ContentSection>
);

export default SectionAchievements;
