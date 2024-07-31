import Image from 'next/image';
import styles from './PictureSlider.module.css';
import bmo from '../../assets/bmo.png';
import howl from '../../assets/chat_app.png';
import disc from '../../assets/dc_bot.png';
import flash from '../../assets/flashcards.png';
import league from '../../assets/league.png';
import uwt from '../../assets/uwt.png'

const PictureSlider = () => {

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.sliderSlot}>
        <div className={styles.sliderItem} title='BMO Bank Software Engineer'>
          <Image src={bmo} alt='BMO Bank' className={styles.sliderImage}/>
        </div>
        <div className={styles.sliderItem} title='React Flashcards App'>
          <Image src={flash} alt='React Flashcards App' className={styles.sliderImage}/>
        </div>
        <div className={styles.sliderItem} title='League of Legends Trivia'>
          <Image src={league} alt='League of Legends Trivia' className={styles.sliderImage}/>
        </div>
        <div className={styles.sliderItem} title='Discord Bot'>
          <Image src={disc} alt='Discord Bot' className={styles.sliderImage}/>
        </div>
        <div className={styles.sliderItem} title='Howlr Chat App'>
          <Image src={howl} alt='Howlr Chat App' className={styles.sliderImage}/>
        </div>
        <div className={styles.sliderItem} title='University of Washington'>
          <Image src={uwt} alt='University of Washington' className={styles.sliderImage}/>
        </div>
      </div>
    </div>
  )
}

export default PictureSlider;