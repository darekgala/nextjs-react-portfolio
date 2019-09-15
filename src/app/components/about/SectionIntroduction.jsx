import React from 'react';
import ContentSection from '../ContentSection';
import { AboutSectionProps } from './prop-type';

export const SectionIntroduction = ({ id }: AboutSectionProps) => (
  <ContentSection id={id} title="About">
    <div className="mb-2">Hello there and welcome in my website! &#x1F44B;</div>

    <div className="mb-2">
      My name is Darek and I work currently as front-end developer in <a href="droplabs.pl" className="text-dark">Droplabs</a> (Kraków, Poland). I am lucky because programming is my job and hobby - I like whole process of thinking about a problem and solving it in my code &#x1F9D4;. I enjoy learning about new technologies, frameworks, sneaky solutions or interesting libraries. In my carrer path, I have learned that writing clean, readable and reusable code is more important than knowing languages or frameworks so I am trying to master these skills. &#x1F4AA; Of course, this is not always so beautifull - configuring of the workspace, managing project dependencies or supporting the entire spectrum of browsers on different devices can be very painfull &#x1F64A;. The front-end is also developing very quickly and sometimes it is difficult to keep up with trends but - The Things We Do For Love... &#x1F605;
    </div>

    <div>
      I currently have experience working with frameworks such as AngularJS and React. In the future I want to learn Angular, Vue and Backbone. I also spent a lot of hours styling and arranging components and views. My favourite CSS setup is: Bootstrap framework, Sass preprocessor and BEM methodology. Another very important thing is testing - somethimes I wonder if I have written more lines of tests rather than non-tests code. I mostly use Jest and Enzyme. I really appreciate the help from linters such as ESlint and Sass Lint - they  enforce good habbits of writing better code and help protect application from bugs and errors. I have experience in working with back-end - on a day-to-day basis I have to manage communication of application and API via asynchronous HTTPS requests. Last but not least, I am responsible for releases the code to the GitHub repository and I have to manage sandbox and production builds using Teamcity (so I know very good GIT and I have also a tiny bit of experience in dev-ops).
    </div>
  </ContentSection>
);

export default SectionIntroduction;
