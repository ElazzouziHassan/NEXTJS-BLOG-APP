import React from 'react'
import styles from "./page.module.css";
import Link from 'next/link';

const Portfolio = () => {
  return (
    <div className={styles.container}>
    <h1 className={styles.selectTitle}>Choose a gallery</h1>
    <div className={styles.items}>
      <Link href="/portfolio/illustrations" className={styles.item}>
        <span className={styles.title}>UI/ UX</span>
      </Link>
      <Link href="/portfolio/websites" className={styles.item}>
        <span className={styles.title}>Databases</span>
      </Link>
      <Link href="/portfolio/application" className={styles.item}>
        <span className={styles.title}>Front-End</span>
      </Link>
      <Link href="/portfolio/application" className={styles.item}>
        <span className={styles.title}>Back-End</span>
      </Link>
        
    </div>
  </div>
  )
}

export default Portfolio