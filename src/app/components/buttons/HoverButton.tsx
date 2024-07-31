import { IconContext } from 'react-icons';
import styles from './Button.module.css';
import {BsGithub, BsLinkedin, BsFileEarmarkPdfFill} from 'react-icons/bs';

const HoverButton = ({type}: any) => {

  return (
    <div className={styles.hoverButtonCont} title={type}>
      <div>{type}</div>
      <div className={styles.hoverButton}>
        <IconContext.Provider value={{size: '42'}}>
        <BsLinkedin className={type === 'LinkedIn' ? styles.vis : styles.nvis}/>
          <BsGithub className={type === 'GitHub' ? styles.vis : styles.nvis}/>
          <BsFileEarmarkPdfFill className={type === 'Resume' ? styles.vis : styles.nvis}/>
        </IconContext.Provider>
      </div>
    </div>
  )
}

export default HoverButton;