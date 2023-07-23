import Image from 'next/image'
import styles from './page.module.css'
import Hero from "public/hero.png";
import Button from '@/components/button/button';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
        Modern Solutions For Your Business.
        </h1>
        <p className={styles.description}>
          Turning your Idea into Reality. We bring together the teams from the
          global tech industry.
        </p>
        <Button url="/portfolio" text="See My Works"/>
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt="" className={styles.img} />
      </div>
    </div>
  )
}
