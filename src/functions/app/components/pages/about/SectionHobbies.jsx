//@flow
import * as React from 'react';
import ContentSection from '../../section/ContentSection';

export const SectionHobbies = () : React.Element<any> => (
  <ContentSection id="hobbies" title="Hobbies and intrests">
    <div className="mb-2">
      In addition of programming, which I mentioned in the introduction, I love science as a whole - the scientific approach, scientific methodology and this special mindset about perceiving the world. I am also interested in topics related to the second part of my education - data analysis, mechine learning, data minig and other topics where mathematics and programming are used to extract knowledge from data. Other fields that I am passionate about are mathematics, phisics, astronomy, history, psychology, society or - I think my favourite one - the human mind and the origins of consciousness.
    </div>

    <div className="mb-2">
      I am fond of sport, I often watch football (mainly English Premier League), and also try to play actively with friends. In addition I am Formula 1 fan - I regularly watch racing weekends Unfortunatelly F1 cars are not so available for driving nonetheless carting can also provide a lot of fun and adrenaline. Apart from phisical activities I enjoy playing computer and board games.
    </div>

    <div className="mb-2">
      In my free time I read books - I prefer science fiction, fantasy and popular-science titles. My favourite authors are my heroes Richard Feynman (<i>Surely You&apos;re Joking, Mr. Feynman. Adventures of a Curious Character</i>, <i>What Do You Care What Other People Think? Further Adventures of a Curious Character</i>) and Carl Sagan (<i>Cosmos</i>, <i>Pale Blue Dot</i>), I can also highly recommend: Andy Weir (<i>Martian</i>, <i>Artemis</i>), Yuval Noah Harrari (<i>Homo Deus</i>, <i>Sapiens</i>), Neil da Grasse Tyson (<i>Astrophysics for People in a Hurry</i>, <i>Death by Black Hole and Other Cosmical Quandaries</i>) or Stephen Hawking (<i>A Brief History of Time. From the Big Bang to Black Holes</i>, <i>Brief Anwsers to the Big Questions</i>)
    </div>

    <div className="mb-2">
      I really like movies and TV series in simillar topics as books. Few of my favourite movies are: <i>Interstellar</i>, <i>Arrival</i>, <i>Distict 9</i>, <i>Star Wars</i>. Lastly I gave a chance to the Marvel movies and... I have become a big fan of this universe - Iron Man is my favouirte character. For TV series are ejnoyed watching <i>Westworld</i>, <i>Stranger Things</i>, <i>Chernobyl</i>, <i>Mr Robot</i>, <i>Big Bang Theory</i>.
    </div>
  </ContentSection>
);

export default SectionHobbies;
