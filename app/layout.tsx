import type { Metadata } from 'next'
import './globals.css'
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'



export const metadata: Metadata = {
  title: 'Hiba : Learn how to Freelance ',
  description: 'Make a secondary income by learning a skill you can sell , and master the art of earning from the internet',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="h-full scroll-smooth bg-white antialiased">
      <NavBar/>
      <main className='relative overflow-hidden'>{children}</main>
      <Footer/>
      </body>
    </html>
  )
}
