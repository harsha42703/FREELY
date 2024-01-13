import { useEffect } from 'react';
import { Featured, Slide} from '../../components';
import { CategoryCard, ProjectCard } from '../../components';
import { cards, projects } from '../../data';

import './Home.scss';

const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  return (
    <div className='home'>
      <Featured />
      <Slide slidesToShow={5}>
        {
          cards.map((card) => (
            <CategoryCard key={card.id} data={card} />
          ))
        }
      </Slide>

      <Slide slidesToShow={4}>
        {
          projects.map((card) => (
            <ProjectCard key={card.id} data={card} />
          ))
        }
      </Slide>
    </div>
  )
}

export default Home