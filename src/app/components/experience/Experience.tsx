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
        <p className={styles.experienceDescription}>
          Working primarily as a Frontend Developer using Angular and some JSP. Responsible for helping modernize MyAccounts and ePay. Assisting with maintenance and additional features for Timos and legacy ePay.
        </p>
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