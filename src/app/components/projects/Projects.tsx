import styles from './Projects.module.css';
import ProjectItem from './ProjectItem';

const Projects = () => {


  return (
    <div>
      <ProjectItem
        job={'Personal'}
        time={'July 2024'}
        title={'React Flashcards'}
        desc={''}
        skills={['React', 'TypeScript', 'HTML/CSS']}
      ></ProjectItem>
      <ProjectItem
        job={'Personal'}
        time={'April 2024'}
        title={'League of Legends Trivia'}
        desc={''}
        skills={['React', 'TypeScript', 'HTML/CSS']}
      ></ProjectItem>
      <ProjectItem
        job={'Personal'}
        time={'December 2021'}
        title={'Discord Bot'}
        desc={''}
        skills={['JavaScript', 'AWS', 'MongoDB', 'DiscordJS']}
      ></ProjectItem>
      <ProjectItem
        job={'Group'}
        time={'October 2021'}
        title={'Chat App'}
        desc={''}
        skills={['Java', 'Node.js', 'Express.js', 'Postgres', 'Android Studio']}
      ></ProjectItem>
    </div>
  )
}

export default Projects;