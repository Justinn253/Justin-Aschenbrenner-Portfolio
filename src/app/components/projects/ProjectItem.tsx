import { useRef } from 'react';
import styles from './Projects.module.css';

const ProjectStyles = ({job, time, title, desc, skills}: any) => {
  let ref = '';
  switch (title) {
    case 'React Flashcards':
      ref = 'https://github.com/Justinn253/Flashcards-Prep';
      break;
    case 'Discord Bot':
      ref = 'https://github.com/Justinn253/Justins-Discord-Bot';
      break;
  }
  
  return (
    <a className={styles.experienceContainer} href={ref} target='_blank' rel='noopener noreferrer'>
      <div className={styles.left}>
        <div className={styles.experienceJob}>
          {job}
        </div>
        <div className={styles.experienceTime}>
          {time}
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.experienceTitle}>
          {title}
        </div>
        <div className={styles.experienceDescription}>
          {desc}
        </div>
        <div className={styles.experienceSkills}>
          {skills.map((item: string) => {
            return (
              <div className={styles.experienceSkillItem} key={item}>
                {item}
              </div>
            )
          })}
        </div>
      </div>
    </a>
  )
}

export default ProjectStyles;