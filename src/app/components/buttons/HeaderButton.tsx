import { useState } from 'react';
import styles from './Button.module.css';

const HeaderButton = ({name, reference}: any) => {


  return (
    <a className={styles.headerButton} title={`Scroll to ` + name} href={reference}>
      {name}
    </a>
  )
}

export default HeaderButton;