import React from 'react'
import styles from "./page.module.css";
import Button from '@/components/button/Button';
import Image from 'next/image';

export const metadata = {
  title: "Wizardy Blog Contact Information",
  description: "This is Contact Page",
};


const Contact = () => {
  return (
    <div className={styles.container}>
    <h1 className={styles.title}>Contact us</h1>
    <div className={styles.content}>
      <div className={styles.imgContainer}>
        <Image
          src="/contact.png"
          alt="contact image"
          fill={true}
          className={styles.image}
        />
      </div>
      <form className={styles.form}>
        <input type="text" placeholder="name" className={styles.input} />
        <input type="text" placeholder="email" className={styles.input} />
        <textarea
          className={styles.textArea}
          placeholder="message"
          cols="20"
          rows="6"
        ></textarea>
        <Button url="#" text="Send"/>
      </form>
    </div>
  </div>
  )
}

export default Contact