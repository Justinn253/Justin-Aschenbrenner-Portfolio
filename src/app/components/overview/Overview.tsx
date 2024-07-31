import DynamicNav from '../navs/DynamicNav';
import OverviewSidebar from '../outcrops/OverviewSidebar';
import styles from './Overview.module.css'

const Overview = () => {
  const skills = [
    {skill: 'Angular', nav: 'https://docs.angularjs.org/guide'},
    {skill: 'React', nav: 'https://react.dev/'},
    {skill: 'TypeScript', nav: 'https://www.typescriptlang.org/docs/'},
    {skill: 'JavaScript', nav: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'},
    {skill: 'Java', nav: 'https://docs.oracle.com/javase/8/docs/api/'},
    {skill: 'JSP', nav: 'https://tomcat.apache.org/tomcat-5.5-doc/jspapi/index.html'}
  ];

  return (
    <div className={styles.overviewContainer}>
      <div className={styles.descriptionContainer}>
        <div className={styles.descriptionHeader}>
          <h1 className={styles.h1}>Justin Aschenbrenner</h1>
          <h2 className={styles.h2}>Software Engineer</h2>
        </div>
        <p className={styles.description}>
          Experienced Frontend Developer making reliable, high-performance, and user-friendly Web Applications
        </p>
        <div className={styles.primarySkills}>
          <h4>Primary Skills</h4>
          <div className={styles.skillList}>
            {skills.map((item: {skill: string, nav: string}) => {
              return (
                <div className={styles.skillItem} key={item.skill}>
                  <a href={item.nav} target='_blank' rel='noopener noreferrer'>{item.skill}</a>
                </div>
              )
            })}
          </div>
        </div>
        <OverviewSidebar/>
      </div>
    </div>
  )
}

export default Overview;