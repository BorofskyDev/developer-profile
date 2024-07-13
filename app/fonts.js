import { Roboto, Poppins } from 'next/font/google'

export const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: [  '400', '700', '900'],
})

export const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-body',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    })