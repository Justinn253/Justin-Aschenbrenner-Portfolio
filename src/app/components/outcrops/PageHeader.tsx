'use client'

import HeaderButton from '../buttons/HeaderButton'
import styles from './Outcrops.module.css'
import {BsEnvelopeFill, BsFillTelephoneFill} from 'react-icons/bs'
import Image from 'next/image';
import pic from '../../assets/pic.png'

const PageHeader = () => {
  const phone = '+1 (253) 337-3775';
  const email = 'justinaschenbrenner@gmail.com';

  return (
    <nav className={styles.headerContainer}>
      <div className={styles.headerPicture}>
        <a href='https://www.linkedin.com/in/justin-aschenbrenner/' target='_blank' rel='noopener noreferrer' title='LinkedIn'>
          <Image src={pic} alt="Justin Aschenbrenner" className={styles.selfImage}/>
        </a>
      </div>

      <div className={styles.headerContact}>
        <h3>Contact Me: </h3>
        <span onClick={() =>  navigator.clipboard.writeText(email)} title='Copy Email'>
          <BsEnvelopeFill className={styles.contactIcon}/> Email: <span>{email}</span>
        </span>
        <span onClick={() =>  navigator.clipboard.writeText(phone)} title='Copy Phone Number'>
          <BsFillTelephoneFill className={styles.contactIcon}/> Phone Number: <span>{phone}</span> 
        </span>
      </div>

      <nav className={styles.headerNav}>
        <HeaderButton name='About Me' reference='#aboutSection'></HeaderButton>
        <HeaderButton name='Experience' reference='#experienceSection'></HeaderButton>
        <HeaderButton name='Projects' reference='#projectsSection'></HeaderButton>
        <HeaderButton name='Education' reference='#educationSection'></HeaderButton>
      </nav>
    </nav>
  )
}

export default PageHeader;