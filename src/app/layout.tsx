import React from 'react'
import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Anton } from 'next/font/google'
import '@/styles/globals.css'

const plusJakarta = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-plus-jakarta',
})

const anton = Anton({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-anton',
})

export const metadata: Metadata = {
  title: 'Wifidabba WXM',
  description: 'Dabba is deploying and managing 800 Weather XM Stations across India',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${anton.variable} font-sans`}>
      <body>{children}</body>
    </html>
  )
} 