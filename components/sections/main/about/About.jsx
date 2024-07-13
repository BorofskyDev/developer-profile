import SectionHeading from '@/components/headings/section-heading/SectionHeading'
import styles from './About.module.scss'
import PageLink from '@/components/links/pagelink/PageLink'
import BodyText from '@/components/body-text/BodyText'

export default function About() {
  return (
    <section className={styles.about} id='about'>
      <SectionHeading>About</SectionHeading>
      <BodyText>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus
        sequi error odit possimus ipsam ea adipisci, id fuga nemo culpa a dolor
        hic vero esse minus odio quo impedit similique?
      </BodyText>
      <PageLink href='/about'>Learn more about me</PageLink>
    </section>
  )
}
