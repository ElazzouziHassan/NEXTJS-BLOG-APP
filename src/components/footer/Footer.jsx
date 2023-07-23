import React from 'react'
import styles from "./footer.module.css";
import Image from 'next/image';

function Footer() {
  return (
    <div className={styles.container}>
      <div>
        ©2023 Wizardy Blog. All rights reserved.
      </div>
      <div className={styles.social}>
        <a
          href="https://web.facebook.com/itsmewizardy/"
          target="_blank"
        >
          <Image
            src="/facebook.png"
            width={15} height={15}
            className={styles.icon}
            alt="Author facebook account"
          />
        </a>
        <a
          href="https://twitter.com/itsmewizardy"
          target="_blank"
        >
          <Image
            src="/twitter.png"
            width={15} height={15}
            className={styles.icon}
            alt="Author twitter account"
          />
        </a>
        <a
          href="https://www.instagram.com/_wizardy__/"
          target="_blank"
        >
          <Image
            src="/instagram.png"
            width={15} height={15}
            className={styles.icon}
            alt="Author instagram account"
          />
        </a>
      </div>
  </div>
  )
}

export default Footer