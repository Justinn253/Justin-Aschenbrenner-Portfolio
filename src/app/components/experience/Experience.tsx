import styles from './Experience.module.css';

const Experience = () => {


  return (
    <div className={styles.experienceContainer}>
      <div className={styles.left}>
        <div className={styles.experienceJob}>
          Bank of Montreal
        </div>
        <div className={styles.experienceTime}>
          July 2022 - Current
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.experienceTitle}>
          Software Developer 1
        </div>
        <div className={styles.experienceDescription}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi beatae delectus dolorum magni unde eaque perspiciatis cupiditate, labore officiis id, earum natus nesciunt corrupti perferendis fugit necessitatibus officia libero tenetur.
        </div>
        <div className={styles.experienceSkills}>
          <div className={styles.experienceSkillItem}>
            Angular
          </div>
          <div className={styles.experienceSkillItem}>
            TypeScript
          </div>
          <div className={styles.experienceSkillItem}>
            JavaScript
          </div>
          <div className={styles.experienceSkillItem}>
            JSP
          </div>
          <div className={styles.experienceSkillItem}>
            Java
          </div>
          <div className={styles.experienceSkillItem}>
            HTML/CSS
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience;