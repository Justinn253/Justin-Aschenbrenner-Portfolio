import styles from './About.module.css';

const About = () => {
  
  
  return (
    <div className={styles.aboutContainer}>
      <p className={styles.aboutInfo}>
        I started my journey into development in college with no real knowledge of development. Senior year I really started to delve deeper 
        into learning on my own time with things that I found interesting and my love for being a software engineer grew. I graduated college and landed a 
        job at my current company <span className={styles.aboutBold}>BMO</span>. Still not knowing what I wanted to pursue in my career, I was asked to join the frontend team and happily agreed. 
        I spent about a few weeks teaching myself frontend development and this is where my love for it really stuck!
      </p>
      <p className={styles.aboutInfo}>
        Having been a developer for over 2 years now, I have become proficient in <span className={styles.aboutBold}>Angular</span> and <span className={styles.aboutBold}>JSP</span> and now set my eyes on building my knowledge with other libraries and frameworks.
        I like to make quick little side-projects to test new technologies and build my understanding of the frontend world. I am now working on a full-stack 
        project using the MERN stack to create a <span className={styles.aboutBold}>flashcards app</span> that I can access from anywhere which I will use to study
        up on old and new topics related to software engineering and algorithms.
      </p>
      <p className={styles.aboutInfo}>
        Right now, I consider myself primarily a frontend developer. My goal is to become as proficient as possible in frontend development while also being able to build a reliable backend to connect with my applications. Hopefully within a few
        years I can classify myself as a strong full-stack developer.
      </p>
    </div>
  )
}

export default About;