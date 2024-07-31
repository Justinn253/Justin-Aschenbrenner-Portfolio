import styles from './Navs.module.css'

const DynamicNav = () => {

  return (
    <div className={styles.dynamicNavContainer}>
      <div>-- About Me --</div>
      <div>-- Experience --</div>
      <div>-- Projects --</div>
      <div>-- Education --</div>
    </div>
  )
}

export default DynamicNav;