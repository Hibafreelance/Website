import './globals.css'
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
import { Poppins } from 'next/font/google'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'Learn to Freelance — for free | HibaFreelance',
    template: '%s - HibaFreelance'
  },
  description: 'HibaFreelance : Your Go-To Community for Free Learning Resources and Expert Support on Your Educational Journey',
  openGraph: {
    title: 'Learn to Freelance — for free | HibaFreelance',
    description: 'HibaFreelance : Your Go-To Community for Free Learning Resources and Expert Support on Your Educational Journey',
    images: '/HibaFreelance.jpg'
  },
  twitter: {
    card: 'summary_large_image',
    site: '@hibafreelance',
    title: 'Learn to Freelance — for free | HibaFreelance',
    description: 'HibaFreelance : Your Go-To Community for Free Learning Resources and Expert Support on Your Educational Journey',
    images: '/HibaFreelance.jpg'
  }
}
export const pop = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight:['100','200','400','500','600','700','800']
})
 


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
  
    <html lang="en">
      <body className="h-full scroll-smooth bg-white antialiased">
      <div className={pop.className}>
      <NavBar/>
      <main className='relative overflow-hidden'>{children}</main>
      <Footer/>
      </div>
      </body>
    </html>
  )
}
