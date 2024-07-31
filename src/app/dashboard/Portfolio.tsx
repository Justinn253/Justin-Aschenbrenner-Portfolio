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
      <header>
        <PageHeader/>
      </header>

      <main className={styles.main}>
        <section className={styles.left}>
          <div>
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
      </main>

      <footer>

      </footer>
    </>
  )
}

export default Portfolio;