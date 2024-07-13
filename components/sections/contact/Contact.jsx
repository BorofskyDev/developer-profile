import SectionHeading from '@/components/headings/section-heading/SectionHeading'
import styles from './Contact.module.scss'
import BodyText from '@/components/body-text/BodyText'

export default function Contact() {
  return (
    <section className={styles.contact} id='contact'>
      <SectionHeading>Contact</SectionHeading>
      <BodyText>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, nobis
        eaque. Sunt possimus impedit repellendus illo nemo dignissimos molestiae
        distinctio adipisci, inventore fugit necessitatibus officia fugiat
        dolorum quia maxime? Consequatur?
      </BodyText>
      <div>
        <a href='#'>Email</a>
        <a href='#' target='_blank'>
          LinkedIn
        </a>
        <a href='#' target='_blank'>
          GitHub
        </a>
        <a href='#' target='_blank'>
          Medium
        </a>
      </div>
    </section>
  )
}
