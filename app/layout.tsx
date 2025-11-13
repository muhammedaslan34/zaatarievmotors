import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import StickyActions from '@/components/StickyActions'
import { Toaster } from '@/components/ui/sonner'

export const metadata: Metadata = {
  title: 'ZAATARI EV Motors - Dubai | Premium Electric Vehicles',
  description: 'Authorized distributor of premium electric vehicles in the GCC region, bringing innovation and sustainability to Dubai.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#0A0A0A] text-[#E6F6FF]" suppressHydrationWarning>
        <Navbar />
        {children}
        <Footer />
        <StickyActions />
        <Toaster position="top-right" />
      </body>
    </html>
  )
}
