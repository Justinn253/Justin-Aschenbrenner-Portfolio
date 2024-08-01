'use client'

import About from '../components/about/About'
import Education from '../components/education/Education'
import Experience from '../components/experience/Experience'
import PageHeader from '../components/outcrops/PageHeader'
import Overview from '../components/overview/Overview'
import Projects from '../components/projects/Projects'
import PictureSlider from '../components/slider/PictureSlider'
import styles from './Portfolio.module.css'

const Portfolio = () => {

  return (
    <>
      <div className={styles.main}>
        <section className={styles.left}>
          <div>
            <section className={styles.pageWarning}>
              <p className={styles.warningContent}>
                This page is under development. Working for 1080p resolutions.
              </p>
            </section>
            <section>
              <Overview/>
            </section>
            <section>
              <PictureSlider/>
            </section>
          </div>
        </section>
        <div></div>
        <section className={styles.right}>
          <div id='aboutSection'>
            <About/>
            <div className={styles.sectional}>
              <span className={styles.sb}></span> Experience <span className={styles.sb}></span>
            </div>
          </div>

          <div id='experienceSection'>
            <Experience/>
            <div className={styles.sectional}>
              <span className={styles.sb}></span> Projects <span className={styles.sb}></span>
            </div>
          </div>

          <div id='projectsSection'>
            <Projects/>
          </div>
        </section>
      </div>
    </>
  )
}

export default Portfolio;