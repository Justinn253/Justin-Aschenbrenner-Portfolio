import { useState } from 'react';
import styles from './Button.module.css';

const HeaderButton = ({name}: any) => {
  const [test, setTest] = useState('test');

  const scrollTo = () => {
    console.log('Scrolled to ' + name)
  }

  return (
    <div className={styles.headerButton} title={`Scroll to ` + name} onClick={scrollTo}>
      {name}
    </div>
  )
}

export default HeaderButton;