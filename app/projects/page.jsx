import ProjectsPageComponent from './ProjectsPageComponent'
import styles from './ProjectsPage.module.scss'

export const metadata = {
  title: 'Henry Chevy | Projects',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
}

export default function ProjectsPage() {
  return (
    <main className={styles.projectsPage}>
      <ProjectsPageComponent />
    </main>
  )
}
