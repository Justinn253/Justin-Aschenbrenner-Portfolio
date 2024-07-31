import styles from './Projects.module.css';
import ProjectItem from './ProjectItem';

const Projects = () => {


  return (
    <div>
      <ProjectItem
        job={'Personal Project'}
        time={'July 2024'}
        title={'React Flashcards'}
        desc={'MERN (Mongo, Express.js, React, Node.js) project that is currently in the process of development. This app is used to add and review relevant topics for Software Engineering. Backend will feature a profile to store user data relating to confidence levels for each topic.'}
        skills={['React', 'TypeScript', 'HTML/CSS']}
      ></ProjectItem>
      <ProjectItem
        job={'Personal Project'}
        time={'April 2024'}
        title={'League of Legends Trivia'}
        desc={'First react project I developed to learn and test my react skills in a practical environment. Development is still in progress, but I am working on my flashcards app first.'}
        skills={['React', 'TypeScript', 'HTML/CSS']}
      ></ProjectItem>
      <ProjectItem
        job={'Personal Project'}
        time={'December 2021'}
        title={'Discord Bot'}
        desc={'First real personal project that serves as a community-guided application. It is no longer running but had the ability to interact with a multitude of user commands. Key features included: Youtube streaming, economy, and PvP games.'}
        skills={['JavaScript', 'AWS', 'MongoDB', 'DiscordJS']}
      ></ProjectItem>
      <ProjectItem
        job={'Group Project'}
        time={'October 2021'}
        title={'Chat App'}
        desc={'Full-stack mobile application I developed with a team in college. Frontend developed in android studio, backend used a Heroku Postgres DB and Node.js web service, and interconnected using Express.js. Supported multi-user chat groups. Also included a weather API as well as map pinpointing for precise locations.'}
        skills={['Java', 'Node.js', 'Express.js', 'Postgres', 'Android Studio']}
      ></ProjectItem>
    </div>
  )
}

export default Projects;