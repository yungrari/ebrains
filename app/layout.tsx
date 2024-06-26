import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { ViewTransitions } from 'next-view-transitions'

import { cn } from '@/lib/utils'
import Constructivism from '@/components/constructivism'
import Navigation from '@/components/navigation'

import './globals.css'

const inter = Inter({ subsets: ['latin'], weight: '500' })

export const metadata: Metadata = {
  title: 'EBRAINS',
  description:
    'Web based 3D art exhibition inspired by EBRAINS CoCreate Artificial Intelligence',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body className={cn(inter.className, 'overflow-hidden')}>
          <main className="h-svh overflow-y-auto">
            <Constructivism />
            <Navigation />
            {children}
          </main>
          <SpeedInsights />
        </body>
      </html>
    </ViewTransitions>
  )
}
