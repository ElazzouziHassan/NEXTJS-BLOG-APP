import React from 'react'
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";
import AboutImg from '../../../public/about-img-1.jpg'

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src={AboutImg}
          fill={true}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>El azzouzi Hassan (Wizardy) 🧙‍♂️</h1>
          <h2 className={styles.imgDesc}>
          Experienced Web Full Stack Developer 
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>About me</h1>
          <p className={styles.desc}>
            Hello! Welcome to my personal blog.
            I am an experienced Full Stack Developer who loves using modern technology to solve problems. With a track record of successful projects, I have a wide range of technical skills in both frontend and backend development.
            <br />
            <br />
            I am fueled by my passion for technology, which keeps me eager to learn and grow in my field. I am always seeking new challenges and opportunities to expand my knowledge and skills. Staying up-to-date with the latest trends and technologies is a priority for me, as it allows me to provide innovative solutions to my clients.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>Professional Skills: </h1>
          <p className={styles.desc}>
          HTML5, CSS3, SASS, JavaScript (JSX), React.js, Node.js, Express.js, PHP, Laravel, Python, FastAPI, MySQL, MongoDB, Git Bash, Agile Project Management, User Experience (UX) Design.
          </p>
          <h1 className={styles.title}>Domain Knowledge: </h1>
          <p className={styles.desc}>
                  - Front-end Developement
            <br /> - Back-end Developement
            <br /> - UI/ UX Design
          </p>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  )
}

export default About