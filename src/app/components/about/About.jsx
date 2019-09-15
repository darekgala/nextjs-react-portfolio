import * as React from 'react';
import SectionIntroduction from './SectionIntroduction';
import SectionEducation from './SectionEducation';
import SectionHobbies from './SectionHobbies';
import SectionAchievements from './SectionAchievements';
import { throttle } from '../../utils/utils';

const sections = [
  { title: 'Introduction', id: 'introduction', content: SectionIntroduction },
  { title: 'Education', id: 'education', content: SectionEducation },
  { title: 'Hobbies and intrests', id: 'hobbies', content: SectionHobbies },
  { title: 'Achievements', id: 'achievements', content: SectionAchievements }
];

export const About = () => {
  const scrollListener = throttle((event: React.SyntheticWheelEvent): void => {
    console.log(event);
  }, 500);

  React.useEffect(() => {
    window.addEventListener('scroll', scrollListener);

    return () => window.removeEventListener('scroll', scrollListener);
  }, []);


  return (
    <div className="d-flex">
      <div>
        {
          sections.map(({ content: Content, id }) => <Content id={id} key={id} />)
        }
      </div>

      <aside className="d-none d-lg-block dg-aside">
        <nav className="px-4 py-2 my-3 border-left dg-aside-nav">
          <ul className="list-unstyled text-nowrap">
            {
              sections.map(({ title, id }) => (
                <li className="my-2" key={id}>
                  <a href={`#${id}`} className="text-dark">{title}</a>
                </li>
              ))
            }
          </ul>
        </nav>
      </aside>
    </div>
  );
}

export default About;
