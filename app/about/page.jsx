import BodyText from '@/components/body-text/BodyText'
import SectionHeading from '@/components/headings/section-heading/SectionHeading'
import SubHeading from '@/components/headings/sub-heading/SubHeading'
import MainHeading from '@/components/headings/main-heading/MainHeading'
import styles from './AboutPage.module.scss'

export const metadata = {
  title: 'Henry Chevy | About',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
}

export default function AboutPage() {
  return (
    <main className={styles.aboutPage}>
      <MainHeading>About</MainHeading>
      <BodyText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </BodyText>
      <section>
        <SectionHeading>Work History</SectionHeading>
        <ul>
          <li>
            <SubHeading>Amazon</SubHeading>
            <BodyText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Ipsum dolor sit amet,
              consectetur adipiscing elit. Sed do eius tempor incid ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </BodyText>
          </li>

          <li>
            <SubHeading>Google</SubHeading>
            <BodyText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Ipsum dolor sit amet,
              consectetur adipiscing elit. Sed do eius tempor incid ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </BodyText>
          </li>

          <li>
            <SubHeading>NASA</SubHeading>
            <BodyText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Ipsum dolor sit amet,
              consectetur adipiscing elit. Sed do eius tempor incid ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </BodyText>
          </li>
        </ul>
      </section>
    </main>
  )
}
