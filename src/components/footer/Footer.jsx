import React from 'react'
import styles from "./footer.module.css";

function Footer() {
  return (
    <div className={styles.container}>
      <div>
        ©2023 Wizardy Blog. All rights reserved.
      </div>
      <div className={styles.social}>
        <span>social media icons</span>
      </div>
  </div>
  )
}

export default Footer