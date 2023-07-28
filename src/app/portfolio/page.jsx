import React from 'react'
import styles from "./page.module.css";
import Link from 'next/link';

const Portfolio = () => {
  return (
    <div className={styles.container}>
    <h1 className={styles.selectTitle}>Choose a gallery</h1>
    <div className={styles.items}>
      <Link href="/portfolio/Websites" className={styles.item}>
        <span className={styles.title}>Websites</span>
      </Link>
      <Link href="/portfolio/Applications" className={styles.item}>
        <span className={styles.title}>Applications</span>
      </Link>
      <Link href="/portfolio/illustrations" className={styles.item}>
        <span className={styles.title}>illustrations</span>
      </Link>   
    </div>
  </div>
  )
}

export default Portfolio