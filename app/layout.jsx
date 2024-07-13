// import Head from 'next/head'
import { ThemeProvider } from 'next-themes'
import { poppins, roboto } from './fonts'
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import Contact from '@/components/sections/contact/Contact'
import BackToTop from '@/components/links/back-to-top/BackToTop'
import '@/styles/globals.scss'

const header = poppins
const body = roboto

export const metadata = {
  openGraph: {
    title: 'Henry Chevy || Data Analyst & Data Storyteller',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.',
    url: '#',
    images: [
      {
        url: '#', // Change this to your image URL, example, "https://example.com/img/profile-site.png"
        width: 800,
        height: 600,
        alt: 'Default OG Image Alt',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '#',
    title: 'Henry Chevy || Data Analyst & Data Developer',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    image:
      'https://client-profile-rf-git-7f2d7b-joelborofskydevgmailcoms-projects.vercel.app/img/site-image.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </head>
      <body className={`${header.variable} ${body.variable}`}>
        <ThemeProvider>
          <Header />
          <BackToTop />
          {children}
          <Contact />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
