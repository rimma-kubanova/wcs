import type { Metadata } from 'next'
import Navbar from '@/components/navbar'
import { Inter } from 'next/font/google'
import './globals.css'
import Footer from '../components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@500&family=Ubuntu:wght@500&display=swap" rel="stylesheet"></link>
      </head>
      <body className={inter.className}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
