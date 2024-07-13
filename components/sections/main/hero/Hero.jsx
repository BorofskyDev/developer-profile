import MainHeading from '@/components/headings/main-heading/MainHeading'
import styles from './Hero.module.scss'

import BackgroundArt from './background-art/BackgroundArt'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div>
        <MainHeading>Henry Chevy</MainHeading>
        <h2>Data Analyst & Data Developer</h2>
      </div>
      <BackgroundArt />
    </section>
  )
}
