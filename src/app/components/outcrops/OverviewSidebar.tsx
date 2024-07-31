import HoverButton from '../buttons/HoverButton';
import styles from './Outcrops.module.css'

const OverviewSidebar = () => {

  return (
    <div className={styles.sidebarContainer}>
      <a href='https://www.linkedin.com/in/justin-aschenbrenner/' target='_blank' rel='noopener noreferrer'>
        <HoverButton type='LinkedIn'/>
      </a>
      <a href='https://github.com/Justinn253' target='_blank' rel='noopener noreferrer'>
        <HoverButton type='GitHub'/>
      </a>
      <a href='https://www.linkedin.com/in/justin-aschenbrenner/overlay/1722288216854/single-media-viewer/?profileId=ACoAADMKGYUB6tHQWEgIAV6zH8By1skORAz1688' target='_blank' rel='noopener noreferrer'>
        <HoverButton type='Resume'/>
      </a>
    </div>
  )
}

export default OverviewSidebar;