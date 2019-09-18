import * as React from 'react';
import SectionIntroduction from './SectionIntroduction';
import SectionEducation from './SectionEducation';
import SectionHobbies from './SectionHobbies';
import SectionAchievements from './SectionAchievements';
import SectionwithNavigation from '../../section/SectionWithNavigation';

const sections = [
  { title: 'Introduction', id: 'introduction' },
  { title: 'Education', id: 'education' },
  { title: 'Hobbies and intrests', id: 'hobbies' },
  { title: 'Achievements', id: 'achievements' }
];

export const AboutPage = () =>
  <SectionwithNavigation sections={sections}>
    <SectionIntroduction />
    <SectionEducation />
    <SectionHobbies />
    <SectionAchievements />
  </SectionwithNavigation>;

export default AboutPage;
